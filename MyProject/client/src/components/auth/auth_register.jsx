import React from "react";
import "./css/auth_register.css";
import {Link} from "react-router-dom";

export default class AuthRegister extends React.Component {

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

    async registerHandler() {
        console.log(this.state.user);
        if (this.state.user.password === this.state.user.password_conf) {
            fetch(
                "http://localhost:5000/api/auth/register",
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
        } else {
            alert("Password verification error!");
        }
    }

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
                                        <form className="fw-bold" id="form_reg">
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_name">Your
                                                    Name</label>
                                                <input onChange={this.onChange.bind(this)} type="text" id="reg_name"
                                                       name="username" placeholder="User Name"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_email">Your
                                                    Email</label>
                                                <input onChange={this.onChange.bind(this)} type="email" id="reg_email"
                                                       name="email" placeholder="ivanov@mail.com"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_pass">Password</label>
                                                <input onChange={this.onChange.bind(this)} type="password" id="reg_pass"
                                                       name="password" placeholder="_A123456"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="reg_repeat">Repeat your
                                                    password</label>
                                                <input onChange={this.onChange.bind(this)} type="password"
                                                       name="password_conf" id="reg_repeat" placeholder="_A123456"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button onClick={this.registerHandler.bind(this)}
                                                        type="button" id="btn_register"
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

    onChange(el) {
        const user = this.state.user;
        user[el.target.name] = el.target.value;
        this.setState({user: user});
    }
}