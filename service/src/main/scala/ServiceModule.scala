import com.typesafe.config.{Config, ConfigFactory}
import database.{DatabaseDefinition, QueryFactory}
import executioncontext.ExecutionContextFactory
import routing.Routing
import routing.akkahttp.AkkaHttpRouting
import scaldi.Module

class ServiceModule extends Module {
  private val config: Config = ConfigFactory.load
  bind[Config] to config
  bind[Routing] to injected[AkkaHttpRouting]
  bind[DatabaseDefinition] to injected[DatabaseDefinition]
  bind[QueryFactory] to injected[QueryFactory]
  bind[ExecutionContextFactory] to injected[ExecutionContextFactory]
}
