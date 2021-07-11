import React, { useState } from "react";
import registr09 from "../Pics/registr09.png";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="signup-inner " id="register-form">
                <form className="register-form">
                  <h2 className="form-title">Signup</h2>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="work">
                      <i class="zmdi zmdi-collection-case-play material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="Your Profession"
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
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Your Password"
                      required="true"
                    />
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
                </form>
                <div className="signup-image">
                  <figure>
                    <img src={registr09} alt="registration pic" />
                  </figure>
                  <NavLink to="/login" className="signup-image-link">
                    I've already registered
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
