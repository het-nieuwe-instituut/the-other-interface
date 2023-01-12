import { EntityNames } from 'src/generated/graphql'

export const isExternalURL = (url: string, origin: string) => {
    try {
        const urlOrigin = new URL(url).origin
        return urlOrigin !== `https://${origin}` && urlOrigin !== `http://${origin}`
    } catch {
        return false
    }
}

export function getPeoplePathForTriplyRecordId(id: string) {
    // TODO: replace with correct id after routing is fixed/updated
    return `/landingpage/people/nameType/persoon/${id}-people`
}

export function getTriplyRecordPathForTypeAndId(type: EntityNames, id: string) {
    const baseURL = 'https://collectiedata.hetnieuweinstituut.nl/id/'
    console.log(id, type)
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
        case EntityNames.External:
        default:
            return ''
    }
}
