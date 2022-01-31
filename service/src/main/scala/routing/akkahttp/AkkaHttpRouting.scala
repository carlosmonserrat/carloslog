package routing.akkahttp

import akka.actor.{ActorRef, ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.http.scaladsl.server.directives.Credentials
import akka.pattern.ask
import akka.util.Timeout
import ch.megard.akka.http.cors.scaladsl.CorsDirectives._
import logging.Logging
import routing.Routing
import routing.controllers.Articles
import routing.controllers.Articles.{GetArticle, GetArticles, PostArticle}
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
        concat(
          get {
            parameterMap { parameters =>
              path(Segment) {
                case "ping" => complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "<h3>pong</h3>"))
                case "favicon.ico" => complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "no ico"))
                case "articles" => complete((articles ? GetArticles(parameters)).mapTo[HttpResponse])
                case "article" => complete((articles ? GetArticle(parameters)).mapTo[HttpResponse])
              }
            }
          },
          post {
            authenticateBasic(realm = "secure site", myUserPassAuthenticator) { userName =>
              path(Segment) {
                case "ping" => complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, s"<h3>pong $userName</h3>"))
                case "article" => entity(as[String]) {
                  entity =>
                    onComplete((articles ? PostArticle(entity)).mapTo[Int]) {
                      case Success(_) =>
                        complete(HttpResponse(entity = s"- Article data generated "))
                      case Failure(e) =>
                        logWarning(s"- Article was not generated correctly $e")
                        complete(HttpResponse(entity = s"- Article was not generated correctly $e"))
                    }
                }
              }
            }
          }
        )
      )
    )(
      rejectionHandler = GlobalHandlers.globalRejectionHandler,
      exceptionHandler = GlobalHandlers.globalExceptionHandler
    )
  }

  def myUserPassAuthenticator(credentials: Credentials): Option[String] =
    credentials match {
      case password@Credentials.Provided(userIdentifier) if password.verify("292611Yoru..") && userIdentifier == "gizzal" => Some(userIdentifier)
      case _ => None
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