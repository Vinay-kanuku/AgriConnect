import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import DashBoard from "./WeatherComponents/Dashboard";
import { StateContextProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <Navbar />
    {/* <Home /> */}
    <DashBoard />
  </StateContextProvider>
);
