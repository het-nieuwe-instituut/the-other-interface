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
