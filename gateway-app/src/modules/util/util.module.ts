import { Global, Module } from '@nestjs/common'
import { DateScalar } from './Date'
import { SlackService } from './slack.service'

@Global()
@Module({
    providers: [DateScalar, SlackService],
    exports: [SlackService],
})
export class UtilModule {}
