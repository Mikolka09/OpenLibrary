import React from "react";
import {Route, Switch} from "react-router-dom";
import {ListUsers} from "../components/dashboard/list_users";


export const dashboardRoutes = role => {

    if (role === "USER") {
        return (
            <Switch>
                <Route path="/dashboard/userDetails">

                </Route>
                <Route path="/dashboard/userDelete">

                </Route>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/dashboard/usersAll">
                <ListUsers/>
            </Route>
            <Route path="/dashboard/booksAll">

            </Route>
        </Switch>
    )
}