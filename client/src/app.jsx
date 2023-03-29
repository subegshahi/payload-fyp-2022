import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
  UploadedFlights,
} from "./imports/components";

export const App = () => {
  const queryClient = new QueryClient();

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
          <Route path="/contractorhome" element={<ContractorHome />} />
          <Route path="/uploadedflights" element={<UploadedFlights />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
