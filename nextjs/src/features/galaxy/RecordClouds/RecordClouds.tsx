import { extractType } from '@/features/galaxyInterface/utils/extractors'
import RecordContext from '@/features/pages/containers/RecordContainer/RecordContext'
import { SupportedQuerys, ZoomLevel5DetailResponses } from '@/features/pages/tasks/zoom5Config'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { createRef, useContext } from 'react'

import { ArchivesOtherZoomLevel5DetailType, StoryBySlugQuery } from 'src/generated/graphql'

import { RecordCloudHighlight } from './components/RecordHighlight'

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

const DynamicRecordContainerRelationsNoSsr = dynamic(
  () => import('./containers/RecordRelationsContainer'),
  {
    ssr: false,
  }
)

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions }) => {
  const router = useRouter()

  const { width, height } = dimensions
  const { detail: zoomLevel5 } = useContext(RecordContext)
  const svgWidth = width
  const svgHeight = height
  const svgRef = createRef<SVGSVGElement>()

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
        <DynamicRecordContainerRelationsNoSsr parentRef={svgRef} />
      </svg>
    </Box>
  )

  function renderHighLight() {
    if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
      const type = extractType(router?.asPath)

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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
      const type = extractType(router?.asPath)
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
