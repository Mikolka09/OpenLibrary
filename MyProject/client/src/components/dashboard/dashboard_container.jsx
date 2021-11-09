import React from "react";
import DashBoardNavBar from "./dashboard_navbar";
import DashBoardMain from "./dashboard_main";
import "./css/dashboard_container.css"

export default class DashboardContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_dash">
                <div className="row min-vh-100 flex-column flex-md-row">
                    <DashBoardNavBar/>
                    <DashBoardMain/>
                </div>
            </div>
        )
    }
}