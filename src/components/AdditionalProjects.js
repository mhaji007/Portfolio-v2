import React from "react";
import Clue from "../images/Clue.PNG";
import PortfolioProject from "../images/PortfolioProject.png";
import Quizzy from "../images/Quizzy.PNG";
import ReactImdb from "../images/ReactImdb.PNG";
import ReduxCart from "../images/ReduxCart.PNG";
import ReusableCard from "../images/ReusableCard.PNG";
import "react-popupbox/dist/react-popupbox.css";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";

function AdditionalProjects() {
  // Clue popup
  const openPopupboxClue = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Clue}
          alt="Client engagement project"
        />
        <div className="portfolio-content-popupbox">
          <p>
            A web app built using the MERN stack that allows business owner
            receive feedback via sending bulk emails
          </p>
          <b>Github:</b>{" "}
          <a
            onClick={() => window.open("https://github.com/mhaji007/Clue")}
            className="hyper-link"
          >
            https://github.com/mhaji007/Clue
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigClue = {
    // titleBar: {
    //   enable: true,
    //   text: "Protfolio revamp project",
    // },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // PortfolioProject popup
  const openPopupPortfolioProject = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={PortfolioProject}
          alt="My portfolio project"
        />
        <div className="portfolio-content-popupbox">
          <p>
            My early portfolio website redesigned and rebuilt using React.js and
            Next.js
          </p>
          <b>Github:</b>{" "}
          <a
            onClick={() => window.open("https://github.com/mhaji007/Portfolio")}
            className="hyper-link"
          >
            https://github.com/mhaji007/Portfolio
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolioProject = {
    // titleBar: {
    //   enable: true,
    //   text: "Client engagement project",

    // },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Quizy popup
  const openPopupQuizzy = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Quizzy}
          alt="My portfolio project"
        />
        <div className="portfolio-content-popupbox">
          <p>A simple quizz app made using HTML, CSS, and JavaScript</p>
          <b>Github:</b>{" "}
          <a
            onClick={() => window.open("https://github.com/mhaji007/Quizzy")}
            className="hyper-link"
          >
            https://github.com/mhaji007/Quizzy
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigQuizzy = {
    // titleBar: {
    //   enable: true,
    //   text: "Client engagement project",

    // },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // ReactImdb popup
  const openPopupReactImdb = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ReactImdb}
          alt="My portfolio project"
        />
        <div className="portfolio-content-popupbox">
          <p>A simple IMDB clone made in Reactjs</p>
          <b>Github:</b>{" "}
          <a
            onClick={() =>
              window.open(" https://github.com/mhaji007/ReactIMDB")
            }
            className="hyper-link"
          >
            https://github.com/mhaji007/ReactIMDB
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigReactImdb = {
    // titleBar: {
    //   enable: true,
    //   text: "Client engagement project",

    // },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // ReduxCart popup
  const openPopupReduxCart = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ReduxCart}
          alt="My portfolio project"
        />
        <div className="portfolio-content-popupbox">
          <p>A simple Shopping Cart in Reactjs and Redux</p>
          <b>Github:</b>{" "}
          <a
            onClick={() =>
              window.open(" https://github.com/mhaji007/ReduxCart")
            }
            className="hyper-link"
          >
            https://github.com/mhaji007/ReduxCart
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigReduxCart = {
    // titleBar: {
    //   enable: true,
    //   text: "Client engagement project",

    // },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Additional Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxClue}>
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
          <div
            className="portfolio-image-box "
            onClick={openPopupPortfolioProject}
          >
            <img
              className="portfolio-image"
              src={PortfolioProject}
              alt="A Reactjs Rendition of one of my portfolio projects"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
            {/* </div> */}
          </div>

          <div className="portfolio-image-box" onClick={openPopupQuizzy}>
            <img
              className="portfolio-image"
              src={Quizzy}
              alt="Quiz app project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>

          <div className="portfolio-image-box" onClick={openPopupReactImdb}>
            <img
              className="portfolio-image"
              src={ReactImdb}
              alt="Imdb clone project"
            />
            <div className="overflow"></div>
            <i className="fa fa-search-plus portfolio-icon"></i>
          </div>

          <div className="portfolio-image-box" onClick={openPopupReduxCart}>
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
      <PopupboxContainer {...popupboxConfigClue} />
      <PopupboxContainer {...popupboxConfigPortfolioProject} />
      <PopupboxContainer {...popupboxConfigQuizzy} />
      <PopupboxContainer {...popupboxConfigReactImdb} />
      <PopupboxContainer {...popupboxConfigReduxCart} />
    </div>
  );
}

export default AdditionalProjects;
