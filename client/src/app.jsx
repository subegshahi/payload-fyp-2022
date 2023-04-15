import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Home,
  LogIn,
  SignUp,
  Error,
  Booking,
  SearchResult,
  Checkout,
  CheckoutSuccess,
  ContractorHome,
  UploadedFlights,
  Admin,
  AdminProfile,
  AdminSales,
} from "./imports/components";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          <Route path="/contractorhome" element={<ContractorHome />} />
          <Route path="/uploadedflights" element={<UploadedFlights />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/adminsales" element={<AdminSales />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
