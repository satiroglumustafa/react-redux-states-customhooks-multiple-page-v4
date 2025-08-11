import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from './themeModeSlice'
import searchProductReducer from './searchProductSlice'

const store = configureStore({
    reducer: {
        // buraya slicelar eklenecek
        themeMode : themeModeReducer,
        searchProduct:searchProductReducer
    }
    
})

export default store

