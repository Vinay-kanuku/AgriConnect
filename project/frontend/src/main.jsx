import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import DashBoard from "./WeatherComponents/Dashboard";
import { StateContextProvider } from "./context/index.jsx";
import { GeneralContextProvider } from "./context/logic.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./chatbot/App";
import Market from "./marketPlace/Market";
import SellStock from "./marketPlace/sellStock";
import Sellpage from "./marketPlace/Sellpage";

createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <BrowserRouter>
      <Navbar />
      <GeneralContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/weather" element={<DashBoard />} />
          <Route path="/chat" element={<App />} />

          <Route path="/market" element={<Market />} />
          <Route path="/sellStock" element={<SellStock />} />
          <Route path="/transaction" element={<Sellpage />} />
        </Routes>
      </GeneralContextProvider>
      {/* <Footer /> */}
    </BrowserRouter>
  </StateContextProvider>
);
