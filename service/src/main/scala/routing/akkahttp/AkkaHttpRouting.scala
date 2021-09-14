package routing.akkahttp

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import database.{Definition, QueryFactory}
import logging.Logging
import routing.Routing
import scaldi.akka.AkkaInjectable
import scaldi.{Injectable, Injector}
import slick.jdbc.GetResult

import scala.concurrent.{ExecutionContextExecutor, Future}
import scala.util.{Failure, Success}

class AkkaHttpRouting(implicit injector: Injector) extends Injectable with AkkaInjectable with Routing with Logging {
  implicit private val system: ActorSystem = ActorSystem("DVZA-Support-Console-Akka-Http")
  implicit private val executionContext: ExecutionContextExecutor = system.dispatcher
  private val queryFactory = inject[QueryFactory]
  private val db = inject[Definition]
  private val routes: Route = {
    Route.seal(
      concat(
        get {
          path(Segment) {
            case "ping" => complete(
              HttpEntity(ContentTypes.`text/html(UTF-8)`, "<h3>pong</h3>")
            )
            case "data" =>

              onComplete(for {results <- db.run(queryFactory.selectArticleQuery().as[List[String]](GetResult(result => List(result.nextString(), result.nextString(), result.nextString())))).map(_.flatten.toList)}
                yield {
                  results
                }) {
                case Success(value) => complete(s"The result was $value")
                case Failure(ex) => complete(StatusCodes.InternalServerError, s"An error occurred: ${ex.getMessage}")
              }

          }
        }
      )
    )(
      rejectionHandler = GlobalHandlers.globalRejectionHandlerJson,
      exceptionHandler = GlobalHandlers.globalExceptionHandlerJson
    )
  }

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

  private def completeSuccess(response: Future[HttpResponse], endpoint: String): Future[HttpResponse] = {
    response
  }
}