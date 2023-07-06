import { SupportedQuerys, ZoomLevel5DetailResponses } from '@/features/pages/tasks/zoom5Config'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'

import { ArchivesOtherZoomLevel5DetailType, StoryBySlugQuery } from 'src/generated/graphql'

import { Dimensions, ZoomStates } from '../../types/galaxy'
import { RecordCloudHighlight } from './components/RecordHighlight'
import { usePresenter } from './usePresenter'

export type RecordCloudProps = {
  dimensions: Dimensions
  zoomLevel5: ZoomLevel5Entities
  type: SupportedQuerys
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

const RecordClouds: React.FunctionComponent<RecordCloudProps> = props => {
  const {
    svgRef,
    dimensions: { height, width },
    type,
    zoomLevel5,
    animationState,
    zoomLevel,
  } = usePresenter(props)

  return (
    <Box overflow="visible" height={height} width={width}>
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
    if (ZoomStates.Zoom5ToRelationStill === zoomLevel) {
      return null
    }
    if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
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
          animationState={animationState}
        />
      )
    }
    if (zoomLevel5?.__typename === 'PoepleZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.name ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }
    if (zoomLevel5?.__typename === 'PublicationsBookZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.title ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }
    if (zoomLevel5?.__typename === 'PublicationsArticleZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.title ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }

    if (zoomLevel5?.__typename === 'PublicationsAudioVisualZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.title ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }

    if (zoomLevel5?.__typename === 'PublicationsSerialZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.title ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }

    if (zoomLevel5?.__typename === 'ArchivesFondsZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={type}
          title={zoomLevel5.recordTitle ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }

    if (zoomLevel5?.__typename === 'ArchivesOtherZoomLevel5DetailType') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
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
          animationState={animationState}
        />
      )
    }

    if (zoomLevel5?.__typename === 'StoryEntity') {
      return (
        <RecordCloudHighlight
          className="foreign-highlight"
          type={SupportedQuerys.stories}
          title={zoomLevel5.attributes?.title ?? undefined}
          queryType={zoomLevel5?.__typename}
          dimensions={SVG_DIMENSIONS}
          animationState={animationState}
        />
      )
    }
  }
}

export default RecordClouds
