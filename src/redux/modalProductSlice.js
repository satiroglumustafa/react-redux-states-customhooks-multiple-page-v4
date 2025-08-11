import { createSlice } from "@reduxjs/toolkit";

const modalProductSlice = createSlice({
    name:"modalProduct",
    initialState: {
        isModal:false
    },
    reducers:{
        modalTheme:(state)=>{
            state.isModal = !state.isModal; //state.isModal === false ? true : false;
        }
    }
})

export const {modalTheme} = modalProductSlice.actions

export default modalProductSlice.reducer