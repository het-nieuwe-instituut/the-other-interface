import { useMemo } from 'react'
import { ObjectPerTypeWithName } from './useD3Simulation'

export interface DataDimensions {
    name: string
    takeSpace: number
}

export function useFitDataToDimensions(base: number, data: ObjectPerTypeWithName[]) {
    const dataDimensions: DataDimensions[] = useMemo(() => {
        const totalSpace = base * base
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data?.reduce((total, item) => total + item.numberOfInstances, 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects

        return data?.map(item => {
            return {
                name: item.name,
                takeSpace: totalOccupiedGridItems * item.numberOfInstances,
            }
        })
    }, [base, data])

    return dataDimensions
}
