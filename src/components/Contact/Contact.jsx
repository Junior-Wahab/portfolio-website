import { useState, useEffect, useRef } from "react";
import "./contact.scss";
// components
import AnimateLetters from "../AnimateLetters/AnimateLetters";
// React-loaders
import Loader from "react-loaders";
// React icons(font-awesome)
import { FaEnvelope, FaPhone } from "react-icons/fa";
// emailjs
import emailjs from "@emailjs/browser";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [letterClasss, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x9kz78w",
        "template_gm823pa",
        form.current,
        "sNRaIitmrD5u4wnP6"
      )
      .then(
        () => {
          window.location.reload(false);
          notify(toast.success);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    show
      ? toast.success(`Message sent successfully`)
      : toast.error(`Message not sent`);
  };

  useEffect(() => {
    setInterval(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="ball-scale-multiple" />
      ) : (
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimateLetters
                letterClass={letterClasss}
                stringArray={[
                  "C",
                  "o",
                  "n",
                  "t",
                  "a",
                  "c",
                  "t",
                  "  ",
                  "M",
                  "e",
                ]}
                index={15}
              />
            </h1>

            <p>
              As a UI/UX designer and a frontend developer, my objective is to
              build a connection between a product and its users. I created this
              bridge with experiences and stories that people can relate to and
              engage with.
            </p>

            <div className="contact-info">
              <div>
                <a href="mailto: jnrmwahab@gmail.com ">
                  <FaEnvelope className="icon" />
                  Jnrmwahab@gmail.com
                </a>
              </div>

              <div>
                <a href="tel:0558708343">
                  <FaPhone className="icon" />
                  +233 558708343
                </a>
              </div>
            </div>

            <div className="contact-form">
              <form action="" ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Fullname"
                    name="user_name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    placeholder="Subect"
                    name="from_name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={notify}
                  className="solid-button"
                  value="send"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Contact;
