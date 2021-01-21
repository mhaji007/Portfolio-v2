import React from "react";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <div className="logo container">
          <div className="line topLine"></div>
          <div className="content">
            <div className="vintage name">Mehdi Hajikhani</div>
            <div className="since">- Est. 2013 -</div>
            <div className="desc">Full Stack Web Developer</div>
            <div className="skillz ">MongoDB + Express + React + Node</div>
            <div className="links">
              <a target="_blank" href="">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a target="_blank" href="">
                <i className="fa fa-file-word-o"></i>
              </a>
              <a target="_blank" href="">
                <i className="fa fa-file-pdf-o"></i>
              </a>
              <a target="_blank" href="https://github.com/mhaji007">
                <i className="fa fa-github"></i>
              </a>
              <a target="_blank" href="https://github.com/mhaji007">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="line bottomLine"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
