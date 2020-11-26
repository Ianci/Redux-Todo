import React from 'react'
import { useSelector } from 'react-redux'
import { FormTaskManager } from '../form/FormTaskManager'
import { Navbar } from '../nav/Navbar'

export const HomeScreen = () => {
    
    return (
        <>
        <Navbar />
       
        <div className="home__container">
           <div className="home__task-manager">
               
               <FormTaskManager />
           </div>
        </div>
        </>
    )
}
