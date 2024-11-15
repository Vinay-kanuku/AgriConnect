import React, { useState } from "react";
import ricebag from "../../Assets/rice_bag.jpg";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../context/logic";
import { useLocation } from "react-router-dom";
function Sellpage() {
  const { addOrder } = useGeneralContext();
  const [quantity, setQuantity] = useState(50);
  const location = useLocation();
  const { crop, price } = location.state || {};
  const handleSellStock = () => {
    const newOrder = {
      id: Date.now(),
      stockName: "rice",
      stockPrice: 50,
      stockQuantity: quantity,
      status: "Approved",
      image: ricebag,
    };
    console.log("Adding order:", newOrder);
    addOrder(newOrder);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-7">
          <img
            src={ricebag}
            alt=""
            style={{ width: "100%", borderRadius: "15px" }}
          />
        </div>
        <div className="col-5">
          <h3>{crop}</h3>
          <h4>₹ {price}/kg</h4>
          <p>
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions and
            cleaning instructions.
          </p>
          <div
            className="border border-black"
            style={{ height: "3.4rem", borderRadius: "15px", width: "15rem" }}
          >
            <div className="row mt-2">
              <div className="col-4 text-center" style={{ padding: "0" }}>
                <button
                  className="bg-white"
                  style={{ border: "none" }}
                  onClick={() => setQuantity(Math.max(25, quantity - 5))}
                >
                  <i class="fa-solid fa-minus fs-2 text-muted"></i>
                </button>
              </div>
              <div className="col-4 text-center">
                <span className="fs-4 ">{quantity}kg</span>
              </div>
              <div className="col-4 text-center ">
                <button
                  className="bg-white "
                  style={{ border: "none" }}
                  onClick={() => setQuantity(quantity + 5)}
                >
                  <i class="fa-solid fa-plus fs-3 text-muted"></i>
                </button>
              </div>
            </div>
          </div>{" "}
          <Link to="/market">
            <button
              className="mt-5 p-2 fs-3 bg-success text-white"
              style={{ borderRadius: "12px", width: "100%" }}
              onClick={handleSellStock}
            >
              Sell Stock
            </button>
          </Link>
          <h4 className="mt-4">Stock info</h4>
          <p className="mt-3">
            radiant renewal serum Price $27.00 I'm a product description. I'm a
            great place to add more details about your product such as sizing,
            material, care instructions and cleaning instructions. 1 add to cart
            buy now product info I'm a product detail. I'm a great place to add
            more information about your product such as sizing, material, care
            and cleaning instructions. This is also a great space to write what
            makes this product special and how your customers can benefit from
            this item.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sellpage;
