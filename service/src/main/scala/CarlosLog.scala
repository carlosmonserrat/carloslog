import database.Operations
import logging.Logging
import routing.Routing
import scaldi.akka.AkkaInjectable

object CarlosLog extends App with AkkaInjectable with Logging {
  implicit val serviceModules: ServiceModule = new ServiceModule
  private val routing = inject[Routing]
  private val dbOperations = inject[Operations]

  dbOperations.createTablesIfNotExists()
  dbOperations.generateMockData()

  routing.start("0.0.0.0", 8001)
}
