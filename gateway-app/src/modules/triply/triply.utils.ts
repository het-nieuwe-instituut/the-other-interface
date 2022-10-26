import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

export interface ZoomLevel3ReturnData {
    total: string | null
    count: string | null
    label: string | null
    iri: string
}

export class TriplyUtils {
    public static getExternalEntityNameFromUri(uri: string) {
        const type = TriplyUtils.findExternalEntityNameFromUri(uri)

        if (!type) {
            throw new Error(`external type for uri ${uri} not implemented`)
        }

        return type
    }

    public static findExternalEntityNameFromUri(uri: string) {
        if (uri.includes('rkd.nl')) {
            return EntityNames.Rkd
        }

        if (uri.includes('wikidata.org')) {
            return EntityNames.Wikidata
        }

        if (uri.includes('getty.edu')) {
            return EntityNames.Getty
        }
    }

    public static getEntityNameFromGraph(graph: string, possibleExternalUri?: string | null): EntityNames {
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
                if (possibleExternalUri) {
                    return TriplyUtils.getExternalEntityNameFromUri(possibleExternalUri)
                }

                return EntityNames.External
            default:
                throw new Error(`type for graph ${type} not implemented`)
        }
    }

    public static getEntityNameFromUri(uri: string): EntityNames {
        const externalType = this.findExternalEntityNameFromUri(uri)
        if (externalType) {
            return externalType
        }

        const s = uri.split('/')
        if (!s.length || s.length < 2) {
            throw new Error('invalid graph url')
        }

        const type = s[s.length - 2]
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
                throw new Error(`type for uri ${uri} not implemented`)
        }
    }

    public static getIdFromUri(uri: string) {
        const s = uri.split('/')
        if (!s.length) {
            throw new Error('invalid uri')
        }

        const id = s.pop()
        if (!id) {
            throw new Error('invalid uri')
        }

        return id
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

    // eslint-disable-next-line @typescript-eslint/ban-types
    public static combineObjectArray(results: Object[]) {
        const output: { [x: string]: string } = {}
        let nullFlag = true
        for (const result of results) {
            for (const filledPair of Object.entries(result).filter(e => !!e[1])) {
                nullFlag = false
                const [key, value] = filledPair
                output[key] = value
            }
        }

        return nullFlag ? null : output
    }

    public static parseLevel3OutputData(input: ZoomLevel3ReturnData[]) {
        return input.map(i => ({
            uri: i.iri,
            name: i.label || null,
            count: i.count ? parseInt(i.count, 10) : null,
            total: i.total ? parseInt(i.total, 10) : null,
        }))
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    public static getQueryParamsFromObject(obj: Object): Record<string, string> {
        const queryParams: Record<string, string> = {}

        for (const [filterName, filterValue] of Object.entries(obj)) {
            queryParams[`${filterName}`] = filterValue
        }

        return queryParams
    }
}
