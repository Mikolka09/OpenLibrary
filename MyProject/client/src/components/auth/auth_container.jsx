import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import {AuthRegister} from "./auth_register";
import {AuthLogin} from "./auth_login";

export const AuthContainer =() => {

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