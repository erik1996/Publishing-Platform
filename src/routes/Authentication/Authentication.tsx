import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import { signIn, signUp } from "../../services/userAuthentication";
import { messages } from "../../constant/message";
import "./Authentication.scss";

function Authentication(props: any) {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  const checkSignIn = async (e: any) => {
    const response = await signIn(e, props);
    if (Array.isArray(response.body.data) && response.body.data.length > 0) {
      return setError(response.body.data[0].message);
    }
    setError(messages.service.signIn);
  };

  const checkSignUp = async (e: any) => {
    const password = e.target.password.value;
    const rePassword = e.target.re_pass.value;

    if (password.length > 0 && password !== rePassword) {
      return setError(messages.service.signUp);
    }

    const response = await signUp(e, props);

    if (response.header.status === "success" && response.body.data._token) {
      localStorage.setItem("_token", response.body.data._token);
      return props.history.push("/editor");
    }

    if (Array.isArray(response.body.data) && response.body.data.length > 0) {
      return setError(response.body.data[0].message);
    }

    setError(messages.service.failed);
  };

  return (
    <div className="login-form ">
      <Header/>
      {!login ? (
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src="/signin-image.jpg" alt="sing up" />
                </figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Sign up</h2>
                <form onSubmit={e => checkSignIn(e)} className="login-form">
                  <div className="form-group">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <i className="zmdi zmdi-lock"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="error-container">
                    {error.length ? <span>{error}</span> : ""}
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                  <span
                    onClick={() => setLogin(true)}
                    className="signup-image-link"
                  >
                    Create an account
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  onSubmit={e => checkSignUp(e)}
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <i className="zmdi zmdi-email"></i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <i className="zmdi zmdi-lock"></i>
                    <input
                      type="password"
                      name="password"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <i className="zmdi zmdi-lock-outline"></i>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>
                  <div className="error-container">
                    {error.length ? <span>{error}</span> : ""}
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                  <span
                    onClick={() => setLogin(false)}
                    className="signup-image-link-small"
                  >
                    I am already member
                  </span>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src="/signup-image.jpg" alt="sing up" />
                </figure>
                <span
                  onClick={() => setLogin(false)}
                  className="signup-image-link"
                >
                  I am already member
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default withRouter(Authentication);
