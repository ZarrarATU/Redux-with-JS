import { useDispatch, useSelector } from "react-redux"
import { addToCart, toggleCart, updateCartQuantity } from "../Cart/CartSlice"


function Products({ products, status }) {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  async function handleCart(product) {

    const itemExist = cart.find(item => item.id === product.id)

    if (itemExist) {
      dispatch(updateCartQuantity({ id: itemExist.id, quantity: itemExist.quantity + 1 }))
    }
    else {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        currency: product.currency,
        quantity: 1
      }))
    }

    // console.log('cart ', cart);

    // cart.forEach(item => {

    //   if (item.id === product.id) {
    //     dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }))
    //   }

    //   else if (cart.length <= 0) {


    //   }
    // });

  }

  return (
    <>
      {status === 'loading' && 'PLEASE WAIT...'}
      {status === 'rejected' && 'AN ERROR OCCURED'}


      <div className='products'>
        {status === 'fullfilled' ? products.map(product => {
          return <div key={product.id} className="product">
            <h3 className="title">{product.title}</h3>
            <img src={product.img} />
            <p className="description">{product.description}</p>
            <p className="price">{product.price} || {product.currency}</p>
            <p className="brand">{product.brand}</p>
            <button onClick={() => handleCart(product)} className="add-to-cart">+</button>
          </div>
        }) : 'NO PRODUCT FOUND'}
      </div>
    </>
  )
}

export default Products