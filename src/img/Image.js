import React from "react";
import img from "./Ellipse 2.png";
import classes from "./Image.module.css";
export default function Image() {
  return (
    <div className={classes.image}>
      {/* <img src={img} alt="Ellipse" />{" "} */}
      <svg
        width="156"
        height="107"
        viewBox="0 0 156 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M149 -25.5818C181.5 12.8363 91.7285 107 36.5 107C-18.7285 107 -88 49.2285 -88 -6C-88 -61.2285 -43.2285 -106 12 -106C67.2285 -106 177 -84.1637 149 -25.5818Z"
          fill="#1D2CF3"
        />
      </svg>
    </div>
  );
}
