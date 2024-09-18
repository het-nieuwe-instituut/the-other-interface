import './instrument'

import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { Config } from './config/config'
import { ErrorInterceptor } from './modules/util/error.interceptor'
import { ErrorReporterService } from './modules/util/errorReporter.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService<Config>>(ConfigService)

  if (configService.get('ENV') === 'production') {
    app.useGlobalInterceptors(new ErrorInterceptor(app.get(ErrorReporterService)))
  }

  const appPort = parseInt(configService.get('APP_PORT', '5000'), 10)
  await app.listen(appPort)

  const logger = new Logger('bootstrap')
  logger.log(`${configService.get('APP_NAME')} successfully started on port ${appPort}`)
}
bootstrap()
