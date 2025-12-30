import { createReducer,createAction } from "@reduxjs/toolkit";


const init = {
    name: 'DEFAULT'
}

const changeName = createAction('changeName')

export const NameReducer = createReducer(init,builder=>{
    builder.addCase(changeName,(state,action)=>{
        state.name = action.payload
    })
})

export default changeName


