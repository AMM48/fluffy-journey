import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About.jsx";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Switch>
      <Route path="/fluffy-journey" element={<App />} />
      <Route path="/fluffy-journey/about" element={<About />} />
    </Switch>
  </HashRouter>
);
