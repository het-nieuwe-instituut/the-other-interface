export const isExternalURL = (url: string) => {
    try {
        return new URL(url).origin !== location.origin
    } catch {
        return false
    }
}
