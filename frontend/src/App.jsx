import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/public/Home";
import SignUp from "./pages/public/SignUp";
import Login from "./pages/public/Login";
import Dashboard from "./pages/public/Dashboard";
import EmailOTP from "./pages/public/EmailOTP";
import Services from "./pages/public/Services";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import TermsOfService from "./pages/public/TermsOfService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import NotFound from "./pages/public/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailOTP />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
