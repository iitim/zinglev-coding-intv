import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import UserAccount from "./components/UserAccount";
import Calculation from "./components/Calculation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<UserAccount />} />
      <Route path="/calculation" element={<Calculation />} />
    </Routes>
  </BrowserRouter>
);
