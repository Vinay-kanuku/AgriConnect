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

function ImgView({ desc }) {
  const [icon, setIcon] = useState();

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
    <>
      <img src={icon} alt="" style={{ width: "15%" }} />
    </>
  );
}

export default ImgView;
