import {createSlice} from '@reduxjs/toolkit'

const init = {
    amount: 699
}


export const accountSlice = createSlice({
    name: 'account',
    initialState: init,
    reducers:{
        increment: state=>{
            state.value += 299
        },
        decrement: state=>{
            state.value -= 12
        },
        incByAmt: (state,action)=>{
            state.value += action.payload
        }
    }
})


export const {increment,decrement,incByAmt} = accountSlice.actions;

export default accountSlice.reducer