package routing.akkahttp

import akka.actor.{ActorRef, ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.pattern.ask
import akka.util.Timeout
import ch.megard.akka.http.cors.scaladsl.CorsDirectives._
import logging.Logging
import routing.Routing
import routing.controllers.Articles
import routing.controllers.Articles.{GetArticle, GetArticles}
import scaldi.akka.AkkaInjectable
import scaldi.{Injectable, Injector}

import scala.concurrent.ExecutionContextExecutor
import scala.concurrent.duration.{FiniteDuration, MINUTES}
import scala.util.{Failure, Success}

class AkkaHttpRouting(implicit injector: Injector) extends Injectable with AkkaInjectable with Routing with Logging {
  implicit private val system: ActorSystem = ActorSystem("DVZA-Support-Console-Akka-Http")
  implicit private val executionContext: ExecutionContextExecutor = system.dispatcher
  implicit lazy val akkaActorRequestTimeOut: Timeout = Timeout(FiniteDuration(5, MINUTES))

  val articles: ActorRef = injectActorRef[Articles]

  private val routes: Route = {
    Route.seal(
      cors()(
        get {
          parameterMap { parameters =>
            path(Segment) {
              case "ping" => complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "<h3>pong</h3>"))
              case "favicon.ico" => complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "no ico"))
              case "articles" => complete((articles ? GetArticles(parameters)).mapTo[HttpResponse])
              case "article" => complete((articles ? GetArticle(parameters)).mapTo[HttpResponse])
            }
          }
        }
      )
    )(
      rejectionHandler = GlobalHandlers.globalRejectionHandler,
      exceptionHandler = GlobalHandlers.globalExceptionHandler
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
}