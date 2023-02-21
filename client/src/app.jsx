import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  LogIn,
  SignUp,
  Error,
  Admin,
  Booking,
  SearchResult,
  Checkout,
  ContractorHome,
} from "./pages/imports";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contractorhome" element={<ContractorHome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
