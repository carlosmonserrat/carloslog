package database

import scaldi.{Injectable, Injector}
import slick.basic.DatabaseConfig
import slick.dbio.{DBIOAction, NoStream}
import slick.jdbc.PostgresProfile.api._
import slick.jdbc.{PostgresProfile, SQLActionBuilder}

import scala.concurrent.Future

class Definition(implicit var injector: Injector) extends Injectable {
  def run[T](queryAction: DBIOAction[T, NoStream, Effect.All]): Future[T] = {
    DatabaseConfig.forConfig[PostgresProfile]("postgres")
      .db
      .run(queryAction)
  }
}