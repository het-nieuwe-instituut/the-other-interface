import { useFitDataToDimensions } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useRandomBackgroundData } from '@/features/galaxy/hooks/useRandomColorData'
import { State } from '@/features/shared/configs/store'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useTheme } from '@chakra-ui/react'
import { SimulationNodeDatum } from 'd3'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { includesZoomStatesZoom3Galaxy } from '../../GalaxyInterface/GalaxyInterface'
import { useD3Pagination } from '../../hooks/useD3Pagination'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { galaxyInterfaceActions } from '../../stores/galaxyInterface.store'
import { ZoomStates } from '../../types/galaxy'
import { PaginatedFilterCloudsProps } from './PaginatedFilterClouds'
import { D3PaginatedCloudItem } from './d3/simulation'
import { useD3Simulation } from './hooks/useD3Simulation'
import { PaginatedCloudItem } from './types'

interface Props extends PaginatedFilterCloudsProps {
  selector: string
}

function useSetActiveZoom(options: Pick<Props, 'dimensions' | 'filter' | 'type'>) {
  const dispatch = useDispatch()
  const handleSetActiveZoom = useCallback(
    (
      event: Partial<{ clientX?: number; clientY: number }>,
      item: PaginatedCloudItem & SimulationNodeDatum
    ) => {
      const { dimensions, type, filter } = options
      const width = dimensions.width ?? 0
      const height = dimensions.height ?? 0

      const x = (event.clientX ?? 0) - width / 2
      const y = (event.clientY ?? 0) - height / 2

      dispatch(
        galaxyInterfaceActions.setActiveZoom({
          activeZoom: ZoomStates.Zoom3ToZoom4,
          activeZoomData: {
            to: {
              translateX: -x,
              translateY: -y,
            },
          },
          params: {
            slug: type,
            filter: filter,
            collection: item.name,
          },
        })
      )
    },
    [dispatch, options]
  )

  return handleSetActiveZoom
}

export function usePresenter(props: Props) {
  const { total, selector, dimensions, paginatedCloudItems, type, filter } = props

  const theme = useTheme()
  const params = useSelector((state: State) => state.galaxyInterface.params)
  const dataCopy = useD3DataCopy(paginatedCloudItems)
  const dataDimensions = useFitDataToDimensions(dimensions, dataCopy, getId, d => d.count ?? 0)
  const getColor = useCallback(() => {
    return theme.colors.levels.z2.colors[`${type}Filters`][filter as string]
  }, [filter, type, theme.colors.levels.z2.colors])
  const backgrounds = useRandomBackgroundData(dataCopy, getId, getColor())
  const { svgRef } = useD3Simulation(dimensions, dataCopy, selector, dataDimensions)
  const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
  const pagination = useD3Pagination({
    pageSize: 28,
    page: props.page,
    total: total ?? 0,
    states: {
      zoomBackState: ZoomStates.Zoom3ToInitial,
      zoomInState: ZoomStates.Zoom3Initial,
    },
    params,
  })
  const handleSetActiveZoom = useSetActiveZoom(props)

  return {
    svgRef,
    dataDimensions,
    ...zoomEvents,
    ...pagination,
    ...props,
    paginatedCloudItems: dataCopy,
    backgrounds,
    events: {
      handleClick: handleSetActiveZoom,
    },
    conditionals: {
      shouldDisplayText: includesZoomStatesZoom3Galaxy.includes(zoomEvents.zoomLevel as ZoomStates),
    },
  }
}

export function getId(d: D3PaginatedCloudItem) {
  return d.uri ?? d.name ?? ''
}
