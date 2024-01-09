import React from "react";
import PrivateRoute from "../components/auth/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "../pages/signIn";
import Home from "../pages/home";
import User from "../pages/user";

import Footer from "../components/_footer";

import "../assets/styles.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}
          />
          <Route path="/sign-in" element={<SignIn />}
          />
          <Route path="/user/*" element={<PrivateRoute Component={User} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
