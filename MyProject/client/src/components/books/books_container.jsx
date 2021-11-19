import React from "react";
import "./css/books_container.css";
import {SearchBooks} from "../home/search_books";
import {HeadingBooks} from "./heading_books";
import {SortBooks} from "./sort_books";
import {ListBooks} from "./list_books";
import {NavPages} from "./nav_pages";


export const BooksContainer = () => {

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