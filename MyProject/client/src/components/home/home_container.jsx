import React from "react";
import {Heading} from "./heading";
import "./css/home_container.css";
import {SearchBooks} from "./search_books";
import {Welcome} from "./welcome";

export const HomeContainer =()=> {

        return (
            <div className="container-fluid" id="cont_home">
                <Heading/>
                <SearchBooks/>
                <Welcome/>
            </div>
        )

}