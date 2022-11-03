export const isExternalURL = (url: string, origin: string) => {
    try {
        const urlOrigin = new URL(url).origin
        return urlOrigin !== `https://${origin}` && urlOrigin !== `http://${origin}`
    } catch {
        return false
    }
}
