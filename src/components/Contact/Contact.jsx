import { useState, useEffect } from "react";
import "./contact.scss";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [letterClasss, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);

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
                  "m",
                  "e",
                ]}
                index={15}
              />
            </h1>

            <p>
              As a UI/UX designer and a frontend developer, my objective is to
              build a connection between a product and its users. I created this
              bridge with experiences and stories that people can relate to and
              engage with. I'm looking for designer jobs right now.
            </p>

            <div className="contact-info">
              <div>
                <Link href="jnr: jnrmwahab@gmail.com " target="_blank">
                  <FaEnvelope className="icon" />
                  Jnrmwahab@gmail.com
                </Link>
              </div>

              <div>
                <Link>
                  <FaPhone className="icon" />
                  +233 558708343
                </Link>
              </div>

              <div>
                <Link
                  to="https://www.linkedin.com/in/wahab-junior"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icon" />
                  LinkedIn
                </Link>
              </div>
            </div>

            <div className="contact-form">
              <form action=""></form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
