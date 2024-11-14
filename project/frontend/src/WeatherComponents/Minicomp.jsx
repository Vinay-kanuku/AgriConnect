import React from "react";

function Minicomp({ sun, time }) {
  return (
    <div>
      <span style={{ marigin: "auto" }}>{sun}</span>
      <br />
      <span style={{ marigin: "auto" }} className="fs-3">
        {time}
      </span>
    </div>
  );
}

export default Minicomp;
