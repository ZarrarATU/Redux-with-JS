import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getCartItems = ()=>{
    return api.get('/cart')
}

export const addItemToCart = (product)=>{
    return api.post('/cart', product)
}

export const removeItemFromCart = (id)=>{
    return api.delete(`/cart/${id}`)
}

export const updateCartItem = (id,quantity)=>{
    return api.patch(`/cart/${id}`,quantity)
}
