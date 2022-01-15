// import react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

// create app component

const App = function () {
  return <div>Hello World</div>;
};

// render using react dom

ReactDOM.render(<App />, document.getElementById("root"));
