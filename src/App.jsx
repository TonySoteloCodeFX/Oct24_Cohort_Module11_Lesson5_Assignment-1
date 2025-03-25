import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

export default App;
