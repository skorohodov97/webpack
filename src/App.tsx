import React from "react";
import "./styles.css";
import logo from "./images/logo.png"
import logo2 from "./images/logo.svg"

const App = (): JSX.Element => {
  return (
    <>
      <h1>React/TS webpack project</h1>
      {process.env.NODE_ENV} <br />
      {process.env.BASE_URL} <br />
      {process.env.API_KEY} <br />
      <img src={logo} alt='' />
      <img src={logo2} alt='' />
      <img src="/images/logo.png" alt="Logo" />
    </>
  );
};

export { App };
