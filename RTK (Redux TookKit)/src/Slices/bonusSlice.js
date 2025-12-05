import {createSlice} from '@reduxjs/toolkit'


const init = {
    points: 2
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState: init,
    reducers: {
        increment: state=>{
            state += 2
        }
    }
})

export const {increment} = bonusSlice.actions
export default bonusSlice.reducer