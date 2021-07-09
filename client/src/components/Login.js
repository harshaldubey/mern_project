import React from "react";
import login01 from "../Pics/login01.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="signup-inner " id="register-form">
                <div className="signin-image">
                  <figure>
                    <img src={login01} alt="Login pic" />
                  </figure>
                  <NavLink to="/signup" className="signin-image-link">
                    Create an Account
                  </NavLink>
                </div>
                <form className="register-form-login">
                  <h2 className="form-title">Signin</h2>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Your Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log In"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
