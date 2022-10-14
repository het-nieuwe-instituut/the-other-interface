import { useMemo } from 'react'
import { ObjectPerTypeWithName } from './useD3Simulation'

export interface DataDimensions {
    name: string
    takeSpace: number
    id: string
}

export function useFitDataToDimensions(base: number, data: ObjectPerTypeWithName[]) {
    const dataDimensions: DataDimensions[] = useMemo(() => {
        const totalSpace = base * base
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data?.reduce((total, item) => total + item.fixedNumberOfInstances, 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects

        return data?.map(item => {
            return {
                id: item.id,
                name: item.name,
                takeSpace: totalOccupiedGridItems * item.fixedNumberOfInstances,
            }
        })
    }, [base, data])

    return dataDimensions
}
