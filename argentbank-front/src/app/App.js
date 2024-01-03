import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from '../pages/signIn';
import Home from "../pages/home";
import User from "../pages/user"

import Navbar from "../components/_nav";
import Footer from "../components/_footer";

import './App.css';
import '../assets/styles.css';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
