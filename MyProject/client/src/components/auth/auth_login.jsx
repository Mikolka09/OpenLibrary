import React, {useContext, useEffect, useState} from "react";
import "./css/auth_register.css";
import "./css/auth_login.css";
import {Link, Redirect, useHistory} from "react-router-dom";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/authContext";

export const AuthLogin = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const history = useHistory();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', "POST", {...form});
            auth.logIn(data.token, data.userId, data.email);
            history.push("/");
        } catch (e) {
        }
    }

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
                                            <input onChange={changeHandler} type="email" id="log_email"
                                                   placeholder="ivanov@mail.com"
                                                   name="email" className="form-control form-control-lg"
                                                   value={form.email}/>
                                        </div>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="log_pass">Password</label>
                                            <input onChange={changeHandler} type="password" id="log_pass"
                                                   placeholder="_A123456"
                                                   name="password" className="form-control form-control-lg"
                                                   value={form.password}/>
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
                                            <button onClick={loginHandler} type="button" id="btn_login"
                                                    disabled={loading}
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