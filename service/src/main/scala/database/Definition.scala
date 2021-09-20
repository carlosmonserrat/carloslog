package database

import scaldi.{Injectable, Injector}
import slick.basic.DatabaseConfig
import slick.dbio.{DBIOAction, NoStream}
import slick.jdbc.PostgresProfile
import slick.jdbc.PostgresProfile.api._

import scala.concurrent.Future

class Definition(implicit var injector: Injector) extends Injectable {
  val db = DatabaseConfig.forConfig[PostgresProfile]("postgres").db
  implicit val session: Session = db.createSession()

  def run[T](queryAction: DBIOAction[T, NoStream, Effect.All]): Future[T] = {
    db.run(queryAction)
  }
}