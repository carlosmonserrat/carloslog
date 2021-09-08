package routing.akkahttp

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse}
import akka.http.scaladsl.server.Directives.{entity, _}
import akka.http.scaladsl.server.Route
import com.typesafe.config.Config
import logging.Logging
import routing.Routing
import scaldi.akka.AkkaInjectable
import scaldi.{Injectable, Injector}

import scala.concurrent.{ExecutionContextExecutor, Future}
import scala.util.{Failure, Success}

class AkkaHttpRouting(implicit injector: Injector) extends Injectable with AkkaInjectable with Routing with Logging {
  private val config: Config = inject[Config]

  implicit private val system: ActorSystem = ActorSystem("DVZA-Support-Console-Akka-Http")
  implicit private val executionContext: ExecutionContextExecutor = system.dispatcher


  override def start(host: String, port: Int): Unit = {
    Http().newServerAt(host, port).bind(routes)
      .onComplete {
        case Success(_) =>
          logInfo(s"API endpoint online at http://$host:$port/")
        case Failure(e) =>
          logError(s"API endpoint could not start!")
          e.printStackTrace()
          system.terminate()
      }
  }

  private val routes: Route = {
    Route.seal(
      concat(
        get {
          path(Segment) {
            case "ping" =>
              complete("pong")
          }
        },
        post {
          pathPrefix(Segment) {
            _ => //Any Resource types are accepted
              path(Segment) {
                _ => //All Codes are accepted
                  entity(as[String]) {
                    listOfResources =>
                      parameters("transactionId") {
                        _ =>
                          complete(
                            HttpResponse(
                              entity =
                                HttpEntity(
                                  contentType = ContentTypes.`application/json`,
                                  string =  "Hi"
                                )
                            )
                          )
                      }
                  }
              }
          }
        }
      )
    )(
      rejectionHandler = GlobalHandlers.globalRejectionHandlerJson,
      exceptionHandler = GlobalHandlers.globalExceptionHandlerJson
    )
  }

  private def completeSuccess(response: Future[HttpResponse], endpoint: String): Future[HttpResponse] = {
    response
  }
}