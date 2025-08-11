import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from './themeModeSlice'
import searchProductReducer from './searchProductSlice'
import modalProductReducer from './modalProductSlice'

const store = configureStore({
    reducer: {
        // buraya slicelar eklenecek
        themeMode : themeModeReducer,
        searchProduct:searchProductReducer,
        modalProduct:modalProductReducer
    }
    
})

export default store

