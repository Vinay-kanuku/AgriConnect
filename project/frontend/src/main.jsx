import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import DashBoard from "./WeatherComponents/Dashboard";
import { StateContextProvider } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Market from "./Market";

createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/weather" element={<DashBoard />} />
        <Route path="/chat" element={<App />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </StateContextProvider>
);
