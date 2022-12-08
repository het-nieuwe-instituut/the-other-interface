import { Box } from '@chakra-ui/react'

import { SupportedQuerys, ZoomLevel5DetailResponses } from '@/features/pages/tasks/zoom5Config'
import React, { useContext } from 'react'
import { ArchivesOtherZoomLevel5DetailType, StoryBySlugQuery } from 'src/generated/graphql'
import { RecordCloudHighlight } from './components/RecordHighlight'
import { usePresenter } from './usePresenter'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'
import { useRouter } from 'next/router'
import RecordContext from '@/features/pages/containers/RecordContainer/RecordContext'
import dynamic from 'next/dynamic'

type Props = {
    dimensions: {
        height: number
        width: number
    }
}

export type ZoomLevel5Entities =
    | ZoomLevel5DetailResponses['zoom5detail']
    | NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0]

export const SVG_DIMENSIONS = { width: 1280, height: 800 }

const DynamicRecordRelationsNoSsr = dynamic(() => import('./components/RecordRelations/RecordRelations'), {
    ssr: false,
})

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions }) => {
    const router = useRouter()
    const queryParams = router.query as unknown as RecordQueryParams

    const { width, height } = dimensions
    const { detail: zoomLevel5 } = useContext(RecordContext)
    const svgWidth = width
    const svgHeight = height
    const { svgRef } = usePresenter()

    return (
        <Box overflow="visible" height={svgHeight} width={svgWidth}>
            <svg
                ref={svgRef}
                width={width}
                height={height}
                viewBox={`0 0 ${SVG_DIMENSIONS.width} ${SVG_DIMENSIONS.height}`}
                style={{ overflow: 'visible' }}
            >
                {renderHighLight()}
                <DynamicRecordRelationsNoSsr />
            </svg>
        </Box>
    )

    function renderHighLight() {
        if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys

            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    // image={{
                    //     url: zoomLevel5.image ?? undefined,
                    //     width: 100,
                    //     height: 100,
                    //     alt: zoomLevel5.imageLabel ?? undefined,
                    // }}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PoepleZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.name ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PublicationsBookZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PublicationsArticleZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'PublicationsAudioVisualZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'PublicationsSerialZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'ArchivesFondsZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.recordTitle ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'ArchivesOtherZoomLevel5DetailType') {
            const record = queryParams.record
            const type = record.split('-')[1] as SupportedQuerys
            return (
                <RecordCloudHighlight
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                      image={{
                        url: (zoomLevel5 as ArchivesOtherZoomLevel5DetailType).pidWorkURIs?.[0] ?? undefined,
                        width: 100,
                        height: 100,
                        // TODO ask Lois about alt
                        alt: '',
                    }}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'StoryEntity') {
            return (
                <RecordCloudHighlight
                    type={SupportedQuerys.stories}
                    title={zoomLevel5.attributes?.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
    }
}

export default RecordClouds
