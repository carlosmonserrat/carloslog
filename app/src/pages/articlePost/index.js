import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";
import {useLocation} from "react-router-dom";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    blogPostDate,
    blogPostParagraph,
    blogPostTitle,
    blogPost,
    blogImage
} from "./style.module.css";
import ImageModal from "../../components/core/image_modal";
import reactStringReplace from "react-string-replace";

const ArticlePost = () => {
    let text = `
{description}
Free Web tutorials
{description}
{keywords}
HTML, CSS, JavaScript
{keywords}
{author}
Carlos Monserrat
{author}
///
This is a cool post made by me jojo!
///
    
{p}
It was a while i wanted something like this 
{p}
  
  {p}
  Here some crazy code
  {p}   
{code}
import akka.actor.{ ActorRef, ActorSystem }
import akka.http.scaladsl.coding.Coders
import akka.http.scaladsl.marshalling.ToResponseMarshaller
import akka.http.scaladsl.model.StatusCodes.MovedPermanently
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.unmarshalling.FromRequestUnmarshaller
import akka.pattern.ask
import akka.util.Timeout

// types used by the API routes
type Money = Double // only for demo purposes, don't try this at home!
type TransactionResult = String
case class User(name: String)
case class Order(email: String, amount: Money)
case class Update(order: Order)
case class OrderItem(i: Int, os: Option[String], s: String)

// marshalling would usually be derived automatically using libraries
implicit val orderUM: FromRequestUnmarshaller[Order] = ???
implicit val orderM: ToResponseMarshaller[Order] = ???
implicit val orderSeqM: ToResponseMarshaller[Seq[Order]] = ???
implicit val timeout: Timeout = ??? // for actor asks
implicit val ec: ExecutionContext = ???
implicit val sys: ActorSystem = ???

// backend entry points
def myAuthenticator: Authenticator[User] = ???
def retrieveOrdersFromDB: Future[Seq[Order]] = ???
def myDbActor: ActorRef = ???
def processOrderRequest(id: Int, complete: Order => Unit): Unit = ???

lazy val binding = Http().newServerAt("localhost", 8080).bind(topLevelRoute)
// ...

lazy val topLevelRoute: Route =
  // provide top-level path structure here but delegate functionality to subroutes for readability
  concat(
    path("orders")(ordersRoute),
    // extract URI path element as Int
    pathPrefix("order" / IntNumber)(orderRoute),
    pathPrefix("documentation")(documentationRoute),
    path("oldApi" / Remaining) { pathRest =>
      redirect("http://oldapi.example.com/" + pathRest, MovedPermanently)
    }
  )

// For bigger routes, these sub-routes can be moved to separate files
lazy val ordersRoute: Route =
  authenticateBasic(realm = "admin area", myAuthenticator) { user =>
    concat(
      get {
        encodeResponseWith(Coders.Deflate) {
          complete {
            // unpack future and marshal custom object with in-scope marshaller
            retrieveOrdersFromDB
          }
        }
      },
      post {
        // decompress gzipped or deflated requests if required
        decodeRequest {
          // unmarshal with in-scope unmarshaller
          entity(as[Order]) { order =>
            complete {
              // ... write order to DB
              "Order received"
            }
          }
        }
      }
    )
  }

def orderRoute(orderId: Int): Route =
  concat(
    pathEnd {
      concat(
        put {
          // form extraction from multipart or www-url-encoded forms
          formFields("email", "total".as[Money]).as(Order) { order =>
            complete {
              // complete with serialized Future result
              (myDbActor ? Update(order)).mapTo[TransactionResult]
            }
          }
        },
        get {
          // debugging helper
          logRequest("GET-ORDER") {
            // use in-scope marshaller to create completer function
            completeWith(instanceOf[Order]) { completer =>
              // custom
              processOrderRequest(orderId, completer)
            }
          }
        })
    },
    path("items") {
      get {
        // parameters to case class extraction
        parameters("size".as[Int], "color".optional, "dangerous".withDefault("no"))
          .as(OrderItem) { orderItem =>
            // ... route using case class instance created from
            // required and optional query parameters
          }
      }
    })

lazy val documentationRoute: Route =
  // optionally compresses the response with Gzip or Deflate
  // if the client accepts compressed responses
  encodeResponse {
    // serve up static content from a JAR resource
    getFromResourceDirectory("docs")
  }
{code}

{p}
Aliquip occaecat in est do aute adipisicing voluptate. 
Reprehenderit nulla occaecat sunt duis cillum cillum. 
Officia labore cupidatat do velit voluptate quis culpa fugiat commodo enim do tempor et sunt.  
Eu eiusmod elit exercitation sint cupidatat adipisicing adipisicing nostrud non officia cillum laborum. Amet et occaecat nostrud magna qui eu labore ad 
occaecat sint commodo ipsum culpa. Irure dolor consequat quis consectetur nisi labore culpa sit aute ex elit dolore reprehenderit laboris. Cupidatat tempor id ut ea laborum. 
Occaecat in dolore aliqua laboris consequat elit nostrud irure id id. 
Officia tempor esse culpa laborum est aliqua enim elit minim ut dolore.
 Veniam do veniam dolore enim. 
{p}  

{p}
 Pariatur mollit reprehenderit nulla deserunt laborum tempor ex laboris irure laborum. 
 Sint est dolor deserunt minim irure. 
 Proident deserunt elit voluptate duis ut anim adipisicing nulla fugiat est non reprehenderit irure cupidatat. 
 Exercitation cillum consequat amet quis mollit nulla irure dolore ullamco Lorem sint. 
 Voluptate nisi consequat labore sint proident. Ex dolore laborum consequat non et. 
 Pariatur amet exercitation aliquip laborum fugiat ex dolor consequat reprehenderit ad sunt reprehenderit sint. 
 Nisi non Lorem dolore ad ea aute ullamco fugiat magna.
{p}

{code}
/*
 * Copyright (C) 2020-2021 Lightbend Inc. <https://www.lightbend.com>
 */

package docs.http.scaladsl

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.Http.ServerBinding
import akka.http.scaladsl.server.Directives._

import scala.concurrent.Future

object HttpServerBindingFailure {
  def main(args: Array[String]): Unit = {
    implicit val system = ActorSystem()
    // needed for the future foreach in the end
    implicit val executionContext = system.dispatcher

    val handler = get {
      complete("Hello world!")
    }

    // let's say the OS won't allow us to bind to 80.
    val (host, port) = ("localhost", 80)
    val bindingFuture: Future[ServerBinding] =
      Http().newServerAt(host, port).bindFlow(handler)

    bindingFuture.failed.foreach { ex =>
      system.log.error(ex, "Failed to bind to {}:{}!", host, port)
    }
  }
}
{code}
{p}
 Pariatur mollit reprehenderit nulla deserunt laborum tempor ex laboris irure laborum. 
 Sint est dolor deserunt minim irure. 
 Proident deserunt elit voluptate duis ut anim adipisicing nulla fugiat est non reprehenderit irure cupidatat. 
 Exercitation cillum consequat amet quis mollit nulla irure dolore ullamco Lorem sint. 
 Voluptate nisi consequat labore sint proident. Ex dolore laborum consequat non et. 
 Pariatur amet exercitation aliquip laborum fugiat ex dolor consequat reprehenderit ad sunt reprehenderit sint. 
 Nisi non Lorem dolore ad ea aute ullamco fugiat magna.
{p}
`
    const descriptionPattern = /{description}(.*?){description}/gs
    const keywordsPattern = /{keywords}(.*?){keywords}/gs
    const authorPattern = /{author}(.*?){author}/gs
    const titlePattern = /\/\/\/(.*?)\/\/\//gs
    const paragraphPattern = /{p}(.*?){p}/gs
    const codePattern = /{code}(.*?){code}/gs

    const textSyntaxRules = new Map()

    textSyntaxRules.set(
        descriptionPattern,
        (match) => (
            <meta name="description" content={match}/>
        )
    )

    textSyntaxRules.set(
        keywordsPattern,
        (match) => (
            <meta name="keywords" content={match}/>
        )
    )

    textSyntaxRules.set(
        authorPattern,
        (match) => (
            <meta name="author" content={match}/>
        )
    )

    textSyntaxRules.set(
        paragraphPattern,
        (matchParagraph, i) => (
            <p className={blogPostDate}>
                {matchParagraph}
            </p>
        )
    )

    textSyntaxRules.set(
        titlePattern,
        (match) => (
            <h1 className={blogPostTitle}>
                {match}
            </h1>
        )
    )

    textSyntaxRules.set(
        codePattern,
        (matchCode) => (
            <SyntaxHighlighter language="scala" style={materialDark}>
                {matchCode}
            </SyntaxHighlighter>
        )
    )

    const replaceMultipleText = (rules: Map, text: String) => {
        let result = text;
        rules.forEach((value, key) => {
                result = reactStringReplace(result, key, value)
            }
        )
        return result
    }

    const transformedText = replaceMultipleText(textSyntaxRules, text)

    const query = useQuery();
    const id = query.get("id")
    const apiUrl = process.env.REACT_APP_API_URL
    const articlesUri = apiUrl + `/article?id=${id}`
    const dispatch = useDispatch();

    const articleBody = useSelector(state => state.articleBody);

    useEffect(() => {
        dispatch(requestArticle(articlesUri))
    }, [dispatch, articlesUri])

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Layout classname={blogPost}>
            {transformedText}
        </Layout>
    )
}

export default ArticlePost