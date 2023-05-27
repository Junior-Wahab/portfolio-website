import { useState, useEffect } from "react";
import "./contact.scss";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import Loader from "react-loaders";

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

            <p></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
