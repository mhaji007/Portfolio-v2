import React from "react";
import Clue from "../images/Clue.PNG";
import PortfolioProject from "../images/PortfolioProject.png";
import Quizzy from "../images/Quizzy.PNG";
import ReactImdb from "../images/ReactImdb.PNG";
import ReduxCart from "../images/ReduxCart.PNG";
import ReusableCard from "../images/ReusableCard.PNG";

function AdditionalProjects() {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Additional Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={Clue}
              alt="Client engagement project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>
          {/* </div> */}
          {/* <div className="image-box-wrapper row justify-content-center"> */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={PortfolioProject}
              alt="A Reactjs Rendition of one of my portfolio projects"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
            {/* </div> */}
          </div>

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={Quizzy}
              alt="Quiz app project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={ReactImdb}
              alt="Imdb clone project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={ReduxCart}
              alt="Redux shopping cart project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>

          {/* <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={ReusableCard}
              alt="Reusable card in HTML and CSS project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AdditionalProjects;
