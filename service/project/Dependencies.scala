import sbt._

object Dependencies {
  lazy val allDependencies: Seq[ModuleID] =
    akkaDependencies ++
      testDependencies ++
      logbackDependencies ++
      json4sDependencies ++
      dbDependencies ++
      slickDependencies ++
      routeDependencies

  private lazy val akkaHttpVersion = "10.2.6"
  private lazy val akkaVersion = "2.6.16"
  private lazy val scaldiVersion = "0.5.8"
  private lazy val postgresVersion: String = "42.2.13"
  private lazy val slickVersion: String = "3.3.0"
  private lazy val scalamockVersion: String = "4.1.0"
  private lazy val scalatestVersion: String = "3.2.9"
  private lazy val scalamockitoVersion = "1.15.0"
  private lazy val logbackVersion: String = "1.2.3"
  private lazy val json4sVersion = "3.6.7"
  private lazy val akkaHttpCorsVersion = "0.4.1"

  val akkaDependencies = Seq(
    "com.typesafe.akka" %% "akka-actor-typed" % akkaVersion,
    "com.typesafe.akka" %% "akka-stream" % akkaVersion,
    "com.typesafe.akka" %% "akka-http" % akkaHttpVersion,
    "org.scaldi" %% "scaldi-akka" % scaldiVersion,
    "com.typesafe.akka" %% "akka-http-spray-json" % akkaHttpVersion
  )

  val json4sDependencies: Seq[ModuleID] = Seq(
    "org.json4s" %% "json4s-jackson" % json4sVersion,
    "org.json4s" %% "json4s-ext" % json4sVersion,
    "org.json4s" %% "json4s-native" % json4sVersion
  )

  val testDependencies: Seq[ModuleID] = Seq(
    "org.scalamock" %% "scalamock" % scalamockVersion % "test",
    "org.scalatest" %% "scalatest" % scalatestVersion % "test",
    "org.mockito" %% "mockito-scala" % scalamockitoVersion
  )

  val routeDependencies = Seq(
    "ch.megard" %% "akka-http-cors" % akkaHttpCorsVersion
  )

  val logbackDependencies = Seq(
    "ch.qos.logback" % "logback-core" % logbackVersion,
    "ch.qos.logback" % "logback-classic" % logbackVersion
  )

  val dbDependencies: Seq[ModuleID] = Seq(
    "org.postgresql" % "postgresql" % postgresVersion
  )

  val slickDependencies: Seq[ModuleID] = Seq(
    "com.typesafe.slick" %% "slick" % slickVersion,
    "com.typesafe.slick" %% "slick-hikaricp" % slickVersion
  )

}

