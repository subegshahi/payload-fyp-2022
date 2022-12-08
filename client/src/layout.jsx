import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, LogIn, SignUp, Error } from "./pages/export";

export const Layout = () => {
  return (
    <main className="text-gray-800">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
};
