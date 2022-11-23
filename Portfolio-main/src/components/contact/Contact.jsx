import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8du8k7g",
                "template_lsjs2pl",
                form.current,
                "wD0eMu7i8JkpwuNv5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>adelgnbnso@gmail.com</h5>
                        <a
                            href="mailto:adelgnbnso@gmail.com"
                            target={"_blank"}
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Adel Guizani </h5>
                        <a href="#" target={"_blank"}>
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+216 55 72 15 02</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+21655721502"
                            target={"_blank"}
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
      
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        id="test"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
