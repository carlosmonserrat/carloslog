package models

case class Pagination(previousPage: Option[String],
                      currentPage: String,
                      nextPage: Option[String])

case class Pages(pagination: Pagination,
                 articles: List[Article])
