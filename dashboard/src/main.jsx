//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Signup from ".frontend/landing_page/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
