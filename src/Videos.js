import React from "react";
import "./Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

function Videos() {
  return (
    <div className="videos">
      <Filter />
      <div className="row">
        <SingleVideo />
      </div>
    </div>
  );
}
export default Videos;
