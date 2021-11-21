import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import {ListMyBooks} from "./list_mybooks";
import ImgDash from "./img/2017-11-MyDashboard.svg";
import "./css/dashboard_main.css";
import {CreateMyBook} from "./create_mybook";
import {dashboardRoutes} from "../../routes/dashboard_routes";
import {AuthContext} from "../../context/authContext";

export const DashBoardMain = () => {
    const auth = useContext(AuthContext);
    const dash_routes = dashboardRoutes(auth.userRole);

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
                {dash_routes}
            </Switch>
        </main>
    )
}