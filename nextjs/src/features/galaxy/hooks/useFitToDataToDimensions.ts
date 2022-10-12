import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useEffect, useRef, useState } from 'react'

export interface DataDimension {
    id: string
    takeSpace: number
    randomMultiplier: number
}

export function useFitDataToDimensions<
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _,
    TData extends Array<TData[0]>,
    GetName extends (d: TData[0]) => string,
    GetCount extends (d: TData[0]) => number
>(dimensions: Dimensions, data: TData, getName: GetName, getCount: GetCount) {
    const [dataDimensions, setDataDimensions] = useState<DataDimension[]>([])
    const prevDataDimensions = useRef<DataDimension[]>([])

    useEffect(() => {
        const height = dimensions.height ?? 0
        const width = dimensions.width ?? 0
        const squareSide: number = height > width ? width : height

        const totalSpace = squareSide * squareSide
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data.reduce((total, item) => {
            const count = getCount(item)
            return total + count
        }, 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects
        const newData = data.map(item => {
            const id = getName(item)
            const count = getCount(item)
            const dataDimension = prevDataDimensions.current.find(dataDimension => dataDimension.id === id)
            const takeSpace = totalOccupiedGridItems * count
            console.log(takeSpace)
            return {
                id: id,
                takeSpace: takeSpace < 300 ? 300 : takeSpace,
                randomMultiplier: dataDimension?.randomMultiplier ?? randomNumberBetweenPoints(0.8, 0.99),
            }
        })
        prevDataDimensions.current = newData
        setDataDimensions(newData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dimensions, data])

    return dataDimensions
}
