import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DEFAULT_FILTER_TYPE } from '../filterConstants'
import { FilterTypes } from '../filtersTypes'
import getFiltersTask from '../tasks/getFiltersTask'

const usePresenter = () => {
    const [filters, setFilters] = useState<unknown[]>()
    const dispatch = useDispatch()

    useEffect(() => {
        setFilter(DEFAULT_FILTER_TYPE)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setFilter = (type: FilterTypes) => {
        const data = getFiltersTask(dispatch, type)
        setFilters(data)
    }

    return {
        filters,
        setFilter,
    }
}

export default usePresenter
