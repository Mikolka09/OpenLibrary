import React from "react";

export default class HeadingBooks extends React.Component{
    render() {
        return(
            <div className="text-center py-5">
                <p className="h1 fw-bold text-warning">BOOKS LISTING</p>
                <p className="h3 text-success">What are you looking for at the library?</p>
            </div>
        )
    }
}