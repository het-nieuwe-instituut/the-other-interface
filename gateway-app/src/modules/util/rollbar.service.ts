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

  public async logError(arg: RollbarType.LogArgument) {
    try {
      this.rollbar.error(arg)
    } catch (err) {
      console.log('Logging to rollbar failed', arg)
      console.log('Error', JSON.stringify(err))
    }
  }

  public async logInfo(arg: RollbarType.LogArgument) {
    try {
      this.rollbar.info(arg)
    } catch (err) {
      console.log('Logging to rollbar failed', arg)
      console.log('Error', JSON.stringify(err))
    }
  }
}
