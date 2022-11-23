import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

export const Navbar = ({ user }) => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
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
          <div
            className="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img
                    src={require("../Components/Images/1.jpg")}
                    width="120px"
                    height="60px"
                    alt=""
                  />
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link" to="#">
                  <input
                    className="form-control ms-4 me-5 mt-2"
                    size="40"
                    type="search"
                    placeholder="Search for product , brands and more"
                    aria-label="Search"
                  />
                </Link>
              </li>

              <li className="nav-item ms-1 mt-2">
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 text-light fw-semibold"
                    to="/addproducts"
                  >
                    Add Product
                  </Link>
                </li>
              </li>

              <li className="nav-item dropdown ms-1 mt-2">
                <Link
                  className="nav-link fs-5 text-light fw-semibold"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/totalData">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-ad text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="M7 15v-4a2 2 0 0 1 4 0v4"></path>
                        <line x1="7" y1="13" x2="11" y2="13"></line>
                        <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5"></path>
                      </svg>
                      Total Data
                    </Link>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-login text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
                      </svg>
                      Login
                    </Link>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-apps text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="#0d6efd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                        <line x1="14" y1="7" x2="20" y2="7"></line>
                        <line x1="17" y1="4" x2="17" y2="10"></line>
                      </svg>
                      Sign-Up
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mt-2">
                <Link to="/" className="nav-link fs-5 text-light fw-semibold">
                  {user}
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  to="/cartproducts"
                  className="nav-link fs-5 text-light fw-semibold"
                >
                  <Icon icon={cart} />
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  className="nav-link fs-5 text-light fw-semibold"
                  to="/no-of-products"
                >
                  {totalQty}
                </Link>
              </li>

              <li className="nav-item ms-4 mt-1">
                <a className="nav-link" href="#">
                  <button
                    className="btn btn-light text-primary px-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
