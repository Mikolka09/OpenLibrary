import React from "react";

export default class HeadingTopBooks extends React.Component{
    render() {
        return(
            <div className="text-center py-5">
                <p className="h1 fw-bold text-warning">TOP RATING BOOKS</p>
                <p className="h3 text-success">Below is a rating of books by three questions</p>
            </div>
        )
    }
}