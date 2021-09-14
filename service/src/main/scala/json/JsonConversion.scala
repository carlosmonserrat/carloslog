package json

import logging.Logging
import org.json4s.JsonAST.JValue
import org.json4s.jackson.JsonMethods.parse
import org.json4s.jackson.Serialization
import org.json4s.{DefaultFormats, Extraction, Formats}

object JsonConversion extends Logging {

  implicit val formats: Formats = DefaultFormats

  def deserializeJson[T](json: String)(implicit mf: Manifest[T]): T = {
    Extraction.extract(parse(json))
  }

  def deserializeListJson[T](json: String)(implicit mf: Manifest[List[T]]): List[T] = {
    Extraction.extract(parse(json))
  }

  def extractJValue[T](json: JValue)(implicit mf: Manifest[T]): T = {
    Extraction.extract(json)
  }

  def writeJson[T <: AnyRef : Manifest](modeledObject: T): String = {
    Serialization.write(modeledObject)
  }

  def writeJsonList[T <: AnyRef : Manifest](resources: List[T]): String = {
    val resourcesJson = resources.map { resource: T => writeJson[T](resource) }
    s"""[${resourcesJson.mkString(",")}]"""
  }

}
