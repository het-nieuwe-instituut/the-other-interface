// example

import store from '@/features/shared/configs/store'
import { filtersActions } from '../filtersSlice'
import { FilterTypes } from '../filtersTypes'

const getFiltersTask = (filterType: FilterTypes) => {

    // do some formating if it's needed

    //save something to store, for example active filter
    store.dispatch(filtersActions.setActiveFilter({ activeFilter: filterType }))
    // return data

    return []
}

export default getFiltersTask
