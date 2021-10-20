import React from "react";
import Heading from "./heading";
import HomeCss from "./home_container.css";
import SearchBooks from "./search_books";
import Welcome from "./welcome";

export default class HomeContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_home">
                <Heading/>
                <SearchBooks/>
                <Welcome/>
            </div>
        )
    }
}