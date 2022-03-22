import React from "react";
import "./CoursesRates.css";

import { BsPlayFill } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function CoursesRates() {
  return (
    <div className="courseRate">
      <div className="courseRate__play">
        <div className="icon">
          <BsPlayFill />
        </div>
        <div className="text">
          Learn in-demand skills with over 183,000 video courses
        </div>
      </div>
      <div className="courseRate__start">
        <div className="icon">
          <FaStar />
        </div>
        <div className="text">Choose courses taught by real-world experts</div>
      </div>
      <div className="courseRate__infinity">
        <div className="icon">
          <FaInfinity />
        </div>
        <div className="text">
          Learn at your own pace, with lifetime access on mobile and desktop
        </div>
      </div>
    </div>
  );
}
