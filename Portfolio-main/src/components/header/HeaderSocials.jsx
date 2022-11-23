import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/adel-guizani-24b021187/"
                target={"_blank"}
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/GuizaniAdel" target={"_blank"}>
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/adel.guizani.927" target={"_blank"}>
                <BsFacebook />
            </a>
        </div>
    );
};

export default HeaderSocials;
