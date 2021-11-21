import React from "react";
import {Route, Switch} from "react-router-dom";
import {ListMyBooks} from "./list_mybooks";
import ImgDash from "./img/2017-11-MyDashboard.svg";
import "./css/dashboard_main.css";
import {CreateMyBook} from "./create_mybook";
import {ListUsers} from "./list_users";

export const DashBoardMain = () => {

    return (
        <main className="col bg-faded py-3 flex-grow-1">
            <Switch>
                <Route exact path="/dashboard">
                    <div className="container" id="cont_main">
                        <img className="img-fluid" src={ImgDash} alt="Dashboard"/>
                    </div>
                </Route>
                <Route path="/dashboard/list">
                    <ListMyBooks/>
                </Route>
                <Route path="/dashboard/create">
                    <CreateMyBook/>
                </Route>
                <Route path="/dashboard/userDetails">
                    <ListUsers/>
                </Route>
                <Route path="/dashboard/userDelete">

                </Route>
            </Switch>
        </main>
    )
}