import React, { useState } from 'react'
import { addTodo } from '../Slices/todoSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setInput(e.target.value)
  }


  return (
    <div>
      <input value={input} onChange={handleChange} type="text" className="add-todo" />
      <button onClick={() => {
        dispatch(addTodo({ text: input, id: nanoid() }))
        setInput('')
      }} className="add">ADD</button>
    </div>
  )
}

export default AddTodo