import {createSlice} from '@reduxjs/toolkit'


let init = {
    amount: 20,
}

const accountSlice = createSlice({
    name: 'account',
    initialState: init,
    reducers:{
        increment: state=>{
            state.amount += 1;
        },
        decrement: state=>{
            state.amount -= 1;
        },
        incByAmt: (state,action)=>{
            state.amount += action.payload
        }
    }
})



export const {increment,decrement,incByAmt} = accountSlice.actions;
export default accountSlice.reducer