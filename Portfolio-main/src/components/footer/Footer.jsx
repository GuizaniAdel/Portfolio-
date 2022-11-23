import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Adel Guizani
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                {/* <li>
                    <a href="#services">Services</a>
                </li> */}
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.facebook.com/adel.guizani.927"
                    target={"_blank"}
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.linkedin.com/in/adel-guizani-24b021187/"
                    target={"_blank"}
                >
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/GuizaniAdel" target={"_blank"}>
                    <FaGithub />
                </a>
            </div>
            <div><small>@Author Adel Guizani</small></div>
            <div className="footer__copyright">
                <small>&copy; All rights reserved</small>
            </div>
           
        </footer>
    );
};

export default Footer;
