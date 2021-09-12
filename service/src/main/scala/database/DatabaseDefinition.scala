package database

import scaldi.{Injectable, Injector}
import slick.basic.DatabaseConfig
import slick.dbio.{DBIOAction, NoStream}
import slick.jdbc.PostgresProfile
import slick.jdbc.PostgresProfile.api._

import scala.concurrent.Future

class DatabaseDefinition(implicit var injector: Injector) extends Injectable {
  def run[T](query: DBIOAction[T, NoStream, Effect.All]): Future[T] = {
    DatabaseConfig.forConfig[PostgresProfile]("postgres")
      .db
      .run(query)
  }
}
