import React from "react";
import { useStateContext } from "../context";
import { convertTo12HourFormat } from "../utils/ConvertTime";
import sun from "../../Assets/images/sun.png";
import moon from "../../Assets/images/moon.png";
import Minicomp from "./miniComp";
function Sunrise() {
  const { currweather, visibility, sunTime } = useStateContext();
  const sunrise = convertTo12HourFormat(sunTime[0]);
  const sunset = convertTo12HourFormat(sunTime[1]);
  return (
    <div>
      <div
        className="container border border-black mt-3 pb-2"
        style={{ borderRadius: "18px" }}
      >
        <div className="row mb-4">
          <p className="mt-3">Sunrise & sunset</p>
          <div className="col">
            <div className="d-flex">
              <img
                src={sun}
                alt=""
                style={{
                  width: "20%",
                  height: "20%",
                  marginRight: "2rem",
                  paddingTop: "0.5rem",
                }}
              />{" "}
              <Minicomp sun="sunrise" time={sunrise} />
            </div>
          </div>
          <div className="col">
            <div className="d-flex ">
              <img
                src={moon}
                alt=""
                style={{
                  width: "20%",
                  height: "20%",
                  marginRight: "2rem",
                  paddingTop: "0.5rem",
                }}
              />
              <Minicomp sun="sunset" time={sunset} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>visibility</p>
            <div>
              <i class="fa-solid fa-eye fs-3 me-3"></i>{" "}
              <span className="fs-3">{visibility / 1000}km</span>
            </div>
          </div>
          <div className="col">
            <p>Feels like</p>
            <div>
              <i class="fa-solid fa-temperature-three-quarters fs-3 me-3"></i>{" "}
              <span className="fs-3">
                {currweather.feels_like}
                <sup>o</sup>C
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sunrise;
