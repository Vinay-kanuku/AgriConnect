import React from "react";
import { useStateContext } from "../context";
import { getNextFiveDays } from "../utils/getNextFiveDays";
import ImgView from "./imgView";

function Forecast() {
  const { descValues } = useStateContext();
  const { avgTemp } = useStateContext();
  const upcomingDays = getNextFiveDays();
  return (
    <div
      className="container border border-black py-3 ps-4"
      style={{ borderRadius: "18px" }}
    >
      <p>5 Days Forecast</p>
      <div className="row mb-3">
        <ImgView desc={descValues[0]} />
        <span style={{ width: "auto" }}>{avgTemp[0]}</span>

        <span style={{ width: "auto" }}>{upcomingDays[0]}</span>
      </div>
      <div className="row mb-3">
        <ImgView desc={descValues[1]} />
        <span style={{ width: "auto" }}>{avgTemp[1]}</span>
        <span style={{ width: "auto" }}>{upcomingDays[1]}</span>
      </div>
      <div className="row mb-3">
        <ImgView desc={descValues[2]} />
        <span style={{ width: "auto" }}>{avgTemp[2]}</span>
        <span style={{ width: "auto" }}>{upcomingDays[2]}</span>
      </div>
      <div className="row mb-3">
        <ImgView desc={descValues[3]} />
        <span style={{ width: "auto" }}>{avgTemp[3]}</span>
        <span style={{ width: "auto" }}>{upcomingDays[3]}</span>
      </div>
      <div className="row ">
        <ImgView desc={descValues[4]} />
        <span style={{ width: "auto" }}>{avgTemp[4]}</span>
        <span style={{ width: "auto" }}>{upcomingDays[4]}</span>
      </div>
    </div>
  );
}

export default Forecast;
