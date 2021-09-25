package models

case class Pages(previousPage: Option[String],
                 currentPage: String,
                 nextPage: Option[String],
                 articles: List[Article])
