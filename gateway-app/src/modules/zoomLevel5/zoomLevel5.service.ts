import { Injectable } from '@nestjs/common'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel5Args } from './zoomLevel5.type'

@Injectable()
export class ZoomLevel5Service {
    public async getLevel5Data({ entityName, id }: ZoomLevel5Args) {
        switch (entityName) {
            case EntityNames.Archives:
                // TODO
                return
            case EntityNames.Objects:
                // TODO
                return
            case EntityNames.People:
                // TODO
                return
            case EntityNames.Publications:
                // TODO
                return
            case EntityNames.Stories:
                // TODO
                return
            default:
                throw new Error('type not implemented')
        }
    }
}
