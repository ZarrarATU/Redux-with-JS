import { useDispatch, useSelector } from "react-redux"
import { removeItem, toggleCart, updateCartQuantity } from "./CartSlice"

import { useEffect } from "react"
import { addItemToCart } from "./CartAPI"

function Cart() {

  const cart = useSelector(state => state.cart.cart)
  const isCartOpen = useSelector(state => state.cart.isOpen)
  const dispatch = useDispatch()


  function handleCartCloseBtn() {
    dispatch(toggleCart())
  }

  function incQuantity(item) {
    const quantity = item.quantity < 20 ? item.quantity + 1 : item.quantity
    return { id: item.id, quantity: quantity }
  }

  function decQuantity(item) {
    const quantity = item.quantity > 1 ? item.quantity - 1 : item.quantity
    return { id: item.id, quantity: quantity }
  }



  return (
    <div className={`cart ${isCartOpen ? 'open' : null}`}>
      <button onClick={handleCartCloseBtn} className="cart-close-btn">
        ❌
      </button>

      {cart.map(item => {
        return <div key={item.id} className="cart-item">
          <p className="item-name">{item.title}</p>
          <img src={item.img} />
          <p className="price">{item.price} || {item.currency}</p>
          <div className="quantity-div">

            <button onClick={() => dispatch(updateCartQuantity(decQuantity(item)))} className="decQuantity">-</button>

            <p className="quantity">{item.quantity}</p>

            <button onClick={() => dispatch(updateCartQuantity(incQuantity(item)))} className="incQuantity">+</button>

            <button onClick={() => dispatch(removeItem(item.id))} className="removeItem">REMOVE</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default Cart