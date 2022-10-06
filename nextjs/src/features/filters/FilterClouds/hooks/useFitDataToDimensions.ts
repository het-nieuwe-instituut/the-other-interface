import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useEffect, useRef, useState } from 'react'
import { FilterType, PossibleFilters } from '../usePresenter'

export interface DataDimensions {
    name: PossibleFilters
    takeSpace: number
    randomMultiplier: number
}

export function useFitDataToDimensions(dimensions: Dimensions, data: FilterType[]) {
    const [dataDimensions, setDataDimensions] = useState<DataDimensions[]>([])
    const prevDataDimensions = useRef<DataDimensions[]>([])

    useEffect(() => {
        const height = dimensions.height ?? 0
        const width = dimensions.width ?? 0
        const squareSide: number = height > width ? width : height

        const totalSpace = squareSide * squareSide
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data.reduce((total, item) => total + item.numberOfInstances, 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects
        const newData = data.map(item => {
            const dataDimension = prevDataDimensions.current.find(dataDimension => dataDimension.name === item.filter)
            return {
                name: item.filter,
                takeSpace: totalOccupiedGridItems * item.numberOfInstances,
                randomMultiplier: dataDimension?.randomMultiplier ?? randomNumberBetweenPoints(0.99, 1.01),
            }
        })
        prevDataDimensions.current = newData
        setDataDimensions(newData)
    }, [dimensions, data])

    return dataDimensions
}
