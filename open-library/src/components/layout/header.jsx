import React from "react";
import {Link} from "react-router-dom";
import logo from "./img/logo.png"
import ColorLink from "./header.css"

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container-fluid p-2 bg-success bg-gradient bg-opacity-75">
                    <div className="row">
                        <div className="col-2">
                            <Link className="navbar-brand" to="/"><img src={logo} alt="Logo"
                                                                                width="80px"/></Link>
                        </div>
                        <div className="col-6 navbar-expand justify-content-center my-auto">
                            <nav className="nav nav-pills nav-fill fw-bolder fs-5">
                                <Link className="nav-link" to="#">Home</Link>
                                <Link className="nav-link" to="#">Books</Link>
                                <Link className="nav-link" to="#">DashBoard</Link>
                                <Link className="nav-link" to="#">Contact</Link>
                            </nav>

                        </div>
                        <div className="col-4 navbar-expand my-auto ">
                            <nav className="nav fw-bold justify-content-end fs-6">
                                <Link className="nav-link" id="reg" to="#">Register</Link>
                                <Link className="nav-link" id="log" to="#">Login</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}