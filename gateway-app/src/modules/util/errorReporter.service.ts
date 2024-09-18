import { Injectable } from '@nestjs/common'
import { captureException, captureMessage } from '@sentry/nestjs'

@Injectable()
export class ErrorReporterService {
  public logError(error: Error) {
    captureException(error)
  }

  public logInfo(msg: string) {
    captureMessage(msg)
  }
}
