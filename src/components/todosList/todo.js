import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../actions/todos'
export const Todo = ({todo}) => {

    const dispatch = useDispatch()
    
    const functionDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
    }
    return (
        <div className="todo__individual-todo-container">
            <div>
                <p className="todo__paragraph">{todo.todo}</p>
            </div>
            <div className="todo-container-buttons">
                <button type="button" className="todo__button-edit" onClick={deleteTodo}>Edit</button>
                <button type="button" className="todo__button-edit" onClick={functionDeleteTodo}>Delete</button>
            </div>
        </div>
    )

}
