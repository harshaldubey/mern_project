import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
// import { initialState, reducer } from "../src/reducer/UseReducer";

// context API

// export const Routing = () => {
//   return (

//   );
// };
export const userContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialState = null;
  const reducer = (state, action) => {
    if (action.type === "User") {
      return action.payload;
    }
    return state;
  };

  return (
    <div>
      <userContext.provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route>
            <Errorpage />
          </Route>
        </Switch>
        {/* <Routing /> */}
      </userContext.provider>
    </div>
  );
};

export default App;
