import React from 'react';
import "./App.css"
import App from "./components/App";
import Header from './components/Header';
import {Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';




const Routing = () => {
    return (
        <div>
            <Header/>
             <Route exact path ="/"><App /></Route>
             <Route path ="/signup"><Signup /></Route>
             <Route path ="/login"><Login /></Route>

            
        </div>
    )
}

export default Routing;
