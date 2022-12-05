import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { Zoom4Query } from 'src/generated/graphql'
import { CollectionCloudItem } from '../types'

export function zoom4DataToCollectionGalaxyData(zoom4?: Zoom4Query | null): CollectionCloudItem[] {
    return (
        zoom4?.zoomLevel4?.nodes?.map(node => ({
            record: node.record,
            title: node.title,
            firstImage: node.firstImage,
            imageLabel: node.imageLabel,
            marginLeft: randomShift(),
            marginBottom: randomShift(),
        })) ?? []
    )
}

function randomShift() {
    return Math.floor(randomNumberBetweenPoints(-20, 20))
}
