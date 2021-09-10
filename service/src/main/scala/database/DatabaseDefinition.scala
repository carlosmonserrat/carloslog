package database

import scaldi.{Injectable, Injector}
import slick.basic.DatabaseConfig

class DatabaseDefinition(implicit var injector: Injector) extends Injectable {
  val db = DatabaseConfig.forConfig("postgres")
}
