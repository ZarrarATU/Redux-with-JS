import React, { useState } from 'react'

function Bonus({bonus,setBonus}) {



  return (
    <div>
        <h1>Total Point: {bonus.points}</h1>
        <button onClick={()=>setBonus((b=>{return {...b,points: b.points+1}}))} className='incPoint'>Increment</button>
    </div>
  )
}

export default Bonus