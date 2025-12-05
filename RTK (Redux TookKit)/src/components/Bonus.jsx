import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {

  const bonus = useSelector(state=>state.bonus)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Total Point: {bonus.points}</h1>
        <button  className='incPoint'>Increment</button>
    </div>
  )
}

export default Bonus