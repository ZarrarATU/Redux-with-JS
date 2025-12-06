import {createSlice} from '@reduxjs/toolkit'


const init = {
    points: 3
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState: init,
    reducers: {
        increment: state=>{
            state.points += 2
        }
    }
})

export const {increment} = bonusSlice.actions
export default bonusSlice.reducer