import React from "react";
import "./css/auth_register.css";
import "./css/auth_login.css";
import {Link} from "react-router-dom";

export default class AuthLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                email: "",
                password: "",
                roles: []
            }
        }
    }

    async loginHandler() {
        console.log(this.state.user);
            fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.state.user)
                }
            )
                .then(response => {
                    if (response.status !== 200) {
                        console.log(response.status);
                        console.log(response.statusText);
                    }
                    window.location.href = "/";
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                })
                .catch(err => {
                    console.log(err);
                })
    }


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
                                                <label className="form-label" htmlFor="log_email">Your
                                                    Email</label>
                                                <input onChange={this.onChange.bind(this)} type="email" id="log_email" placeholder="ivanov@mail.com"
                                                      name="email" className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="log_pass">Password</label>
                                                <input onChange={this.onChange.bind(this)} type="password" id="log_pass" placeholder="_A123456"
                                                      name="password" className="form-control form-control-lg"/>
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
                                                <button onClick={this.loginHandler.bind(this)} type="button" id="btn_login"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body">Login
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-3 mb-0">Have no account? <Link
                                                    to="/register" className="fw-bold text-body"><u>Register here</u></Link>
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

    onChange(el) {
        const user = this.state.user;
        user[el.target.name] = el.target.value;
        this.setState({user: user});
    }

}