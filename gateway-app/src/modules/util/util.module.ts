import { Global, Module } from '@nestjs/common'
import { DateScalar } from './Date'

@Global()
@Module({
    providers: [DateScalar],
})
export class UtilModule {}
