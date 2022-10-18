import {
    useZoomLevel5ArchivesFondsQuery,
    useZoomLevel5ArchivesOtherQuery,
    useZoomLevel5ObjectQuery,
    useZoomLevel5PersonQuery,
    useZoomLevel5PublicationsArticleQuery,
    useZoomLevel5PublicationsAudiovisualQuery,
    useZoomLevel5PublicationsBookQuery,
    useZoomLevel5PublicationsSerialQuery,
} from 'src/generated/graphql'

const config = {
    ['archivesOther']: {
        useHook: useZoomLevel5ArchivesOtherQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5ArchivesOtherQuery>['data']) => data?.zoomLevel5ArchivesOther,
    },
    ['archivesFonds']: {
        useHook: useZoomLevel5ArchivesFondsQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5ArchivesFondsQuery>['data']) => data?.zoomLevel5ArchivesFonds,
    },
    ['publicationsSerial']: {
        useHook: useZoomLevel5PublicationsSerialQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsSerialQuery>['data']) =>
            data?.zoomLevel5PublicationsSerial,
    },
    ['publicationsArticle']: {
        useHook: useZoomLevel5PublicationsArticleQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsArticleQuery>['data']) =>
            data?.zoomLevel5PublicationsArticle,
    },
    ['publicationsAudiovisual']: {
        useHook: useZoomLevel5PublicationsAudiovisualQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsAudiovisualQuery>['data']) =>
            data?.zoomLevel5PublicationsAudiovisual,
    },
    ['publicationsBook']: {
        useHook: useZoomLevel5PublicationsBookQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsBookQuery>['data']) =>
            data?.zoomLevel5PublicationsBook,
    },
    ['object']: {
        useHook: useZoomLevel5ObjectQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5ObjectQuery>['data']) => data?.zoomLevel5Object,
    },
    ['person']: {
        useHook: useZoomLevel5PersonQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PersonQuery>['data']) => data?.zoomLevel5Person,
    },
}

function getConfig<T extends keyof typeof config>(type: T) {
    return config[type] as typeof config[T]
}

export const dataAccessor = {
    ['archivesOther']: 'zoomLevel5ArchivesOther' as const,
    ['archivesFonds']: 'zoomLevel5ArchivesFonds' as const,
    ['publicationsSerial']: 'zoomLevel5PublicationsSerial' as const,
    ['publicationsArticle']: 'zoomLevel5PublicationsSerial' as const,
    ['publicationsAudiovisual']: 'zoomLevel5PublicationsSerial' as const,
    ['publicationsBook']: 'zoomLevel5PublicationsSerial' as const,
    ['object']: 'zoomLevel5Object' as const,
    ['person']: 'zoomLevel5Person' as const,
}

export type ZoomLevel5DetailResponses = ReturnType<typeof useZoomLevel5DetailQuery>['data']

export function useZoomLevel5DetailQuery<T extends keyof typeof config>(type: T) {
    const configByType = getConfig<T>(type)
    const query = configByType.useHook()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {
        ...query,
        data: configByType.accessor(query.data),
    }
}
