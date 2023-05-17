import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/fluffy-journey" element={<App />} />
      <Route path="/fluffy-journey/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
