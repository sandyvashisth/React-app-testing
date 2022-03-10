import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NewPersonPage } from "./components/NewPersonPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newperson" element={<NewPersonPage />} />
      <Route path="*" element={<p>Oops, page not found!</p>} />
    </Routes>
  );
};
