import { CacheModule } from '@nestjs/cache-manager'
import { Global, Module } from '@nestjs/common'
import { CacheService } from './cache.service'
import { DateScalar } from './Date'
import { ErrorReporterService } from './errorReporter.service'
import { SlackService } from './slack.service'
import { UtilController } from './util.controller'

@Global()
@Module({
  providers: [DateScalar, SlackService, ErrorReporterService, CacheService],
  exports: [SlackService, ErrorReporterService, CacheService],
  controllers: [UtilController],
  imports: [
    CacheModule.register({
      max: 100,
      ttl: 30 * 60 * 100, // 30 minutes
    }),
  ],
})
export class UtilModule {}
