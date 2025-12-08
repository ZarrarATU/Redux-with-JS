import { createAction,createReducer } from "@reduxjs/toolkit";

const init = {
    gift: 22
}

export const increment = createAction('reward/increment')
export const decrement = createAction('reward/decrement')

const Reducer = createReducer(init,builder=>{
    builder.addCase(increment,(state,action)=>{
         state.gift += 11;
    })
    .addCase(decrement,(state,action)=>{
        state.gift -= 11
    })
})

export default Reducer