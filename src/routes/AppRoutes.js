import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { LoginScreen } from '../components/loginscreen/LoginScreen'

export const AppRoutes = () => {
    return (
       
        <Router>

            <div>
            <Switch>
            <Route path="/home" component={HomeScreen}/>
            <Route exact path="/" component={LoginScreen} />
            <Redirect to="/" />
            </Switch>
            </div>
            
        </Router>
      
    )
}
