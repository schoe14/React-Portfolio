import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", clear: "both", textAlign: "center", fontSize: "18px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
