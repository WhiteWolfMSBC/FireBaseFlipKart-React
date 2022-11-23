import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 ms-5 mt-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="navbar-link nav-link text-center ms-5 fs-6 fw-semibold text-capitalize"
                  to="/offers"
                >
                  <img
                    src={require("../Images/11.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />
                  <br />
                  Top Offers
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/mobile"
                >
                  <img
                    src={require("../Images/3.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Mobile
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/elctronics"
                >
                  <img
                    src={require("../Images/2.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Electronics
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/furniture"
                >
                  <img
                    src={require("../Images/4.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Furniture
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/fashion"
                >
                  <img
                    src={require("../Images/6.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Fashion
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/grocery"
                >
                  <img
                    src={require("../Images/5.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Grocery
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/appliances"
                >
                  <img
                    src={require("../Images/10.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Appliances
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/travel"
                >
                  <img
                    src={require("../Images/9.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Travel
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/toys"
                >
                  <img
                    src={require("../Images/8.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  Beauty
                </Link>
              </li>

              <li class="nav-item ms-3">
                <Link
                  class="navbar-link nav-link text-center fs-6 fw-semibold text-capitalize"
                  to="/motorcycle"
                >
                  <img
                    src={require("../Images/7.png")}
                    className="rounded img-fluid mb-2"
                    width="64px"
                    height="64px"
                    alt=""
                  />{" "}
                  <br />
                  2-Wheelers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
     <hr className="text-secondary mt-2 mb-2" />
    </div>
  );
}

export default Header;
