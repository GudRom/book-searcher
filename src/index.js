import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
