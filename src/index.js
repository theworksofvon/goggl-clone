import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <Router>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </Router>,

  document.getElementById("root")
);
