import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
/*
https://reactrouter.com/web/guides/quick-start
Para usar los Routers tienes que instalar por nmp
eso instala las herramientas que se usaran
*/  
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>

                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
