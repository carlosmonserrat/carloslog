package routing.akkahttp

import akka.http.scaladsl.model.{ContentTypes, HttpEntity, HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives.complete
import akka.http.scaladsl.server._
import com.fasterxml.jackson.core.JsonParseException
import logging.Logging

object GlobalHandlers extends Logging {

  def globalRejectionHandlerJson: RejectionHandler = RejectionHandler
    .newBuilder
    .handleNotFound {
      Directives.extractUnmatchedPath {
        path => {
          complete(
            HttpResponse(
              status = StatusCodes.MethodNotAllowed.intValue,
              entity = HttpEntity(ContentTypes.`application/json`,
                s"""{
              "status":"error: The requested path '${path}' does not exist."
              }""")
            )
          )
        }
      }
    }
    .handle {
      case e: MissingQueryParamRejection => complete(
        HttpResponse(
          status = StatusCodes.BadRequest.intValue,
          entity = HttpEntity(ContentTypes.`application/json`,
            s"""{
              "status":"error: The query parameter in invalid, '${e.parameterName}' is missing."
              }""")
        )
      )
    }
    .handleAll[MethodRejection] { methodRejections =>
      val names = methodRejections.map(_.supported.name)
      complete(
        HttpResponse(
          status = StatusCodes.MethodNotAllowed.intValue,
          entity = HttpEntity(ContentTypes.`application/json`,
            s"""{
              "status":"error: ${StatusCodes.MethodNotAllowed.defaultMessage}"
              }""")
        )
      )
    }
    .result()

  def globalExceptionHandlerJson: ExceptionHandler = ExceptionHandler {
    case e: JsonParseException =>
      complete(
        HttpResponse(
          status = StatusCodes.BadRequest.intValue,
          entity = HttpEntity(ContentTypes.`application/json`,
            s"""{
              "status":"error: JsonParseException - ${StatusCodes.BadRequest.defaultMessage} ${e.getStackTrace.mkString} "
              }""")
        )
      )
    case e: Throwable =>
      complete(
        HttpResponse(
          status = StatusCodes.InternalServerError.intValue,
          entity = HttpEntity(ContentTypes.`application/json`,
            s"""{
              "status":"error:${e.getStackTrace.mkString}"
              }""")
        )
      )
  }

}
