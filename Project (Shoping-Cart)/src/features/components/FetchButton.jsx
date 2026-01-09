import { useDispatch } from 'react-redux'
import { fetchData } from '../Products/ProductsSlice'
import { toggleCart } from '../Cart/CartSlice'

export const FetchButton = () => {

    const dispatch = useDispatch()

    function handleCartBtn(){
       dispatch(toggleCart())
    }

    return (
        <>
        <button onClick={() => { dispatch(fetchData()) }}>FETCH</button>
        <button onClick={handleCartBtn} className="cart-btn">🛒</button>
        </>
        
    )
}

