import { useState, useEffect } from "react";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import "./about.scss";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPenNib,
  FaReact,
} from "react-icons/fa";
import Loader from "react-loaders";

const About = () => {
  const [letterClasss, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setInterval(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

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
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimateLetters
                letterClass={letterClasss}
                stringArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
                index={15}
              />
            </h1>

            <p>
              I have gained lot of work experiece working as a front-end
              developer and UI/UX designer. I enjoy coming up with creative user
              interfaces, solving design issues, and making interactive web
              applications. I create web app and app user interfaces. HTML, CSS,
              JavaScript, and React are all languages I am quite familiar with.
              I have more than two years of frontend development experience as a
              UX/UI designer. I have a lot of drive and am versatile and
              innovative. I thrive at creating innovative web applications for
              users. I am skilled in combining the client's ideas with a great
              design solution.
            </p>
          </div>

          <div className="stage-cube-container">
            <div className="cube-spinner">
              <div className="face1">
                <FaReact />
              </div>

              <div className="face2">
                <FaHtml5 />
              </div>

              <div className="face3">
                <FaCss3 />
              </div>

              <div className="face4">
                <FaJsSquare />
              </div>

              <div className="face5">
                <FaGithub />
              </div>

              <div className="face6">
                <FaPenNib />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
