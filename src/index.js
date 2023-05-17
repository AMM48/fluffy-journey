import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About.jsx";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/fluffy-journey" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
