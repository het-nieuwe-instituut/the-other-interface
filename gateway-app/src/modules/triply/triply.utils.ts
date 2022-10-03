import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
export interface ZoomLevel3ReturnData {
    count: string
    label: string
    iri: string
}

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
        const totalRow = input.find(r => r.label === '@total')
        const total = totalRow ? totalRow.count : null

        const output = []

        for (const d of input) {
            if (d.label === '@total') {
                continue
            }

            output.push({
                uri: d.iri,
                name: d.label || null,
                count: d.count ? parseInt(d.count, 10) : null,
                total,
            })
        }

        return output
    }
}
