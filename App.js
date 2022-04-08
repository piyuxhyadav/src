
import React from 'react';
import './App.css';
import { Home, Navbar, SurveyComponent } from './components';
import { BrowserRouter as Router, Routes, Route , BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import Login from "./auth/Login";

import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}> 
      </Route>
      <Route path="/quiz" element={<SurveyComponent/>}> 
      </Route>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
