import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/auth'
export const Navbar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {username, isLoggedIn} = useSelector(state => state.auth)
    const {name} = username
    
    const logOutUser = () => {
        dispatch( logout() )
        history.push('/')
    }
    return (
        <div className="nav__container">

            <div className="nav__logo">
            <Link to="/" className="nav__link-logo">Redux Task Manager</Link>  
            </div>
            <div style={{display: "flex"}}>

            <p className="nav__link-logo">Hola {name}</p>
            {isLoggedIn && <button type="button" className="nav__btn-logout" onClick={logOutUser}>Logout</button>}

            </div>
        </div>
    )
}
