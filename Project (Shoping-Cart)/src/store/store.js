import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/Products/ProductsSlice'
import cartReducer from '../features/Cart/CartSlice'

export const store = configureStore({
    reducer:{
        products: productReducer,
        cart: cartReducer
    }
})