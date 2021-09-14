package models

case class Article(id: Option[String],
                   title: Option[String],
                   createDate: Option[String],
                   lastUpdate: Option[String],
                   image: Option[String],
                   description: Option[String],
                   content: Option[String])