import React from "react";
import CropComponent from "./CropComponent";
import Sellpage from "./Sellpage";
import { useGeneralContext } from "../context/logic";
function SellStock() {
  const { cropArray, cropPrices } = useGeneralContext();
  return (
    <div className="container">
      <div className="row">
        <img
          src="../../Assets/market.png"
          alt=""
          style={{ width: "55%", margin: "auto" }}
        />
      </div>
      <div className="row">
        <div className="col-4">
          {" "}
          <CropComponent cropName={cropArray[0]} cropPrice={cropPrices[0]} />
        </div>
        <div className="col-4">
          {" "}
          <CropComponent cropName={cropArray[1]} cropPrice={cropPrices[1]} />
        </div>
        <div className="col-4">
          {" "}
          <CropComponent cropName={cropArray[2]} cropPrice={cropPrices[2]} />
        </div>
        <div className="col-4">
          {" "}
          <CropComponent cropName={cropArray[3]} cropPrice={cropPrices[3]} />
        </div>
        <div className="col-4">
          {" "}
          <CropComponent cropName={cropArray[4]} cropPrice={cropPrices[4]} />
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default SellStock;
