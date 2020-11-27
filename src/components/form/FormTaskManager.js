import React from 'react'
import { useForm } from '../../hooks/useForm'
import { TodoList } from '../todosList/todoList'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todos';

export const FormTaskManager = () => {
    const dispatch = useDispatch()
    const { state, handleChange, resetForm } = useForm({ todo: ""})
  
    const { todo } = state
    console.log(todo)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(todo, uuidv4()))
        resetForm()
    }
    return (
        <div className="form__container">
            <form onClick={handleSubmit}>
            
            <input className="form__input-todo" type="text" placeholder="Inserte una tarea" name="todo" value={todo}
            onChange={handleChange}
            autoComplete="off"/>
            <button className="form__button-submit "type="submit">Agregar</button>
            
            </form>
            
            <div className="todo__main-container">
            <TodoList />
            </div>
        </div>
    )
}
