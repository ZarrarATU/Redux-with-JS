import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function Account() {


  const account = useSelector(state=>state.account)

  


    let [input,setInput] = useState(0)

    function handleInput(e){
      setInput(Number(e.target.value)) 
    }

    function handleInc(){
       
    }
  
    

  return (
    <div>
        <h1>Amounttt: {account.amount}-</h1>
        <button className="inc" onClick={handleInc}>Increment</button>
        <button className="dec" >Decrement</button>
        <input type="number" value={input} onChange={handleInput} />
        <button className="incByAmt" >Increase by ${input} </button>
    </div>
  )
}

export default Account