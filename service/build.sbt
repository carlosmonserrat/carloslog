lazy val root = Project(id = "carlos-log-service", base = file("."))
  .enablePlugins(JavaServerAppPackaging)
  .settings(
    organization := "eu.portavita",
    scalaVersion := "2.12.13",
    libraryDependencies ++= Dependencies.allDependencies
  )
  .settings(DockerImage.publishToRegistry)
  .settings(DependencyCheck.settings)

