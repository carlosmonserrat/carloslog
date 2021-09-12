import akka.actor.ActorSystem
import com.typesafe.config.Config
import database.{DatabaseDefinition, QueryFactory}
import executioncontext.ExecutionContextFactory
import routing.Routing
import scaldi.akka.AkkaInjectable
import slick.basic.DatabaseConfig
import slick.jdbc.PostgresProfile

import scala.concurrent.ExecutionContextExecutor

object CarlosLog extends App with AkkaInjectable {
  implicit val serviceModules: ServiceModule = new ServiceModule
  private val routing = inject[Routing]
  private val queryFactory = inject[QueryFactory]
  private val db = inject[DatabaseDefinition]
  private val executionContextFactory = inject[ExecutionContextFactory]
  implicit val reqSys: ActorSystem = ActorSystem("DVZA-Rest-Service-CGM-FHIR-Sync-Request")
  implicit val exCont: ExecutionContextExecutor = executionContextFactory.create("DVZA-Rest-Service-CGM-FHIR-Sync-Process")

  db.run(queryFactory.createTables().as[String])
  db.run(queryFactory.addArticle().as[String])

  routing.start("0.0.0.0", 8001)
}
