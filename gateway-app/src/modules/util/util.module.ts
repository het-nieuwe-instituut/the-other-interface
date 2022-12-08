import { Global, Module } from '@nestjs/common'
import { DateScalar } from './Date'
import { RollbarService } from './rollbar.service'
import { SlackService } from './slack.service'

@Global()
@Module({
    providers: [DateScalar, SlackService, RollbarService],
    exports: [SlackService, RollbarService],
})
export class UtilModule {}
