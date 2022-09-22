import { Resolver } from '@nestjs/graphql'
import { ZoomLevel5Type } from './zoomLevel5.type'

@Resolver(() => ZoomLevel5Type)
export class ZoomLevel5Resolver {}
