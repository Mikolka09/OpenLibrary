import React from "react";
import "./css/auth_container.css";
import {Route, Switch} from "react-router-dom";
import AuthRegister from "./auth_register";
import AuthLogin from "./auth_login";

export default class AuthContainer extends React.Component {
    render() {
        return (
            <div>
               <Switch>
                   <Route path="/register">
                       <AuthRegister/>
                   </Route>
                   <Route path="/login">
                       <AuthLogin/>
                   </Route>
               </Switch>
            </div>
        )
    }
}