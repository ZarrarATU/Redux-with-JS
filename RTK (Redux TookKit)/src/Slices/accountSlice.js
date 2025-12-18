import {createSlice} from '@reduxjs/toolkit'


const init = {
    dark: false,
    value: 1,
}

const ThemeSlice = createSlice({
    name: 'account',
    initialState: init,
    reducers: {
        switchTheme: (state,action)=>{
             state.dark = !state.dark
        }
    }

})


export const {switchTheme} = ThemeSlice.actions 
export default ThemeSlice.reducer