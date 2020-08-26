import React from "react";
import spinner from "../img/spinner-alt.gif";

function Spinner() {
  return (
    <>
      <img className="spinner" src={spinner} alt="Loading..." />
    </>
  );
}

export default Spinner;
