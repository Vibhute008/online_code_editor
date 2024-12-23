import React, { useState, useEffect } from "react"; // Import hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Editior from "./pages/Editior";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
   

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
          />
          <Route
            path="/services"
            element={isLoggedIn ? <Services /> : <Navigate to="/login" />}
          />
          <Route
            path="/editor/:projectID"
            element={isLoggedIn ? <Editior /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={isLoggedIn ? <NoPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
