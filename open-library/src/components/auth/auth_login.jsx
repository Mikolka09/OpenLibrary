import React from "react";
import "./css/auth_register.css";
import "./css/auth_login.css";

export default class AuthLogin extends React.Component {
    render() {
        return (
            <section className="bg-image container-fluid p-0" id="cont_reg">
                <div className="mask d-flex align-items-center gradient-custom-3">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6" id="card_log">
                                <div className="card" id="card_reg">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-4">Sign In</h2>
                                        <form className="fw-bold">
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_email">Your
                                                    Email</label>
                                                <input type="email" id="reg_email" placeholder="ivanov@mail.com"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_pass">Password</label>
                                                <input type="password" id="reg_pass" placeholder="_A123456"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-check d-flex justify-content-start mb-3">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="log_remember"
                                                />
                                                <label className="form-check-label" htmlFor="log_remember">
                                                    Remember me</label>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button type="button" id="btn_register"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body">Login
                                                </button>
                                            </div>
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