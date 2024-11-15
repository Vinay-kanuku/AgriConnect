import React from "react";
import ricebag from "../../Assets/rice_bag.jpg";
import { Link } from "react-router-dom";

function CropComponent({ cropName, cropPrice }) {
  return (
    <Link
      to="/transaction"
      style={{ textDecoration: "none", color: "black" }}
      state={{ crop: cropName, price: cropPrice }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "auto",
          padding: "0",
          borderRadius: "15px",
        }}
        className="mt-5"
      >
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <img
            src={ricebag}
            alt=""
            style={{ width: "95%", borderRadius: "15px " }}
          />
        </div>
        <p className="mt-3 fs-4 ms-4">{cropName}</p>
        <p className="fs-5 ms-4">₹ {cropPrice}/kg</p>
      </div>
    </Link>
  );
}

export default CropComponent;
