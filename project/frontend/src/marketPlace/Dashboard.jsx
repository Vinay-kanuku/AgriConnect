import React from "react";
import Order from "./Order";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../context/logic";
import Cookies from "js-cookie";
function Dashboard() {
  const token = Cookies.get("token");
  if (token) {
    console.log("Generated Token " + token);
  } else {
    console.log("no token found");
  }
  const { orders } = useGeneralContext();
  return (
    <div className="container p-5">
      <div className="row">
        <img
          src="../../Assets/market.png"
          alt=""
          style={{ width: "55%", margin: "auto" }}
        />
      </div>

      <h4 className="my-5">
        I'm a product description. I'm a great place to add more details about
        your product such as sizing, material, care instructions and cleaning
        instructions.
      </h4>
      <div className="text-center">
        <Link to="/sellStock">
          <button
            className="my-3 p-2 fs-3 bg-success text-white"
            style={{ borderRadius: "12px", width: "40%" }}
          >
            Sell Stock
          </button>
        </Link>
      </div>
      <hr className="mt-5" />
      <h1 className="my-4">Order History</h1>
      {orders.length === 0 ? (
        <div className="div d-flex justify-content-around">
          {" "}
          <p className="fs-3">No orders yet.</p>
        </div>
      ) : (
        orders.map((order) => (
          <Order
            orderId={order.id}
            stockName={order.stockName}
            quantity={order.stockQuantity}
            amount={order.stockPrice * order.stockQuantity}
            status={order.status}
            // image={order.image}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;
