import {createAction, createSlice} from '@reduxjs/toolkit'


const init = {
    points: 3
}

const incByAmt = createAction('account/incByAmt');
const changeName = createAction('changeName')

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState: init,
    reducers: {
        increment: state=>{
            state.points += 2
        }
    },
    extraReducers:builder=>{
        builder.addCase(incByAmt,(state,action)=>{
            if(action.payload > 100){
                state.points += 1
            }
        })
        .addCase(changeName,(state,action)=>{
            state.points += 200
        })
    }
})

export const {increment} = bonusSlice.actions
export default bonusSlice.reducer