import { Module } from '@nestjs/common'
import { TripliService } from './tripli.service'

@Module({ providers: [TripliService], exports: [TripliService] })
export class TripliModule {}
