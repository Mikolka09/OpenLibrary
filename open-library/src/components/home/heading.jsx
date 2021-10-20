import React from "react";

export default class Heading extends React.Component{
    render() {
        return(
            <div className="text-center py-5">
                <p className="h1 fw-bold text-warning">WHAT’S ALL THE LIBRARY?</p>
                <p className="h3 text-success"><strong>"Open Library"</strong> gives <u>free access</u> to all books!</p>
            </div>
        )
    }
}