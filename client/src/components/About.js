import React, { useEffect, useState } from "react";
import harshal from "../Pics/harshal.jpg";
import aboutpic from "../Pics/aboutpic.jpg";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <div className="container emp-profile signup-content signup-form">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={userData.name === "Harshal Dubey" ? harshal : aboutpic}
                  alt="Harshal"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>{userData.name}</h4>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-2 mb-5">
                  Rankings: <span> 1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-button button"
                name="btnAssMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h6>WORK LINK</h6>
                <a href="https://www.github.com/harshaldubey" target="_thapa">
                  Github-Harshal
                </a>
                <br />
                <a
                  href="https://www.github.com/harshaldubey/mern_project.git"
                  target="_thapa"
                >
                  WebsiteGitHubMERN
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/harshal-dubey-66218319a/"
                  target="_thapa"
                >
                  LinkedIn-HD
                </a>
                <br />
                <a href="https://www.youtube.com" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_thapa">
                  Instagram
                </a>
                <br />
                <a
                  href="https://github.com/harshaldubey/expenseTracker.git"
                  target="_thapa"
                >
                  Web Developer
                </a>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27"
                  target="_thapa"
                >
                  Figma
                </a>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27"
                  target="_thapa"
                >
                  Software Engineer
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">74564565465454</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-2 ">
                    <div className="col-md-6">
                      <label className=" profession">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col profession">{userData.work}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">Expert</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">230</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">Expert</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>Availibility</label>
                    </div>
                    <div className="col-md-6">
                      <p className="links_col">6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
