import React from "react";
import {ItemBook} from "./item_book";

export const ListBooks = () => {

    return (
        <div className="container">
            <div className="row justify-content-evenly">
                <ItemBook/>
                <ItemBook/>
                <ItemBook/>
                <ItemBook/>
            </div>
        </div>
    )
}