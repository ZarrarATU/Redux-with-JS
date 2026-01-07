import { useDispatch } from 'react-redux'
import { fetchData } from '../Products/ProductsSlice'

export const FetchButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => { dispatch(fetchData()) }}>FETCH</button>
    )
}

