import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchButton } from './features/components/FetchButton'
import Products from './features/Products/Products'
import Cart from './features/Cart/Cart'
import { fetchCart } from './features/Cart/CartSlice'

function App() {

  const products = useSelector(state=> state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCart())
  },[])

  useEffect(()=>{
   console.log(products);
   
  },[products])
  

  return (
    <div id='main'>
         <Cart></Cart>
        <FetchButton></FetchButton>
         <Products status={products.status} products={products.products}></Products>

         
    </div>
  )
}

export default App