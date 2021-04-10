import React from 'react';
import "./App.css"
import App from "./components/App";
// import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Routing = () => {
    const token = localStorage.getItem("token");
    const isLoggedIn = token ? true : false;
    console.log(isLoggedIn);
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {isLoggedIn ? <App /> : <Redirect to="sign-in" />}
                    </Route>
                    <Route exact path="/sign-up" component={Signup}></Route>
                    <Route exact path="/sign-in" component={Login}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;
