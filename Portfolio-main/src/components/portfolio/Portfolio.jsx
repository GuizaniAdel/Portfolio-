import React from "react";
import "./portfolio.css";
import kh from "../../assets/kh.png";
import portfolio from "../../assets/portfolio1.png";
import SECURINETS from "../../assets/SECURINETS.png";
import ESREPO from "../../assets/ESREPO.png";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            img: kh,
            title: "Khawarzmi",
            desc: "Website that manages students and teachers by marking their attendance, payment and income streams.",
            github: "#",
            demo: "http://37.187.38.163/",
        },

        {
            id: 3,
            img: ESREPO,
            title: "E-Learning Website",
            desc: "web application that helps students to collect all courses in a simple and easy way.",
            github: "https://github.com/GuizaniAdel/ESREPO-Angular.git",
            demo: "https://es-repo.herokuapp.com/home",
        },
        {
            id: 4,
            img: SECURINETS,
            title: "SecuriNets",
            desc: "SecuriNets Official Webside Build With MERN Stack",
            github: "https://github.com/GuizaniAdel/SecurityWebSite.git",
            demo: "https://adelguizanisecurinets.herokuapp.com/",
        },
     
    
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, img, title, desc, github, demo }) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={img} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
