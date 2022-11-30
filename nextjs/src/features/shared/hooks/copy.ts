import { SimulationNodeDatum } from 'd3'
import { useMemo } from 'react'

export const useD3DataCopy = <TData>(data: TData) =>
    useMemo<TData & SimulationNodeDatum[]>(() => JSON.parse(JSON.stringify(data)), [data])
