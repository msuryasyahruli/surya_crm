import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./config/router/index.jsx";
import { Provider } from "react-redux";
import store from "./config/redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
