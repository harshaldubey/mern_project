import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div id="not_found">
        <div className="not_found">
          <h1>404</h1>
        </div>
        <h2>We are sorry, page not found</h2>
        <p className="mb-5">
          The page you are looking formight have been removed had it's name
          changed or is temporarily unavailable.
        </p>
        <NavLink className="error-button" to="/">
          Back to Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default Errorpage;
