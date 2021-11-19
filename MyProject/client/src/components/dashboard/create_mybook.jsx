import React from "react";

export const CreateMyBook = () => {
    return (
        <div>
            <div>
                <h4 className="fw-bolder text-center"><u>CREATE BOOK</u></h4>
            </div>
            <div>
                <div className="row">
                    <div className="col">
                        <form className="needs-validation" name="userForm" encType="multipart/form-data">
                            <div className="row fw-bold text-start justify-content-center">
                                <div className="col-4">
                                    <div className="text-danger"></div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="ImgFile">Img File</label><br/>
                                        <input className="form-control" id="ImgFile" name="ImgUrl"
                                               type="file"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="TxtFile">Txt File</label><br/>
                                        <input className="form-control" id="TxtFile" name="FileUrl"
                                               type="file"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="Title">Title</label><br/>
                                        <input className="form-control" type="text" placeholder="Title"
                                               id="Title" name="Title" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4"
                                               htmlFor="Description">Description</label><br/>
                                        <textarea className="form-control" type="text"
                                                  placeholder="Short Description"
                                                  name="Description" id="Description" required/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="Author">Author</label><br/>
                                        <input className="form-control" type="text" placeholder="Author"
                                               name="Author" id="Author" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="Category">Category</label><br/>
                                        <select id="Category" className="form-select"
                                                defaultValue={'DEFAULT'}>
                                            <option value="DEFAULT" disabled>Select a Category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="Date Publish">Date
                                            Publish</label><br/>
                                        <input className="form-control" type="text"
                                               placeholder="24.10.2000"
                                               id="Publish" name="Publish" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4" htmlFor="ISBN">ISBN</label><br/>
                                        <input className="form-control" type="text"
                                               placeholder="ISBN" id="ISBN" name="ISBN" required/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-10 text-end">
                    <button type="button" id="btnSend" className="btn btn-success mt-3">Create</button>
                </div>
            </div>
        </div>
    )
}