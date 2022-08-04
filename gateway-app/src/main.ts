import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Config } from './config/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get<ConfigService<Config>>(ConfigService)

    const appPort = parseInt(configService.get('APP_PORT', '5000'), 10)
    await app.listen(appPort)

    const logger = new Logger('bootstrap')
    logger.log(`${configService.get('APP_NAME')} successfully started on port ${appPort}`)
}
bootstrap()
