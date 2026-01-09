import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToCart, getCartItems, removeItemFromCart, updateCartItem } from "./CartAPI";


const init = {
    cart: [],
    isOpen: false,

}

export const fetchCart = createAsyncThunk(
    'cart/fetchData',
    async () => {
        const res = await getCartItems()
        return res.data
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (product) => {
        const res = await addItemToCart(product)
        return res.data
    }
)

export const removeItem = createAsyncThunk(
    'cart/removeitem',
    async (id) => {
        await removeItemFromCart(id)
        return id
    }
)

export const updateCartQuantity = createAsyncThunk(
    'cart/updateQuantity',
    async ({id,quantity})=>{
        const res = await updateCartItem(id,{quantity})
        return res.data
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: init,
    reducers: {
        toggleCart: state => {
            state.isOpen = !state.isOpen
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cart = action.payload
                console.log(action.payload, 'action');

            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cart.push(action.payload)
            })
            .addCase(removeItem.fulfilled,(state,action)=>{
                state.cart = state.cart.filter((item)=>{
                    return item.id !== action.payload
                })
            })
            .addCase(updateCartQuantity.fulfilled,(state,action)=>{
                state.cart = state.cart.map(item => {
                     if(item.id === action.payload.id){
                        return action.payload
                     }
                     else{
                        return item
                     }

                });
                
            })
    }

})


export default cartSlice.reducer;
export const { toggleCart } = cartSlice.actions;