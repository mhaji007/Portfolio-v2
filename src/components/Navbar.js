import React from "react";
import logo from "../logo.PNG";
import Header from "./Header"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid ">
        <a className="navbar-brand " href="#">
          <img className=" my-3 py-2 brand" src={logo} alt="logo reading MH" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item active">
              <a className="nav-link  " aria-current="page" href="#">
                Home
              </a>
            </li> */}
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
