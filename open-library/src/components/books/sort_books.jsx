import React from "react";

export default class SortBooks extends React.Component {
    render() {
        return (
            <div className="py-4 pb-5">
                <form>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <select className="form-select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Sort by Author</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select className="form-select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Search by Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select className="form-select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Sort by Publishing Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}