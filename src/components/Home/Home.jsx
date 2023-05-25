import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import AnimateLetters from "../AnimateLetters.jsx/AnimateLetters";
import Image from "./Image/Image";
import Loader from "react-loaders";

const Home = () => {
  const [letterClasss, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "W", "a", "h", "a", "b"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    " ",
    "a",
    "n",
    "d",
    " ",
    "d",
    "e",
    "s",
    "i",
    "g",
    "n",
    "e",
    "r",
    ".",
  ];

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
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClasss}>H</span>
              <span className={`${letterClasss} _12`}>i,</span>
              <br />
              <span className={`${letterClasss} _13`}>I</span>
              &nbsp;
              <span className={`${letterClasss} _14`}>a</span>
              <span className={`${letterClasss} _15`}>m</span>
              <AnimateLetters
                letterClass={letterClasss}
                stringArray={nameArray}
                index={16}
              />
              <br />
              <AnimateLetters
                letterClass={letterClasss}
                stringArray={jobArray}
                index={21}
              />
            </h1>
            <h2>Frontend Developer / UI/UX Designer</h2>

            <Link to="/contact" className="flat-button">
              Contact Me
            </Link>
          </div>

          <Image />
        </div>
      )}
    </>
  );
};

export default Home;
