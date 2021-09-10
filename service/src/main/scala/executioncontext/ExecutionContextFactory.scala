package executioncontext

import com.typesafe.config.Config
import scaldi.{Injectable, Injector}
import java.util.concurrent.{SynchronousQueue, ThreadPoolExecutor, TimeUnit}
import scala.concurrent.{ExecutionContext, ExecutionContextExecutor}

class ExecutionContextFactory(implicit injector: Injector) extends Injectable {
  private val executionContextConfig = inject[Config].getConfig("application.executionContext")
  private val maxPoolSize = executionContextConfig.getInt("maxThreadPoolSize")
  private val keepAliveTimeSeconds = executionContextConfig.getInt("keepAliveTimeSeconds")

  def create(threadName: String): ExecutionContextExecutor = {
    var threadCount = 0

    ExecutionContext
      .fromExecutor {
        new ThreadPoolExecutor(
          0,
          maxPoolSize,
          keepAliveTimeSeconds,
          TimeUnit.SECONDS,
          new SynchronousQueue[Runnable],
          (r: Runnable) => {
            threadCount += 1
            new Thread(r, s"$threadName-$threadCount")
          }
        )
      }
  }
}

