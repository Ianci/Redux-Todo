import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { LoginScreen } from '../components/loginscreen/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRoutes = () => {
    const {isLoggedIn} = useSelector(state => state.auth)
    console.log(isLoggedIn)
    return (
       
        <Router>

            <div>
            <Switch>
            <PrivateRoute path="/home" component={HomeScreen}
            isAuthenticated={isLoggedIn}
            />
            <PublicRoute exact path="/" component={LoginScreen} 
            isAuthenticated={isLoggedIn}
            />
            <Redirect to="/" />
            </Switch>
            </div>
            
        </Router>
      
    )
}
