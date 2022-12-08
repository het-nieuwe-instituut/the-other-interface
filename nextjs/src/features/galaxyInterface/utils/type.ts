export function getCorrectType(type: string) {
    const publications = ['books', 'audiovisual', 'article', 'serial']
    const archives = ['fonds', 'other']

    const isInPublicationList = !!publications.find(v => v === type)
    const isInArchivesList = !!archives.find(v => v === type)

    if (isInPublicationList) {
        return 'publications'
    }

    if (isInArchivesList) {
        return 'archives'
    }

    return type
}
