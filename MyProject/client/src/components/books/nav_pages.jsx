import React from "react";
import {Link} from "react-router-dom";

export const NavPages = () => {

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <div className="mb-4">
                    <Link id="oldPage"
                          className="btn btn-outline-success btn-sm text-uppercase fw-bold"
                          to="#!">← Previous</Link></div>
                <div className="mb-4">
                    <Link id="newPage"
                          className="btn btn-outline-success btn-sm text-uppercase fw-bold"
                          to="#!">Next →</Link></div>
            </div>
        </div>
    );

}