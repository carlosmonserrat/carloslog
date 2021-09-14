package database

import akka.actor.ActorSystem
import executioncontext.ExecutionContextFactory
import json.JsonConversion.formats
import logging.Logging
import models.Article
import org.json4s.native.JsonMethods
import scaldi.{Injectable, Injector}

import scala.concurrent.{ExecutionContextExecutor, Future}
import scala.util.{Failure, Success}

class Operations(implicit var injector: Injector) extends Injectable with Logging {
  private val executionContextFactory = inject[ExecutionContextFactory]
  private val queryFactory = inject[QueryFactory]
  private val db = inject[Definition]

  implicit val reqSys: ActorSystem = ActorSystem("DVZA-Rest-Service-CGM-FHIR-Sync-Request")
  implicit val exCont: ExecutionContextExecutor = executionContextFactory.create("DVZA-Rest-Service-CGM-FHIR-Sync-Process")
  private val databaseTables: List[String] = QueryFactory.tables.keys.toList

  def createTablesIfNotExists(): Unit = {
    db.run(queryFactory.selectAllTableNamesQuery.as[String]).map(response => {
      logInfo("- Database tables status")
      databaseTables.map {
        tableName =>
          if (response.contains(tableName)) logInfo(s"  - $tableName exist") else logInfo(s" - $tableName generated")
      }
    })
    db.run(queryFactory.createTablesQuery.as[String])
  }

  def generateMockData(): Unit = {
    val mockDataFile = scala.io.Source.fromResource("mockdata/articles.json")
    val mockData = mockDataFile.getLines.mkString
    val articles: List[Article] = JsonMethods.parse(mockData).extract[List[Article]]
    mockDataFile.close()

    Future.sequence(articles.map(article => {
      db.run(queryFactory.insertArticleQuery(article).as[Int])
    }))
      .map(_.flatten).onComplete {
      case Success(e) => logInfo(s"- Mock data generated ")
      case Failure(e) => logWarning(s"- Mock data was not generated correctly $e")
    }


  }

}
