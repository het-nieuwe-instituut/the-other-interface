// example

import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { filtersActions } from '../filtersSlice'
import { FilterTypes } from '../filtersTypes'

const getFiltersTask = (dispatch: Dispatch<AnyAction>, filterType: FilterTypes) => {
    // do some formating if it's needed

    //save something to store, for example active filter
    dispatch(filtersActions.setActiveFilter({ activeFilter: filterType }))
    // return data

    return []
}

export default getFiltersTask
