import React from "react";
import ReactDOM from "react-dom";

import "./styles/root.css";
import "./styles/index.css";

import App from "./App.jsx";
import AppProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
  ,
  document.getElementById("root")
);