import routing.Routing
import scaldi.akka.AkkaInjectable

object CarlosLog extends App  with AkkaInjectable {
  implicit val serviceModules: ServiceModule = new ServiceModule
  private val routing = inject[Routing]
  routing.start("0.0.0.0", 8001)
}
