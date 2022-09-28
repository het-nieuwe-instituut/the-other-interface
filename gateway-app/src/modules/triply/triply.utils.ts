import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

export class TriplyUtils {
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
            case 'media':
                return EntityNames.Media
            case 'seeAlso':
                return EntityNames.External
            default:
                throw new Error(`type for graph ${type} not implemented`)
        }
    }

    public static getIdFromUri(uri: string) {
        const s = uri.split('/')
        if (!s.length) {
            throw new Error('invalid uri')
        }

        return s.pop()
    }

    public static getUriForTypeAndId(type: EntityNames, id: string) {
        const baseURL = 'https://collectiedata.hetnieuweinstituut.nl/id'

        switch (type) {
            case EntityNames.People:
                return `${baseURL}/people/${id}`
            case EntityNames.Archives:
                return `${baseURL}/archives/${id}`
            case EntityNames.Publications:
                return `${baseURL}/books/${id}`
            case EntityNames.Objects:
                return `${baseURL}/objects/${id}`
            case EntityNames.Media:
                return `${baseURL}/media/${id}`
            case EntityNames.Stories:
                throw new Error('not a triply type')
            case EntityNames.External:
            default:
                throw new Error(`uri for type ${type} not implemented`)
        }
    }
}
