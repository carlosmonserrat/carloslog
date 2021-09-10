import net.vonbuchholtz.sbt.dependencycheck.DependencyCheckPlugin.autoImport.{dependencyCheckAssemblyAnalyzerEnabled, dependencyCheckFormat, dependencyCheckSuppressionFiles}
import sbt.Keys.baseDirectory
import sbt._

object DependencyCheck {

  lazy val settings = Seq(
    dependencyCheckFormat := "ALL",
    dependencyCheckSuppressionFiles := (ThisBuild / dependencyCheckSuppressionFiles).value,
    dependencyCheckAssemblyAnalyzerEnabled := Some(false),
    ThisBuild / dependencyCheckSuppressionFiles := Seq(baseDirectory.value / "suppressions.xml")
  )
}

