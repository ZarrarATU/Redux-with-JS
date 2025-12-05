import React, { useEffect, useState } from 'react'


function Account() {



  


    let [input,setInput] = useState(0)

    function handleInput(e){
      setInput(Number(e.target.value)) 
    }

    function handleInc(){
       
    }
  
    

  return (
    <div>
        <h1>Amounttt: {}-</h1>
        <button className="inc" onClick={handleInc}>Increment</button>
        <button className="dec" >Decrement</button>
        <input type="number" value={input} onChange={handleInput} />
        <button className="incByAmt" >Increase by ${input} </button>
    </div>
  )
}

export default Account