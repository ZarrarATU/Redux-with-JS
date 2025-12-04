import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Bonus() {

const points = useSelector(state=>state.bonus.points)

  return (
    <div>
        <h1>Total Point: {points}</h1>
        <button  className='incPoint'>Increment</button>
    </div>
  )
}

export default Bonus