import React, { useEffect, useState } from 'react'
import { inc } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmt } from '../actions/action'

function Account() {


  const amount =  useSelector(state=>state.account.amount)
  let dispatch = useDispatch()
  


    let [input,setInput] = useState(0)

    function handleInput(e){
      setInput(Number(e.target.value)) 
    }

    function handleInc(){
       dispatch(incrementByAmt)
    }
  
    

  return (
    <div>
        <h1>Amounttt: {amount}-</h1>
        <button className="inc" onClick={handleInc}>Increment</button>
        <button className="dec" >Decrement</button>
        <input type="number" value={input} onChange={handleInput} />
        <button className="incByAmt" >Increase by ${input} </button>
    </div>
  )
}

export default Account