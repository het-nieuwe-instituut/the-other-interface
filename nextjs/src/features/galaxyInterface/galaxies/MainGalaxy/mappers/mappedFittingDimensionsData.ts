import { CloudItem } from '../types'

export interface DataDimensions {
    name: string
    takeSpace: number
    id: string
}

export function fitDataToDimensions(base: number, data: CloudItem[]) {
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
}
