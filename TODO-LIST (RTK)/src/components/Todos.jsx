import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../Slices/todoSlice'
import { useState } from 'react'


function Todos() {

  const todo = useSelector(state => state.todo)
  const [editMode, setEditMode] = useState(null)
  const [editInput, setEditInput] = useState('')
  const dispatch = useDispatch()


  function handleInput(e) {
    setEditInput(e.target.value)
  }



  return (
    <ul className="todos">
      {todo.map(tod => {
        return <li key={tod.id} className="todo">

          {editMode === tod.id ? <>
            <input type="text" onChange={handleInput} value={editInput} />
            <button onClick={() => {
              dispatch(editTodo({ text: editInput, id: tod.id }))
              setEditMode(null)
            }}>EDIT</button>
          </> :
            <>
              <p className="text">{tod.text}</p>
              <button onClick={() => {
                setEditMode(tod.id)
                setEditInput(tod.text)
              }} className="edit">✎</button>
              <button onClick={() => dispatch(deleteTodo(tod.id))} className="delete">✖</button>
            </>

          }


        </li>
      })}

    </ul>
  )
}

export default Todos