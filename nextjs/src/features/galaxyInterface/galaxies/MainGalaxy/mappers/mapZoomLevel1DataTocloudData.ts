import { galaxyTypesToPositions } from '@/features/galaxy/galaxyConstants'
import { EntityNames, ZoomLevel1Query } from 'src/generated/graphql'
import { CloudItem } from '../types'

export function mapZoomLevel1DataTocloudData(zoomLevel1Data?: ZoomLevel1Query): CloudItem[] {
    const items = zoomLevel1Data?.zoomLevel1.filter(item => item.name !== 'Archiefbestanddelen') ?? []

    return items
        .map(item => {
            const config = galaxyTypesToPositions[item.id]
            const newItem = {
                ...item,
                id: item.id,
                yFromCenter: config.yFromCenter,
                xFromCenter: config.xFromCenter,
                fixedNumberOfInstances: config.fixedNumberOfInstances ?? item.count,
                numberOfInstances: item.count,
                class: item.id?.toLowerCase(),
            }

            return newItem
        })
        .filter(item => item.id !== EntityNames.Stories)
}

export function mapZoom1ToStoriesMeta(zoomLevel1Data?: ZoomLevel1Query) {
    const items = zoomLevel1Data?.zoomLevel1
    const item = items?.find(item => item.id === EntityNames.Stories)
    return { numberOfInstances: item?.count ?? 0 }
}
