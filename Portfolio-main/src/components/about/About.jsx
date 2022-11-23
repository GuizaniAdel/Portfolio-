import React from "react";
import "./about.css";
import ME from "../../assets/vector.png";
import { FaAward, FaRegFolderOpen } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About " />
                    </div>
                </div>
                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <FaRegFolderOpen className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div> */}
           
                    <p>
                        Hi I'm Adel Guizani and I'm glad to share with you my portfolio.
                        Currently I'm a Web Developer with a major in
                        Financial and Actuarial Studies,looking for a final year
                        internship to complete my academic career.
                        I am Self- motivated, Creative, Adaptable,and also known
                        for having an eye for details, I am eager to be challenged
                        in order to grow and further improve my IT skills.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Discuss More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
