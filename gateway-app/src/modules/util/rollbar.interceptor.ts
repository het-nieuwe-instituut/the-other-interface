import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { catchError, Observable } from 'rxjs'
import { CustomErrorType } from './customError'
import { RollbarService } from './rollbar.service'

@Injectable()
export class RollbarInterceptor implements NestInterceptor {
    private readonly typesToIgnore = [CustomErrorType.domain, CustomErrorType.validation]

    public constructor(private readonly rollbarService: RollbarService) {}

    public intercept(_context: ExecutionContext, next: CallHandler): Observable<unknown> {
        return next.handle().pipe(
            catchError(e => {
                if (this.shouldReport(e)) {
                    this.rollbarService.logError(e)
                }

                throw e
            })
        )
    }

    private shouldReport(e: unknown) {
        if (!e || typeof e !== 'object' || !('message' in e) || typeof e.message !== 'string') {
            return true
        }

        for (const typeToIgnore of this.typesToIgnore) {
            if (e.message.startsWith(`[${typeToIgnore}]: `)) {
                return false
            }
        }

        return true
    }
}
