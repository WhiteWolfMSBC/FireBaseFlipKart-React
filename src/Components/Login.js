import React, { useState } from "react";
import { auth } from "../Config/Config";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';




export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        props.history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container-xl mt-5">

      <Helmet>
        <title>Flipkart | Login</title>
      </Helmet>

      <p className="text-center text-primary fs-1 fw-semibold mt-5 mb-5">
        Login form
      </p>


      <div className="Product-card row">
        <div className="col-xl-4 col-lg-3 col-md-1 col-sm-12 col-xs-12">
          <img src={require("../Components/Images/52.png")} alt="" />
        </div>

        <div className="col-xl-8 col-lg-4 col-md-1 col-sm-12 col-xs-12 mt-5">
          <form autoComplete="off" className="form-group mb-5" onSubmit={login}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="floatingInput"
                placeholder="productname"
                required
              />
              <label for="floatingInput">Enter Your Email Address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="floatingInput"
                placeholder="productname"
                required
              />
              <label for="floatingInput">Enter Your Password</label>
            </div>

            <button type="submit" className="btn btn-success px-5 ">
              LOGIN
            </button>


          <p className="text-primary text-end">
            <a href="">Forgot?</a>
          </p>

          <p>By continuing, you agree to Flipkart's <span className="text-primary"><a href="https://www.flipkart.com/pages/terms">Terms of Use</a></span> and
            <span className="text-primary ms-1"><a href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a></span>.</p>


          <p className="text-secondary text-center mt-3">OR</p>


          <div className="Product-card mt-3 mb-3">
            <p className="text-primary fs-5 text-center fw-semibold mt-2 mb-5">Request Otp</p>
          </div>

          {error && <span className="error-msg fs-6 fw-light mb-4 mt-4">{error}</span>}

          <span className="mt-3 mb-4 text-center  text-primary fs-6 fw-light">
            New to Flipkart? Create an account
            <Link to="/signup" className="text-primary fw-bold"> Here</Link>
          </span>
          </form>

        </div>
      </div>
    </div>
  );
};


