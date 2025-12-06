import {createSlice} from '@reduxjs/toolkit'

const init = {
    amount: 699
}


export const accountSlice = createSlice({
    name: 'account',
    initialState: init,
    reducers:{
        increment: state=>{
            state.amount += 299
        },
        decrement: state=>{
            state.amount -= 12
        },
        incByAmt: (state,action)=>{
            state.amount += action.payload
        }
    }
})


export const {increment,decrement,incByAmt} = accountSlice.actions;

export default accountSlice.reducer