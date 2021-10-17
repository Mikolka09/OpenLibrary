import React from "react";
import Heading from "./heading";
import HomeCss from "./home_container.css";
import Search_Books from "./search_books";
import Welcome from "./welcome";

export default class Home_Container extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_home">
                <Heading/>
                <Search_Books/>
                <Welcome/>
            </div>
        )
    }
}