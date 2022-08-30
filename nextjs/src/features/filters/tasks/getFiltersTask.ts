// example 

import store from "src/features/shared/configs/store";
import { filtersActions } from "../filtersSlice";
import { FilterTypes } from "../filtersTypes";

const getFiltersTask = (filterType: FilterTypes) => {
    // call for the request
    // const response = await apolloClient.query({
    //     query: FiltersQuery,
    //     variables: {
    //       username,
    //     },
    //   })

    // do some formating if it's needed 

    //save something to store, for example active filter
    store.dispatch(filtersActions.setActiveFilter({activeFilter: filterType}))
    // return data

    return []
    
}

export default getFiltersTask