import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Config } from '../../config/config'
import RollbarType from 'rollbar'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Rollbar: typeof RollbarType = require('rollbar')

@Injectable()
export class RollbarService {
    private rollbar: RollbarType

    public constructor(configService: ConfigService<Config>) {
        this.rollbar = new Rollbar({
            accessToken: configService.getOrThrow('ROLLBAR_ACCESS_TOKEN'),
            captureUncaught: true,
            captureUnhandledRejections: true,
        })
    }

    public async log(arg: RollbarType.LogArgument) {
        try {
            this.rollbar.log(arg)
        } catch (err) {
            console.log('Logging to rollbar failed', arg)
            console.log('Error', JSON.stringify(err))
        }
    }
}
