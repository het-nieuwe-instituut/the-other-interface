import { configureStore } from "@reduxjs/toolkit"
import { filtersSlice } from "src/features/filters/filtersSlice"

// config the store 
const store= configureStore({
    reducer: {
       filters: filtersSlice.reducer
    }
 })
 
 // export default the store 
 export default store