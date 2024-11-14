import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div class="container p-2">
        <div className="ms-5" style={{ width: "25%" }}>
          <a class="navbar-brand" href="#">
            AgriConnect
          </a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active " aria-current="page" to="/market">
                Market
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active " aria-current="page" to="/weather">
                Weather
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active " aria-current="page" to="/chat">
                chat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
