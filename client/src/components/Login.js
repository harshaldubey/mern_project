import React, { useState } from "react";
import login01 from "../Pics/login01.jpg";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");
      history.push("/");
    }
  };

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
                <form method="POST" className="register-form-login">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      onClick={loginUser}
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
