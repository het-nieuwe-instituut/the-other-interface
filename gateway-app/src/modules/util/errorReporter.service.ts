import { Injectable } from '@nestjs/common'
import { captureException, captureMessage, WithSentry } from '@sentry/nestjs'

@Injectable()
export class ErrorReporterService {
  @WithSentry()
  public logError(error: Error) {
    captureException(error)
  }

  @WithSentry()
  public logInfo(msg: string) {
    captureMessage(msg)
  }
}
