import React from "react";
import { FaBook } from "react-icons/fa6";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
            <FaBook /> &nbsp; todo
            </b>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active btn-nav-expo" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active btn-nav-expo" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link active btn-nav-expo" aria-current="page" to="/todo">
                  todo
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link active btn-nav " aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              
              <li className="nav-itemmx-2">
                <Link className="nav-link active btn-nav" aria-current="page" to="/signin">
                  SignIn
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active  btn-nav" aria-current="page" to="/logout">
                  LOg Out
                </Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;
