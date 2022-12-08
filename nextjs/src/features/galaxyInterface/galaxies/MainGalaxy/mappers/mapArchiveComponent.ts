import { ZoomLevel1Query } from 'src/generated/graphql'

export function mapArchiveComponent(zoomLevel1Data?: ZoomLevel1Query) {
    return zoomLevel1Data?.zoomLevel1.find(item => item.name === 'Archiefbestanddelen')
}
