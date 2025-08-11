import { createSlice } from "@reduxjs/toolkit";

const searchProductSlice = createSlice(
    {
        name:"searchProduct",
        initialState:{
            searchTerm:"" //aranacak terim
        },
        reducers: {
            setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            },
            clearSearchTerm: (state) => {
            state.searchTerm = "";
            }
        }
    }
)

export const {setSearchTerm,clearSearchTerm} = searchProductSlice.actions

export default searchProductSlice.reducer