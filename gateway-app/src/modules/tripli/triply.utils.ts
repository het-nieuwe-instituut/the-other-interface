import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

export class TripliUtils {
    public static getEntityNameFromGraph(graph: string): EntityNames {
        const s = graph.split('/')
        if (!s.length) {
            throw new Error('invalid graph url')
        }

        const type = s.pop()
        switch (type) {
            case 'people':
                return EntityNames.People
            case 'archives':
                return EntityNames.Archives
            case 'books':
                return EntityNames.Publications
            case 'objects':
                return EntityNames.Objects
            case 'seeAlso':
                return EntityNames.External
            default:
                throw new Error('type not implemented')
        }
    }

    public static getIdFromUri(uri: string) {
        const s = uri.split('/')
        if (!s.length) {
            throw new Error('invalid uri')
        }

        return s.pop()
    }
}
