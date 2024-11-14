import React from "react";
import MiniForecast from "./MiniForecast";
import { useStateContext } from "../context";

function Hourly() {
  const { houlyTime, tempValues, descArray } = useStateContext();
  return (
    <div
      className="container p-3 border border-black"
      style={{ borderRadius: "18px" }}
    >
      <p>Today at</p>
      <div className="row d-flex justify-content-between">
        <MiniForecast
          time={houlyTime[0]}
          desc={descArray[0]}
          temp={tempValues[0]}
        />
        <MiniForecast
          time={houlyTime[1]}
          desc={descArray[1]}
          temp={tempValues[1]}
        />
        <MiniForecast
          time={houlyTime[2]}
          desc={descArray[2]}
          temp={tempValues[2]}
        />
        <MiniForecast
          time={houlyTime[3]}
          desc={descArray[3]}
          temp={tempValues[3]}
        />
        <MiniForecast
          time={houlyTime[4]}
          desc={descArray[4]}
          temp={tempValues[4]}
        />
        <MiniForecast
          time={houlyTime[5]}
          desc={descArray[5]}
          temp={tempValues[5]}
        />
        <MiniForecast
          time={houlyTime[6]}
          desc={descArray[6]}
          temp={tempValues[6]}
        />
        <MiniForecast
          time={houlyTime[7]}
          desc={descArray[7]}
          temp={tempValues[7]}
        />
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Hourly;
