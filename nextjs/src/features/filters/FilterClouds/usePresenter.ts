import { useD3Simulation } from './hooks/useD3Simulation'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'

export interface FilterType {
    filter: PossibleFilters
    numberOfInstances: number
}

export enum PossibleFilters {
    ByName = 'byName',
    ByDate = 'byDate',
    ByDesLevel = 'byDesLevel',
    ByPerson = 'byPerson',
    ByProject = 'byProject',
    BySubject = 'bySubject',
    ByMaker = 'byMaker',
    ByType = 'byType',
    ByPlace = 'byPlace',
    ByBirthDate = 'byBirthDate',
    ByProfession = 'byProfession',
    ByDeathDate = 'byDeathDate',
    ByAuthor = 'byAuthor',
    ByLocation = 'byLocation',
}

interface Dimensions {
    height?: number | null
    width?: number | null
}

export function usePresenter(dimensions: Dimensions, data: FilterType[], selector: string) {
    const dataDimensions = useFitDataToDimensions(dimensions, data)
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)

    return {
        svgRef,
        dataDimensions,
    }
}
