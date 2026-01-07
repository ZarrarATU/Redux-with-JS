import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./ProductsAPI";

const init = {
    products: [],
    status: null,
}

export const fetchData = createAsyncThunk(
    'products/fetchData',
     async function () {
        const response = await getData()
        return response.data
     }
)

const ProductsSlice = createSlice({
    name: 'shop/products',
    initialState: init,
    reducers: {
        addProducts: (state, action) => {

        },
    },
    extraReducers: builder=>{
      builder
      .addCase(fetchData.pending,(state)=>{
        state.status = 'loading';
      })
      .addCase(fetchData.rejected,(state)=>{
        state.status = 'rejected'
      })
      .addCase(fetchData.fulfilled,(state,action)=>{
        state.products = action.payload
        state.status = 'fullfilled'
      })
    }
})


export default ProductsSlice.reducer
export const { addProducts } = ProductsSlice.actions