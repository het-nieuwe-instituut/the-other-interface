import { galaxyTypesToPositions } from '@/features/galaxy/galaxyConstants'
import { ZoomLevel1Query } from 'src/generated/graphql'
import { ObjectPerTypeWithName } from '../d3/simulation'

export function mappedObjectPerType(zoomLevel1Data?: ZoomLevel1Query) {
    const items = zoomLevel1Data?.zoomLevel1.filter(item => item.name !== 'Archiefbestanddelen') ?? []

    return items.map(item => {
        const config = galaxyTypesToPositions[item.id]
        const newItem: ObjectPerTypeWithName = {
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
}
