package database

import database.QueryFactory.customQueryString
import models.Article
import org.joda.time.LocalDateTime
import slick.jdbc.PostgresProfile.api._
import slick.jdbc.SQLActionBuilder

import java.util.UUID

class QueryFactory {

  def createTablesQuery: SQLActionBuilder = {
    sql"#${
      QueryFactory.tables.map {
        case (tableName, definitions) =>
          s" CREATE TABLE IF NOT EXISTS $tableName ($definitions) "
      }.mkString(";")
    }"
  }

  def selectAllTableNamesQuery: SQLActionBuilder = {
    sql"""
         SELECT tablename
         FROM pg_catalog.pg_tables
         WHERE schemaname = 'public';
         """
  }

  def insertArticleQuery(article: Article): SQLActionBuilder = {
    println(article)
    val randomUUID = UUID.randomUUID.toString
    val timeNow = LocalDateTime.now().toString()
    article match {
      case Article(_, Some(title), _, _, Some(image), Some(description), Some(content)) =>
        val id =randomUUID
        sql"""
         INSERT INTO articles_content (id, content)
         VALUES ('#${id.querySanitize}','#${content.querySanitize}');

         INSERT INTO articles_meta (id, title,create_date, image, description)
         VALUES ('#${id.querySanitize}', '#${title.querySanitize}','#$timeNow', '#${image.querySanitize}', '#${description.querySanitize}');
         """
      case _ => sql""
    }
  }

  def totalArticles: SQLActionBuilder = {
    sql"SELECT Count(id) from articles_meta"
  }

  def selectArticlesQuery(offset: Int, limit: Int): SQLActionBuilder = {
    sql"""
         SELECT id,title,create_date,last_update,image,description
         FROM articles_meta ORDER BY create_date OFFSET #$offset LIMIT #$limit
       """
  }

  def selectArticleQuery(id: String): SQLActionBuilder = {
    sql"""
         SELECT c.id,m.title,m.create_date,m.last_update,m.image,m.description,c.content
         FROM articles_content as c, articles_meta as m
         WHERE c.id=m.id
         AND c.id = '#${id.querySanitize}'
       """
  }


}

object QueryFactory {

  implicit class customQueryString(query: String) {
    def querySanitize: String = query.replace("'", "''")
  }

  val tables = Map(
    "articles_meta" -> """ id varchar(255), title varchar(255), create_date timestamp, last_update timestamp, image text, description text """,
    "articles_content" -> """ id varchar(255), content text """
  )

  def queryToString(query: SQLActionBuilder): String = {
    query.queryParts.mkString("").replace("\n", "")
  }

  case class TableDefinitions(tableName: String, definition: String)

}
