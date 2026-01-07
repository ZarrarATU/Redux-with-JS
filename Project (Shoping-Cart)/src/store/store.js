import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/Products/ProductsSlice'

export const store = configureStore({
    reducer:{
        products: productReducer,
    }
})