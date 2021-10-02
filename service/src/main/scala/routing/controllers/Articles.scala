package routing.controllers

import akka.actor.Actor
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse}
import akka.pattern.pipe
import com.typesafe.config.Config
import database.{Definition, QueryFactory}
import json.JsonConversion
import logging.Logging
import models.{Article, Pages, Pagination}
import routing.controllers.Articles.{GetArticle, GetArticles}
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import slick.jdbc.GetResult

import scala.concurrent.{ExecutionContextExecutor, Future}

class Articles(implicit injector: Injector) extends Actor with AkkaInjectable with Logging {
  private implicit val ec: ExecutionContextExecutor = context.dispatcher

  private val queryFactory = inject[QueryFactory]
  private val db = inject[Definition]
  private val config = inject[Config]

  def receive: Receive = {

    case GetArticles(parameters) =>
      getArticles(parameters)

    case GetArticle(parameters) =>
      getArticleContent(parameters)

  }

  def getArticleContent(parameters: Map[String, String]): Future[HttpResponse] = {

    val articleId = parameters.getOrElse("id", "")
    (for {
      article <- db.run(queryFactory.selectArticleQuery(articleId).as[Article](GetResult(result =>
        Article(
          id = Some(result.nextString()),
          title = Some(result.nextString()),
          createDate = Some(result.nextString()),
          lastUpdate = Option(result.nextString()),
          image = Some(result.nextString()),
          description = Some(result.nextString()),
          content = Some(result.nextString())
        )
      )))
    }
      yield {
        article.headOption.map(value =>
          HttpResponse(entity =
            HttpEntity(ContentTypes.`application/json`, JsonConversion.writeJson[Article](value))
          )
        ).getOrElse(
          HttpResponse(entity =
            HttpEntity(ContentTypes.`application/json`, "{}")
          )
        )
      }) pipeTo sender()
  }

  def getArticles(parameters: Map[String, String]): Future[HttpResponse] = {
    def offset = parameters.getOrElse("offset", "0").toInt

    def limit = parameters.getOrElse("limit", config.getString("application.pagination.limit")).toInt

    def page = parameters.getOrElse("page", "1").toInt

    val articles: Future[List[Article]] = for {
      articles <- db.run(queryFactory.selectArticlesQuery(offset, limit).as[Article](GetResult(result =>
        Article(
          id = Some(result.nextString()),
          title = Some(result.nextString()),
          createDate = Some(result.nextString()),
          lastUpdate = Option(result.nextString()),
          image = Some(result.nextString()),
          description = Some(result.nextString())
        )
      )))
    }
      yield {
        articles.toList
      }

    val totalArticles: Future[String] = for {
      total <- db.run(queryFactory.totalArticles.as[String](GetResult(result =>
        result.nextString()
      )))} yield {
      total
    }.head

    articles.flatMap(articlesValues =>
      totalArticles.map(totalValue => {
        val previousPage = page - 1
        val nextPage = page + 1
        val nextOffset = limit * nextPage
        val previousOffset = if (page == 2) 0 else limit * previousPage
        val lastPage = totalValue.toInt / limit

        val pages = Pages(
          pagination = Pagination(
            previousPage = if (page == 1) None else Some(s"http://localhost:8001/articles?page=$previousPage&offset=$previousOffset&limit=${limit}"),
            currentPage = s"http://localhost:8001/articles?page=${page}&offset=${offset}&limit=${limit}",
            nextPage = if (page == lastPage) None else Some(s"http://localhost:8001/articles?page=$nextPage&offset=$nextOffset&limit=${limit}")
          ),
          articles = articlesValues.toList)

        HttpResponse(entity =
          HttpEntity(ContentTypes.`application/json`, JsonConversion.writeJson[Pages](pages))
        )
      })
    ) pipeTo sender()
  }
}

object Articles {

  case class GetArticles(parameters: Map[String, String])

  case class GetArticle(parameters: Map[String, String])

}
