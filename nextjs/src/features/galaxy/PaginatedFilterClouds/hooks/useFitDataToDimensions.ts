import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useEffect, useRef, useState } from 'react'
import { PaginatedFilterType } from '../types'

export interface DataDimensions {
    name: string
    takeSpace: number
    randomMultiplier: number
}

export function useFitDataToDimensions(dimensions: Dimensions, data: PaginatedFilterType[]) {
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
            const takeSpace = totalOccupiedGridItems * item.numberOfInstances
            return {
                name: item.filter,
                takeSpace: takeSpace < 300 ? 300 : takeSpace,
                randomMultiplier: dataDimension?.randomMultiplier ?? randomNumberBetweenPoints(0.8, 0.99),
            }
        })
        prevDataDimensions.current = newData
        setDataDimensions(newData)
    }, [dimensions, data])

    return dataDimensions
}
