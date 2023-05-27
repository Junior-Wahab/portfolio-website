import { useState, useEffect } from "react";
import AnimateLetters from "../AnimateLetters/AnimateLetters";

const ErrorPage = () => {
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
      <div className="container error-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClasss}
              stringArray={["4", "0", "4", " ", "p", "a", "g", "e"]}
              index={15}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
