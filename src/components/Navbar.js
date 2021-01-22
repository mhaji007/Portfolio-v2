import React from "react";
import logo from "../logo.PNG";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid ">
        <Link
          className="navbar-brand "
          smooth={true}
          to="home"
          className="nav-link "
        >
          <img
            className=" my-3 py-2 brand"
            src={logo}
            alt="home logo reading MH"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item active">
              <Link smooth={true} to="" className="nav-link  " aria-current="page" href="#">
                Home
              </Link>
            </li> */}
            <li className="nav-item ">
              <Link
                smooth={true}
                to="portfolio"
                offset={-90}
                className="nav-link "
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                smooth={true}
                to="about"
                offset={-190}
                className="nav-link "
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                smooth={true}
                to="experience"
                offset={62}
                className="nav-link"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                smooth={true}
                to="additional projects"
                className="nav-link "
              >
                More Projects
              </Link>
            </li>
            <li className="nav-item ">
              <Link smooth={true} to="contacts" className="nav-link ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
