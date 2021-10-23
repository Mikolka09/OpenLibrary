import React from "react";
import TopBooksCss from "./css/topbooks_container.css";
import HeadingTopBooks from "./heading_topbooks";
import Top10AllCategories from "./top10_allCategories";
import Top10Category from "./top10_Category";


export default class TopBooksContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_top">
                <HeadingTopBooks/>
                <Top10AllCategories/>
                <Top10Category/>
            </div>
        )
    }
}