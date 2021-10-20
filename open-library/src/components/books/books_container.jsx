import React from "react";
import BooksCss from "./books_container.css";
import SearchBooks from "../home/search_books";
import HeadingBooks from "./heading_books";


export default class BooksContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_books">
                <HeadingBooks/>
                <SearchBooks/>
            </div>
        )
    }
}