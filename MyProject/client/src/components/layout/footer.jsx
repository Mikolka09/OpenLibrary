import React from "react";
import Tel from "./img/telegram.png";
import Face from "./img/facebook.png";
import Twit from "./img/twitter.png";
import Lin from "./img/linkedin.png";
import Vk from "./img/vkontakte.png";
import "./css/footer.css";

export const Footer = () => {

    return (
        <footer className="page-footer font-small bg-success bg-gradient bg-opacity-75 pt-2">
            <div className="container">
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="https://vk.com" className="btn-floating mx-1">
                            <img src={Vk} alt="Vk" width="40px"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com" className="btn-floating mx-1">
                            <img src={Face} alt="Face" width="40px"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com" className="btn-floating mx-1">
                            <img src={Twit} alt="Twit" width="40px"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://linkedin.com" className="btn-floating mx-1">
                            <img src={Lin} alt="Lin" width="40px"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://web.telegram.org" className="btn-floating mx-1">
                            <img src={Tel} alt="Tel" width="40px"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-0 fw-bolder">© 2021 MyWebSite
                <a href="https://nikolaev.itstep.org/"> ITStep Academy </a>
            </div>
        </footer>
    )
}