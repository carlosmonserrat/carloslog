package models
//TODO add meta tags
case class Article(id: Option[String]=None,
                   title: Option[String]=None,
                   createDate: Option[String]=None,
                   lastUpdate: Option[String]=None,
                   image: Option[String]=None,
                   description: Option[String]=None,
                   content: Option[String]=None)