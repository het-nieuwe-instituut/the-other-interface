import { SimulationNodeDatum } from 'd3'
import { useMemo } from 'react'

export const useD3DataCopy = <TData extends Array<TData[0]>>(data: TData) =>
    useMemo<(TData[0] & SimulationNodeDatum)[]>(() => JSON.parse(JSON.stringify(data)), [data])
