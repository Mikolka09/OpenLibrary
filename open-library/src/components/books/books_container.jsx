import React from "react";
import BooksCss from "./css/books_container.css";
import SearchBooks from "../home/search_books";
import HeadingBooks from "./heading_books";
import SortBooks from "./sort_books";
import ListBooks from "./list_books";
import NavPages from "./nav_pages";


export default class BooksContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_books">
                <HeadingBooks/>
                <SearchBooks/>
                <SortBooks/>
                <ListBooks/>
                <NavPages/>
            </div>
        )
    }
}