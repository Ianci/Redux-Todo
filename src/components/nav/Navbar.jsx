import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Navbar = () => {

    const {username} = useSelector(state => state.auth)
    const {name} = !!username && username

    return (
        <div className="nav__container">

            <div className="nav__logo">
            <Link to="/" className="nav__link-logo">Redux Task Manager</Link>  
            </div>

            <p className="nav__link-logo">Hola {name}</p>
            
        </div>
    )
}
