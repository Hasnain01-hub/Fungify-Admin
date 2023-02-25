import React, { useEffect } from "react";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Home from "./components/home/Home";

import Login from "./components/login/Login";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
