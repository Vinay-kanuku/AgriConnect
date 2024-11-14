import React from "react";
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
import { useEffect, useState } from "react";

function MiniForecast({ time, desc, temp }) {
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
      style={{ width: "12%", borderRadius: "18px" }}
      className="border border-black text-center mb-2 mt-3"
    >
      <p className="mt-1">{time}</p>
      <img src={icon} alt="" style={{ width: "40%" }} className="mb-3" />
      <p>
        {temp} <sup>o</sup>C
      </p>
    </div>
  );
}

export default MiniForecast;
