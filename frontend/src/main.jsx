import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Signin from "./landing_page/signin/Signin";

import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
