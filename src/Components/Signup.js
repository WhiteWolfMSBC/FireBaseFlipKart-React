import React, { useState } from "react";
import { auth, db } from "../Config/Config";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



export const Signup = (props) => {
  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // signup
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container">

      <Helmet>
        <title>Flipkart | Sign-Up</title>
      </Helmet>

      <p className="text-center text-primary fs-1 fw-semibold mt-5 mb-5">
        Login form
      </p>

        <div className="Product-card row">
              <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
                <img src={require("../Components/Images/53.png")} alt="" />
              </div>

              <div className="Product-card col-xl-8 col-lg-5 col-md-2 col-sm-1 col-xs-12 mt-5">

                <form autoComplete="off" className="form-group mt-5" onSubmit={signup}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      id="floatingInput"
                      placeholder="productname"
                      required
                    />
                    <label for="floatingInput">Enter Your Name</label>
                  </div>

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

                  <button type="submit" className="btn btn-success px-5 mt-4 mb-3">
                    Sign-Up
                  </button>

                  {error && (
                    <span className="error-msg fs-6 fw-light mb-4 mt-4">{error}</span>
                  )}
                  <br />
                  <span className="fw-semibold fs-6 text-end mt-3">
                    Existing User? Login
                    <Link to="login"> Here</Link>
                  </span>
                </form>

              </div>
            </div>
        </div>

  );
};


