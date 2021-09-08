import com.typesafe.sbt.packager.Keys
import com.typesafe.sbt.packager.docker.DockerPlugin.autoImport._
import com.typesafe.sbt.packager.linux.LinuxPlugin.autoImport.defaultLinuxInstallLocation
import sbt.Keys.{isSnapshot, name, version}

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object DockerImage {

  lazy val publishToRegistry = Seq(
    dockerBaseImage := "openjdk:8-jre-alpine",
    Docker / defaultLinuxInstallLocation := "/opt/" + name.value,
    dockerUpdateLatest := true,
    Docker / Keys.daemonUserUid := None,
    Docker / Keys.daemonUser := "daemon",
    Docker / version := {
      if (isSnapshot.value) s"${version.value}-$timestamp" else version.value
    },
    dockerLabels := Map(
      "maintainer" -> "Carlos Rojas",
      "description" -> "Carlos Log Service"
    ),
    dockerBuildOptions += "--no-cache"
  )

  private def timestamp: String =
    DateTimeFormatter.ofPattern("yyyyMMdd.HHmmss").format(LocalDateTime.now())
}
