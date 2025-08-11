import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice(
    {
        name:"themeMode",
        initialState:{
            isDark:false,
        },
        reducers:{
            toggleTheme: (state)=>{
                state.isDark = !state.isDark;
            }
        }
    }
)

export const {toggleTheme} =themeModeSlice.actions;
export default themeModeSlice.reducer