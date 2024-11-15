import React from "react";
import ricebag from "../../Assets/rice_bag.jpg";
function Order({ orderId, stockName, quantity, amount, status, image }) {
  return (
    <div
      className="container border border-black p-4 mt-3"
      style={{ borderRadius: "15px" }}
    >
      <div className="row">
        <div className="col-6">
          <img
            src={ricebag}
            alt=""
            style={{ width: "90%", borderRadius: "15px" }}
          />
        </div>
        <div className="col-4">
          <div className="row mt-5 pt-2">
            <div className="col-6">
              <h5 className="mb-4">Order id </h5>
              <h5 className="mb-4">Stock Name </h5>
              <h5 className="mb-4">Stock size </h5>
              <h5 className="mb-4">Amount </h5>
              <h5 className="mb-4">Status</h5>
            </div>
            <div className="col-2">
              <h5 className="mb-4">:</h5>
              <h5 className="mb-4">:</h5>
              <h5 className="mb-4">:</h5>
              <h5 className="mb-4">:</h5>
              <h5 className="mb-4">:</h5>
            </div>
            <div className="col-4">
              <h5 className="mb-4">{orderId}</h5>
              <h5 className="mb-4">{stockName}</h5>
              <h5 className="mb-4">{quantity}kg</h5>
              <h5 className="mb-4">{amount}</h5>
              <h5 className="mb-4">{status}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
