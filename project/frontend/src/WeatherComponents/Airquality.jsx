import React from "react";
import { useStateContext } from "../context";

function Airquality() {
  const { currweather } = useStateContext();
  return (
    <div>
      <div
        className="container border border-black mt-3"
        style={{
          borderRadius: "18px",
          paddingLeft: "1rem",
        }}
      >
        <div className="row mb-5 mt-3 " style={{ width: "18rem" }}>
          <p className="mb-4">Air Quality index</p>
          <i class="fa-solid fa-wind" style={{ width: "auto" }}></i>
          <span style={{ width: "auto" }}>3.90</span>
          <span style={{ width: "auto" }}>7.75</span>
          <span style={{ width: "auto" }}>33.6</span>
          <span style={{ width: "auto" }}>38.6</span>
        </div>
        <div className="row mb-3">
          <div className="col " style={{ width: "6rem" }}>
            <p style={{ width: "auto" }} className="">
              Humidity
            </p>
            <div style={{ width: "auto" }}>
              <i
                class="fa-solid fa-droplet fs-2"
                style={{ marginRight: "1rem" }}
              ></i>{" "}
              <span className="fs-2">{currweather.humidity}%</span>
            </div>
          </div>
          <div className="col" style={{ width: "5rem", marginLeft: "-2rem" }}>
            <p>pressure</p>
            <div>
              <i class="fa-solid fa-wind fs-2 me-1"></i>{" "}
              <span className="fs-2">{currweather.pressure}hpa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airquality;
