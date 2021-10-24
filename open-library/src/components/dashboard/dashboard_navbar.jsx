import React from "react";
import "./css/dashboard_navbar.css";
import {Link} from "react-router-dom";

export default class DashBoardNavBar extends React.Component {
    render() {
        return (
            <aside className="col-1 p-0 fw-bold" id="nav_bar">
                <nav className="navbar navbar-expand navbar-light flex-md-column flex-row align-items-start py-3">
                    <div className="collapse navbar-collapse">
                        <ul className="flex-md-column flex-row navbar-nav justify-content-start ps-2">
                            <li className="nav-item">
                                <Link className="nav-link pl-0 text-nowrap" id="navbar_link" to="#"><i
                                    className="fa fa-bullseye fa-fw"></i>
                                    <span className="font-weight-bold">Books</span></Link>
                            </li>
                            <ul className="flex-md-column flex-row navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link className="nav-link pl-0" id="navbar_link" to="/dashboard/list">
                                        <span className="d-none d-md-inline">List</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pl-0" id="navbar_link" to="/dashboard/create">
                                        <span className="d-none d-md-inline">Create</span></Link>
                                </li>
                            </ul>
                            <li className="nav-item">
                                <Link className="nav-link pl-0" id="navbar_link" to="#">
                                    <i className="fa fa-heart codeply fa-fw"></i>
                                    <span className="d-none d-md-inline">User</span></Link>
                            </li>
                            <ul className="flex-md-column flex-row navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link className="nav-link pl-0" id="navbar_link" to="/dashboard/userDetails">
                                        <span className="d-none d-md-inline">Details</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pl-0" id="navbar_link" to="/dashboard/userDelete">
                                        <span className="d-none d-md-inline">Delete</span></Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </aside>
        )
    }
}