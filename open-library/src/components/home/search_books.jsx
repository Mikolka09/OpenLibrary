import React from "react";

export default class Search_Books extends React.Component{
    render() {
        return(
            <div className="py-2">
                <form>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <input className="form-control" type="text" name="text" placeholder="Search by Keyword" id="search_text"/>
                        </div>
                        <div className="col-2">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Search by Author</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Search by Genre</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <hr className="mt-5"/>
            </div>
        )
    }
}