import { createSlice, nanoid } from "@reduxjs/toolkit";

const init = {
    todo: []
}


const TodoReducer = createSlice({
    name: 'todo',
    initialState: init,
    reducers: {
        addTodo: (state,action)=>{
            state.todo.push(action.payload)
        },
        deleteTodo: (state,action)=>{
           state.todo = state.todo.filter(tod=>tod.id !== action.payload)
        },
        editTodo: (state,action)=>{
            state.todo.map(todo=>todo.id === action.payload.id ? todo.text = action.payload.text : todo)
        }
    }
})


export default TodoReducer.reducer
export const {addTodo,deleteTodo,editTodo} = TodoReducer.actions