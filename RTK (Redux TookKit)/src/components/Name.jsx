import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import changeName from '../reducers/NameRed'

function Name() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

  return (
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        <button onClick={()=>dispatch(changeName(input))}>Change</button>
    </div>
  )
}

export default Name