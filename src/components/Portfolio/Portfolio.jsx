import { useEffect, useState } from "react";
import "./portfolio.scss";
import Loader from "react-loaders";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import PortfolioData from "../data/portfoliodata.json";

const Portfolio = () => {
  const [letterClasss, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState("false");
  const [toggleState, setToggleState] = useState(1);

  const [data, setData] = useState(PortfolioData);

  useEffect(() => {
    setInterval(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const toggleFilter = (index, catItem) => {
    setToggleState(index);

    const result = data.portfolio.filter((currentData) => {
      return currentData.category === catItem;
    });

    setData(result);
  };

  return (
    <>
      {loading ? (
        <Loader type="ball-scale-multiple" />
      ) : (
        <div className="container portfolio-page">
          <h1 className="page-title">
            <AnimateLetters
              letterClass={letterClasss}
              stringArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
              index={15}
            />
          </h1>

          <div className="categories">
            <button
              className={toggleState === 1 ? "category active" : "category"}
              onClick={() => toggleFilter(1)}
            >
              All
            </button>
            <button
              className={toggleState === 2 ? "category active" : "category"}
              onClick={() => toggleFilter(2, "UI/UX Design")}
            >
              UI/UX Design
            </button>
            <button
              className={toggleState === 3 ? "category active" : "category"}
              onClick={() => toggleFilter(3)}
            >
              Frontend
            </button>
          </div>

          <div className="images-container">
            {data.portfolio.map((port, index) => {
              return (
                <div key={index} className="image-box">
                  <img
                    src={port.cover}
                    alt="portfolio"
                    className="portfolio-image"
                  />

                  <div className="content">
                    <p className="portfolio-title">{port.title}</p>
                    <h4 className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit natus consequatur ipsum nesciunt ut accusantium
                    </h4>
                    <a className="btn" href={port.url} target="_black" role="">
                      Read more
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
