import React from "react";
import {Redirect} from "react-router-dom";
import {DashboardContainer} from "./components/dashboard/dashboard_container";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) { return ( <DashboardContainer/>) }

    return ( <Redirect to="/login"/> )
}