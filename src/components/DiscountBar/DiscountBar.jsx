import React, { useState } from "react";
import "./DiscountBar.css";
import { BiX } from "react-icons/bi";

export default function DiscountBar() {
  // document.querySelector('body__content--icon')
  // document.querySelector("body__content--icon").style.color = "yellow";

  const [isBodyDisplay, setIsBodyDisplay] = useState(true);

  return (
    <div className={isBodyDisplay ? "body__show" : "body__hidden"}>
      <div className="body__content">
        <p className="body__content--first">
          <span className="body__content--first_span">
            Get courses from $13.99 for a limited time|
          </span>
          <span>A special offer for new students</span>
        </p>
        <p className="body__content--last">Ends in 4h 31m 1s.</p>
        <div
          className="icon__bix"
          onClick={() => setIsBodyDisplay(!isBodyDisplay)}
        >
          <BiX />
        </div>
      </div>
    </div>
  );
}
