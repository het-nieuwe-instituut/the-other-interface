import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'
import { TriplyService } from './triply.service'

@Global()
@Module({
  imports: [HttpModule],
  providers: [TriplyService],
  exports: [TriplyService],
})
export class TriplyModule {}
