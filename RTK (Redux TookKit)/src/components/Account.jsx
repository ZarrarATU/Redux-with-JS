import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incByAmt } from '../Slices/accountSlice'

function Account() {


  const account = useSelector(state=>state.account)
  const dispatch = useDispatch()

  


    let [input,setInput] = useState(0)

    function handleInput(e){
      setInput(Number(e.target.value)) 
    }

    function handleInc(){
        dispatch(increment())
    }

    function handleDec(){
        dispatch(decrement())
    }

    function handleIncByAmt(){
        dispatch(incByAmt(input))
    }
  
    

  return (
    <div>
        <h1>Amounttt: {account.amount}-</h1>
        <button className="inc" onClick={handleInc}>Increment</button>
        <button className="dec" onClick={handleDec} >Decrement</button>
        <input type="number" value={input} onChange={handleInput} />
        <button className="incByAmt" onClick={handleIncByAmt} >Increase by ${input} </button>
    </div>
  )
}

export default Account