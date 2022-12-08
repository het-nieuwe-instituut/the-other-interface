import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { Dimensions, ZoomStates } from '../types/galaxy'

interface Options {
    dispatch: Dispatch<AnyAction>
    dimensions: Dimensions
    d3y?: number
    d3x?: number
    toZoomState: ZoomStates
    params: { [key: string]: string }
}
export function zoomByD3Data(options: Options) {
    const { dimensions, d3x, d3y, dispatch, params, toZoomState } = options
    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0

    const x = (d3x ?? 0) - width / 2
    const y = (d3y ?? 0) - height / 2

    dispatch(
        galaxyInterfaceActions.setActiveZoom({
            activeZoom: toZoomState,
            activeZoomData: {
                to: {
                    translateX: -x,
                    translateY: -y,
                },
            },
            params,
        })
    )
}
