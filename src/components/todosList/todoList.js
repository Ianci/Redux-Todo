import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './todo'

export const TodoList = () => {

    const {todos} = useSelector(state => state.todos)
    console.log(todos)
    return (
        <div className="todo__container">
            {todos.length === 0 ?
            <p className="todo__add-your-first">Agregar tu primer tarea</p>
            :
            todos.map(todo => (
                <Todo key={todo.id}
                todo={todo}/>
            ))
            }
        </div>
    )
}
