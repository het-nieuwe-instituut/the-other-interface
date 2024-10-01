import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
  // eslint-disable-next-line prettier/prettier
  public constructor(private readonly prefix: string, private readonly threshold: number) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const now = Date.now()

    return next.handle().pipe(tap(() => this.reportIfSlow(context, now)))
  }

  private reportIfSlow(context: ExecutionContext, start: number) {
    const timeTaken = Date.now() - start

    if (timeTaken < this.threshold) {
      return
    }

    const fieldName = context.getArgByIndex(3)?.fieldName
    const filters = context.getArgByIndex(1) || {}

    console.warn(`${this.prefix} query took too long (${timeTaken} ms)`, {
      fieldName,
      filters,
    })
  }
}
