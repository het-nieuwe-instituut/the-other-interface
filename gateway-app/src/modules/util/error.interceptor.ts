import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { get } from 'lodash'
import { catchError, Observable } from 'rxjs'
import { CustomErrorType } from './customError'
import { ErrorReporterService } from './errorReporter.service'

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  private readonly typesToIgnore = [CustomErrorType.internal, CustomErrorType.external]

  public constructor(private readonly errorReporterService: ErrorReporterService) {}

  public intercept(_context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      catchError(e => {
        if (this.shouldReport(e)) {
          this.errorReporterService.logError(e)
        }

        throw e
      })
    )
  }

  private shouldReport(e: unknown) {
    const msg = get(e, 'message') as string | undefined
    if (!msg) {
      return true
    }

    return !this.typesToIgnore.some(t => msg.startsWith(`[${t}]: `))
  }
}
