import React from "react";
import "./css/auth_register.css";
import {Link} from "react-router-dom";

export default class AuthRegister extends React.Component {
    render() {
        return (
            <section className="bg-image container-fluid p-0" id="cont_reg">
                <div className="mask d-flex align-items-center gradient-custom-3">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6" id="card_pad">
                                <div className="card" id="card_reg">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-4">Create an account</h2>
                                        <form className="fw-bold">
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_name">Your
                                                    Name</label>
                                                <input  type="text" id="reg_name" placeholder="User Name"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_email">Your
                                                    Email</label>
                                                <input  type="email" id="reg_email" placeholder="ivanov@mail.com"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_pass">Password</label>
                                                <input type="password" id="reg_pass" placeholder="_A123456"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_repeat">Repeat your
                                                    password</label>
                                                <input type="password" id="reg_repeat" placeholder="_A123456"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button type="button" id="btn_register"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body">Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-3 mb-0">Have already an
                                                account? <Link
                                                    to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}