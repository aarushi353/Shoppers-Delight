import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./store";
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      <App />
    </div>
  </StateProvider>,
  document.getElementById("root")
);

reportWebVitals();
