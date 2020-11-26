import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FormTaskManager = () => {
    
    const { state, handleChange, resetForm } = useForm({ todo: ""})
  
    const handleSubmit = e => {
        e.preventDefault()
        console.log(state.todo)
        resetForm()
    }
    return (
        <div className="form__container">
            <form onClick={handleSubmit}>
            
            <input className="form__input-todo" type="text" placeholder="Inserte una tarea" name="todo" value={state.todo}
            onChange={handleChange}
            autoComplete="off"/>
            <button className="form__button-submit "type="submit">Agregar</button>
            
            </form>
    
        </div>
    )
}
