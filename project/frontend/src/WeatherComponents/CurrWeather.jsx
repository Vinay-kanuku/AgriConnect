import React from "react";
import { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { useDate } from "../utils/useDate";
import sun from "../../Assets/images/sun.png";
import moon from "../../Assets/images/moon.png";
import thunderstorm from "../../Assets/images/thunderstorm.png";
import brokenClouds from "../../Assets/images/brokenClouds.png";
import scatteredClouds from "../../Assets/images/scatteredClouds.png";
import snow from "../../Assets/images/snow.png";
import mist from "../../Assets/images/mist.png";
import rain from "../../Assets/images/rain.png";
import showerRain from "../../Assets/images/showerRain.png";
import fewClouds from "../../Assets/images/fewClouds.png";

function CurrWeather() {
  const { currweather, desc, place } = useStateContext();
  const { time } = useDate();

  const [icon, setIcon] = useState(sun);

  useEffect(() => {
    if (desc) {
      if (desc.toLowerCase().includes("clear sky")) {
        setIcon(sun);
      } else if (desc.toLowerCase().includes("few clouds")) {
        setIcon(fewClouds);
      } else if (desc.toLowerCase().includes("scattered clouds")) {
        setIcon(scatteredClouds);
      } else if (desc.toLowerCase().includes("broken clouds")) {
        setIcon(brokenClouds);
      } else if (desc.toLowerCase().includes("shower rain")) {
        setIcon(showerRain);
      } else if (desc.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (desc.toLowerCase().includes("mist")) {
        setIcon(mist);
      } else if (desc.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (desc.toLowerCase().includes("thunderstorm")) {
        setIcon(thunderstorm);
      }
    }
  }, [desc]);

  return (
    <div
      className="container_fluid border border-black p-2"
      style={{ borderRadius: "18px" }}
    >
      <div className="row">
        <div className="col">
          <p className="fs-7" style={{ margin: "0" }}>
            Now
          </p>
          <p className="fs-3" style={{ margin: "3px" }}>
            {currweather.temp}
            <sup>o</sup>C
          </p>
          <p className="fs-6">{desc}</p>
        </div>
        <div className="col pt-3">
          <img src={icon} alt="weather icon" />
        </div>
      </div>
      <hr />
      <div className="text-start px-2">
        <div>
          <div className="d-flex">
            <i
              class="fa-solid fa-calendar-days"
              style={{ width: "auto", marginRight: "1rem" }}
            ></i>

            <p style={{ width: "auto" }} className="">
              {new Date().toDateString()}
            </p>
          </div>
          <div className="d-flex">
            <i
              class="fa-solid fa-clock"
              style={{ width: "auto", marginRight: "1rem" }}
            ></i>
            <p className="">{time}</p>
          </div>
        </div>
        <div className="d-flex">
          <i
            class="fa-solid fa-location-dot"
            style={{ width: "auto", marginRight: "1rem" }}
          ></i>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrWeather;
