import React from "react";
import "./css/form_contact.css";

export default class FormContact extends React.Component {
    render() {
        return (
            <div className="col-6">
                <form className="needs-validation text-start fw-bold" name="contactForm">
                    <div className="row justify-content-between mb-4 mt-4">
                        <div className="col-6">
                            <label className="form-label" htmlFor="FullName">FULL NAME</label><br/>
                            <input className="form-control" placeholder="Name" id="FullName" required/>
                        </div>
                        <div className="col-6">
                            <label className="form-label" htmlFor="Email">EMAIL ADDRESS</label><br/>
                            <input className="form-control" placeholder="Email" id="Email" required/>
                        </div>
                    </div>
                    <div className="b-4 mt-4">
                        <label className="form-label" htmlFor="Subject">SUBJECT</label><br/>
                        <input className="form-control" placeholder="Subject" id="Subject" required/>
                    </div>
                    <div className="b-4 mt-4">
                        <label className="form-label" htmlFor="Message">MESSAGE</label><br/>
                        <textarea className="form-control" placeholder="Message" id="Message" required></textarea>
                    </div>
                    <br/>
                    <div>
                        <input id="btnSend" type="submit" className="btn btn-primary justify-content-end"
                               value="Send Message"/>
                    </div>
                </form>
            </div>
        )
    }
}