import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/ServicesPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path ="/about" element={<About />}/>
        <Route path ="/services" element={<Services />}/>
        <Route path ="/signin" element={<SignIn />}/>
        <Route path ="/signup" element={<SignUp />}/>
      </Routes>
    </>
  );
};

export default App;
