import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useEffect, useRef, useState } from 'react'

export interface BaseData {
    name: string
    numberOfInstances: number
}

export interface DataDimension {
    name: string
    takeSpace: number
    randomMultiplier: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useFitDataToDimensions<_, TData extends BaseData>(dimensions: Dimensions, data: TData[]) {
    const [dataDimensions, setDataDimensions] = useState<DataDimension[]>([])
    const prevDataDimensions = useRef<DataDimension[]>([])

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
            const dataDimension = prevDataDimensions.current.find(dataDimension => dataDimension.name === item.name)
            const takeSpace = totalOccupiedGridItems * item.numberOfInstances
            return {
                name: item.name,
                takeSpace: takeSpace < 300 ? 300 : takeSpace,
                randomMultiplier: dataDimension?.randomMultiplier ?? randomNumberBetweenPoints(0.8, 0.99),
            }
        })
        prevDataDimensions.current = newData
        setDataDimensions(newData)
    }, [dimensions, data])

    return dataDimensions
}
