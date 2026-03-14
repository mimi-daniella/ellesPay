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
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import NotFound from "./pages/public/PageNotFound";
import ProfileSetUp from "./pages/public/ProfileSetUp";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/public/Profile";
import MakePayment from "./pages/public/MakePayment";
import Transactions from "./pages/public/Transactions";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Toaster position="top-center" richColors={true} reverseOrder={false} />
      <AnimatePresence mode="wait">
        <div>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/register"
              element={
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <SignUp />
                </motion.div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/verify-email"
              element={
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <EmailOTP />
                </motion.div>
              }
            ></Route>
            <Route
              path="/profile-setup"
              element={
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProfileSetUp />
                </motion.div>
              }
            />
            <Route
              path="/dashboard"
              element={
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Dashboard />
                </motion.div>
              }
            />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="dashboard/user-profile" element={<Profile />} />
            <Route path="dashboard/make-payment" element={<MakePayment />} />
            <Route path="dashboard/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
}
