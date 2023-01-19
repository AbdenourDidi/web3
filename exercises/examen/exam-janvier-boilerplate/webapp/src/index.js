import React from "react";
import ReactDOM from "react-dom";
import AppLoader from "./components/AppLoader/AppLoader";
import { BrowserRouter as Router } from "react-router-dom";

import "index.css";

ReactDOM.render(
  <Router>
    <AppLoader />
  </Router>,
  document.getElementById("root")
);
