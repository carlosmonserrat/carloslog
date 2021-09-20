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
    val randomUUID = UUID.randomUUID.toString
    val timeNow = LocalDateTime.now().toString()
    article match {
      case Article(_, Some(title), _, _, Some(image), Some(description), Some(content)) =>
        sql"""
         INSERT INTO articles (id, title,create_date, image, description, content)
         VALUES ('#$randomUUID', '#${title.querySanitize}','#$timeNow', '#${image.querySanitize}', '#${description.querySanitize}', '#${content.querySanitize}');
         """
      case _ => sql""
    }
  }

  def selectArticlesQuery(): SQLActionBuilder = {
    sql"""
         SELECT id,title,create_date,last_update,image,description,content from articles
       """
  }

}

object QueryFactory {

  implicit class customQueryString(query: String) {
    def querySanitize: String = query.replace("'", "''")
  }

  def queryToString(query: SQLActionBuilder): String = {
    query.queryParts.mkString("").replace("\n", "")
  }

  case class TableDefinitions(tableName: String, definition: String)

  val tables = Map(
    "articles" -> """ id varchar(255), title varchar(255), create_date timestamp, last_update timestamp, image text, description text, content text """
  )
}
