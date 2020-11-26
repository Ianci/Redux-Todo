import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'

export const AppRoutes = () => {
    return (
       
        <Router>

            <div>
            <Switch>
            <Route exact path="/" component={HomeScreen}/>
            
            </Switch>
            </div>
            
        </Router>
      
    )
}
