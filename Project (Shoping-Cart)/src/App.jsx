import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FetchButton } from './features/components/FetchButton'
import Products from './features/Products/Products'

function App() {

  const products = useSelector(state=> state.products.products)


  useEffect(()=>{
   console.log(products);
   
  },[products])
  

  return (
    <div id='main'>
        <FetchButton></FetchButton>
         <Products products={products}></Products>
    </div>
  )
}

export default App