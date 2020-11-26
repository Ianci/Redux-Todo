import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
export const FormLogin = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [error, seterror] = useState(null)
    const { state, handleChange } = useForm({ name: ""})
    const { name} = state

    const validation = () => {
        if(name.trim() === ""){
            seterror('Por favor introduce tu nombre para continuar')
            return false
        } else if(name.trim().length > 12){
            seterror('Demasiados caracteres, introduce un nombre más corto')
            return false
        }
        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(validation()){
            dispatch(login(name))
            history.push('/home')
        }
      
    }
    return (
        <div className="form__login">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" className="form__input-todo" name="name" value={name} autoComplete="off" placeholder="Cómo te llamas?"/>
                <button type="submit" className="form__button-submit">Ingresar</button>
                <div className="form__error">
                {error && <p>{error}</p>}
                </div>
            </form>
            
        </div>
    )
}
