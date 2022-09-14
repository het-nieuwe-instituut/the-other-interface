import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TripliResolver } from './tripli.resolver'
import { TripliService } from './tripli.service'

@Module({ imports: [HttpModule], providers: [TripliService, TripliResolver], exports: [TripliService] })
export class TripliModule {}
