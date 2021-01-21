import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>mhaji007@fiu.edu</p>
            </div>
            <div className="d-flex">
              <p>hadjikhanimehdi@gmail.com</p>
            </div>
            <div className="d-flex">
              <a href="tel:305-699-8661">+1(305)699-8661</a>
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

          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">

            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36}  />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Mehdi Hajikhani | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
