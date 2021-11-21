import React, {useEffect, useState} from "react";
import "./css/auth_register.css";
import {Link, useHistory} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";

export const AuthRegister = () => {
    const message = useMessage();
    const history = useHistory();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        username: '', email: '', password: '', password_conf: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const registerHandler = async () => {
        if (form.password === form.password_conf) {
            try {
                const data = await request('/api/auth/register', "POST", {...form});
                message(data.message);
                history.push("/login");
            } catch (e) {
            }
        } else {
            alert("Password Uncorrect!");
        }
    }

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
                                            <input onChange={changeHandler} type="text" id="reg_name"
                                                   name="username" placeholder="User Name"
                                                   className="form-control form-control-lg"
                                                   value={form.username}/>
                                        </div>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="reg_email">Your
                                                Email</label>
                                            <input onChange={changeHandler} type="email" id="reg_email"
                                                   name="email" placeholder="ivanov@mail.com"
                                                   className="form-control form-control-lg"
                                                   value={form.email}/>
                                        </div>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="reg_pass">Password</label>
                                            <input onChange={changeHandler} type="password" id="reg_pass"
                                                   name="password" placeholder="_A123456"
                                                   className="form-control form-control-lg"
                                                   value={form.password}/>
                                        </div>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="reg_repeat">Repeat your
                                                password</label>
                                            <input onChange={changeHandler} type="password"
                                                   name="password_conf" id="reg_repeat" placeholder="_A123456"
                                                   className="form-control form-control-lg"
                                                   value={form.password_conf}/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button onClick={registerHandler}
                                                    disabled={loading}
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