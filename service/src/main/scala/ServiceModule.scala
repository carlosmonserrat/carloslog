import com.typesafe.config.{Config, ConfigFactory}
import database.{Definition, Operations, QueryFactory}
import executioncontext.ExecutionContextFactory
import routing.Routing
import routing.akkahttp.AkkaHttpRouting
import scaldi.Module

class ServiceModule extends Module {
  private val config: Config = ConfigFactory.load
  bind[Config] to config
  bind[Routing] to injected[AkkaHttpRouting]
  bind[Definition] to injected[Definition]
  bind[QueryFactory] to injected[QueryFactory]
  bind[Operations] to injected[Operations]
  bind[ExecutionContextFactory] to injected[ExecutionContextFactory]
}
