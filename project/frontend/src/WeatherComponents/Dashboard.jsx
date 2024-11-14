import React from "react";
import CurrWeather from "./CurrWeather";
import Airquality from "./Airquality";
import Forecast from "./forecast";
import Sunrise from "./Sunrise";
import Hourly from "./Hourly";
import { useState } from "react";
import { useStateContext } from "../context";
function DashBoard() {
  const [input, setInput] = useState();
  const { currweather, setPlace, desc, visibility, wind, avgTemp, place } =
    useStateContext();
  const submitCity = () => {
    setPlace(input);
    setInput("");
  };
  return (
    <div>
      <div className="container mt-2">
        <div className="row mb-4 d-flex px-3">
          <h2 style={{ width: "auto" }}>Weather</h2>
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                submitCity();
              }
            }}
            placeholder="search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: "50%",
              marginLeft: "14rem",
              borderRadius: "18px",
              border: "1.5px solid black",
            }}
          />
        </div>
        <div className="row mb-5">
          <div className="col-3">
            <CurrWeather />
          </div>
          <div
            className="col-9 border border-black d-flex justify-content-between"
            style={{ borderRadius: "18px" }}
          >
            <div className="col-6" style={{ width: "49.8%" }}>
              {" "}
              <Airquality />
            </div>
            <div className="col-6" style={{ width: "49.8%" }}>
              {" "}
              <Sunrise />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Forecast />
          </div>
          <div className="col-9">
            <Hourly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
