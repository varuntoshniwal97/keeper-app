import React, { useState, useEffect } from 'react';
import "./App.css"
import App from "./components/App";
// import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const Routing = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    
    function updateToken(token) {
        setToken(token);
    }

    const isLoggedIn = !!token;
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {isLoggedIn ? <App /> : <Redirect to="sign-in" />}
                    </Route>
                    <Route exact path="/sign-up" > <Signup updateToken={updateToken} /> </Route>
                    <Route exact path="/sign-in" > <Login updateToken={updateToken} /> </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;
