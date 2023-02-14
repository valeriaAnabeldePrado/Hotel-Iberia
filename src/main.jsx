import React from "react";
import ReactDOM from "react-dom/client";
import './config/i18next-config'
import App from "./App";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
