import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TripliService } from './tripli.service'

@Module({ imports: [HttpModule], providers: [TripliService], exports: [TripliService] })
export class TripliModule {}
