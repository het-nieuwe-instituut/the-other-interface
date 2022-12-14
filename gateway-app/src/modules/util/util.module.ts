import { Global, Module } from '@nestjs/common'
import { DateScalar } from './Date'
import { RollbarService } from './rollbar.service'
import { SlackService } from './slack.service'
import { UtilController } from './util.controller'

@Global()
@Module({
    providers: [DateScalar, SlackService, RollbarService],
    exports: [SlackService, RollbarService],
    controllers: [UtilController],
})
export class UtilModule {}
