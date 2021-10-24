import React from "react";
import {Route, Switch} from "react-router-dom";
import ListMyBooks from "./list_mybooks";
import ImgDash from "./img/2017-11-MyDashboard.svg";
import "./css/dashboard_main.css";

export default class DashBoardMain extends React.Component{
    render() {
        return(
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
                </Switch>
            </main>
        )
    }
}