import { Simulation } from 'd3'
import { MutableRefObject } from 'react'
import { D3CollectionItem } from './useD3Simulation'

export function useD3Pagination(
    simulation: MutableRefObject<Simulation<D3CollectionItem, undefined> | null>,
    selector: string
) {
    function navigateNext() {
        // const foreignNodes = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<D3CollectionItem>>(data)
        simulation.current?.nodes()
    }

    function navigateBack() {
        simulation.current?.nodes()
    }

    return {
        navigateNext,
        navigateBack,
    }
}
