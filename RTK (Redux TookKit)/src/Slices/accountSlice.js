import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


let init = {
    amount: 20,
    pending: false,
    reject: false
}


export const getData = createAsyncThunk('account/getData',async (id,ThunkAPI)=>{
     const {data} = await axios.get(`http://localhost:30005/amount/${id}`);
     return data.price
})

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
    },
    extraReducers: builder=>{
        builder.addCase(getData.fulfilled,(state,action)=>{
              state.amount += action.payload
              state.pending = false
              console.log(action.payload);
        }).addCase(getData.pending,(state,action)=>{
              state.pending = true
        }).addCase(getData.rejected,(state)=>{
              state.reject = true
        })
    }
})



export const {increment,decrement,incByAmt} = accountSlice.actions;
export default accountSlice.reducer