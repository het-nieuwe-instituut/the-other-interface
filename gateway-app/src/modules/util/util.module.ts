import { Global, Module } from '@nestjs/common'
import { DateScalar } from './Date'
import { SlackService } from './slack.service'
import { UtilController } from './util.controller'

@Global()
@Module({
    providers: [DateScalar, SlackService],
    exports: [SlackService],
    controllers: [UtilController],
})
export class UtilModule {}
