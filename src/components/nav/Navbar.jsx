import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className="nav__container">

            <div className="nav__logo">
            <Link to="/" className="nav__link-logo">Redux Task Manager</Link>  
            </div>

            <p className="nav__link-logo">Hola</p>
            
        </div>
    )
}
