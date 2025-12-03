import React, { useState } from 'react'

function Account({account,setAccount}) {


    let [input,setInput] = useState(0)

    function handleInput(e){
      setInput(Number(e.target.value)) 
    }

    function handleInc(){
        setAccount(acc=>{return {amount: acc.amount + 1}})
    }
    function handleDec(){
        setAccount(acc=>{return {amount: acc.amount - 1}})
    }

    function handleIncAmt(){
        setAccount(acc=>{return {amount: acc.amount + input}})
    }
    

  return (
    <div>
        <h1>Amount: {account.amount}</h1>
        <button className="inc" onClick={handleInc}>Increment</button>
        <button className="dec" onClick={handleDec}>Decrement</button>
        <input type="number" value={input} onChange={handleInput} />
        <button className="incByAmt" onClick={handleIncAmt}>Increase by ${input} </button>
    </div>
  )
}

export default Account