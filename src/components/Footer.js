import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+7(960)555-5555</a>
            </div>
            <div className="d-flex">
              <p>Jibberish@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="">Home</a>
                <br />
                <a href="">About</a>
                <br />
                <a href="">Experience</a>
              </div>
              <div className="col">
                <a href="">Projects</a>
                <br />
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
