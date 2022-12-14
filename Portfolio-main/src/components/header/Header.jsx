import React from "react";
import "./header.css";
import CTA from "./CTA";
import AdelCircle from "../../assets/AdelCircle.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm </h5>
                <h1>Adel Guizani</h1>
                <h5 className="text-light">Web Developer with a major in Financial and Actuarial Studies.</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={AdelCircle} alt="Me" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
