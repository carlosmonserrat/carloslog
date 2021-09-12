package database

import org.joda.time.{LocalDate, LocalDateTime}
import slick.jdbc.SQLActionBuilder
import slick.jdbc.PostgresProfile.api._

import java.util.UUID

class QueryFactory {

  def createTables(): SQLActionBuilder = {
    sql"""
         CREATE TABLE IF NOT EXISTS  articles (
             id varchar(255),
             title varchar(255),
             create_date timestamp,
             last_update timestamp,
             image varchar(255),
             description varchar(255),
             content text
             );
         """
  }

  def addArticle(): SQLActionBuilder = {
    val randomUUID = UUID.randomUUID.toString
    val timeNow = LocalDateTime.now().toString()
    println(randomUUID)
    sql"""
         INSERT INTO articles (id, title,create_date, image, description, content)
         VALUES ('#$randomUUID', 'What a great codes','#$timeNow', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlsVBciLrh4x0jQ8oauHIeRTmyY0NX2H8NA&usqp=CAU', 'Code is based on', 'This post was made for');
         """
  }

  def selectArticle():SQLActionBuilder={
    println("s")
    sql"""
         SELECT title,create_date,image,description,content from articles
       """
  }



}
