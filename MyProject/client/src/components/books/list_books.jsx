import React from "react";
import ItemBook from "./item_book";

export default class ListBooks extends React.Component {
    render() {
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
}