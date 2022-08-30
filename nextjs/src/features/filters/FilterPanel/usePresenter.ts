import React, { useEffect, useState } from 'react'
import { DEFAULT_FILTER_TYPE } from '../filterConstants'
import { FilterTypes } from '../filtersTypes'
import getFiltersTask from '../tasks/getFiltersTask'

const usePresenter = () => {
    const [filters, setFilters] = useState<unknown[]>()
    
    useEffect(() => {
        setFilter(DEFAULT_FILTER_TYPE)
    }, [])

    const setFilter = (type: FilterTypes) => {
        const data = getFiltersTask(type)
        setFilters(data)    
    }
    
    return {
        filters,
        setFilter
    }
}


export default usePresenter