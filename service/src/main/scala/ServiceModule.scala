import routing.Routing
import routing.akkahttp.AkkaHttpRouting
import scaldi.Module

class ServiceModule extends Module{
  bind[Routing] to injected[AkkaHttpRouting]
}
