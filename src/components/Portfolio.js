import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="container">
      <h1 className="text-uppercase text-center pt-5">Portfolio</h1>
      <section id="portfolio" className="section-wrapper my-projects">
        <div className="content ">
          {/* <Fade up>
          <h2 className="title">
            <span>
              <i class="fas fa-laptop-code"></i>{" "}
            </span>
            <strong>Projects</strong>
          </h2>
        </Fade> */}
          <Fade left>
            <div className="project">
              <a href="https://aei.ai/" target="_blank" rel="noreferrer">
                <div className="image-container">
                  <div className="image-wrap">
                    <div className="image"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </a>
              <div className="text-container">
                <h3>aEi.ai</h3>
                <p>
                  HTML, JavaScript, Bootstrap and JQuery
                  {/* Implemented the website UI using HTML, JavaScript, and JQuery.<br/>
              Currently migrating the website UI to React.js/Next.js */}
                </p>

                <a href="https://aei.ai/" target="_blank" rel="noreferrer">
                  <button>Live Demo</button>
                </a>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="project right">
              <div className="text-container">
                <h3>eShop</h3>
                <p>
                  React js, MongoDB, Express js, Node js
                  {/* Utilized MERN stack along with Ant Design and Bootstrap <br/> */}
                  {/* this Ecommerce app that is equipped with advanced product search and filtering system, payment integration, admin dashboard and more! */}
                </p>
                <a
                  href="https://client-eshop.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <a
                href="https://client-eshop.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image-container">
                  <div className="image-wrap">
                    <div className="image two"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </a>
            </div>
          </Fade>
          <Fade left>
            <div className="project">
              <a
                href="https://wizardly-shannon-f554da.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image-container">
                  <div className="image-wrap">
                    <div className="image three"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </a>
              <div className="text-container">
                <h3>Crypto Console</h3>
                <p>React js, Bootstrap and Crypto Compare API</p>
                <a
                  href="https://wizardly-shannon-f554da.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="project right">
              <div className="text-container">
                <h3>Repo Finder</h3>
                <p>React js, Next js, Bulma CSS and Github API </p>
                <a
                  href="https://repo-finder.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <a
                href="https://repo-finder.vercel.app/ "
                target="_blank"
                rel="noreferrer"
              >
                <div className="image-container">
                  <div className="image-wrap">
                    <div className="image four"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </a>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
