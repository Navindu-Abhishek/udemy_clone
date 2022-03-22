import React from "react";
import headerImage from "../../assests/header_image.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__content">
          <div className="header__content--text">
            <div className="header__content--text_wrap">
              <h1>Find the right fit</h1>
              <p>
                The topics you want, taught by real-world experts. Courses as
                low as $12.99 until March 18.
              </p>
            </div>
          </div>
          <img src={headerImage} alt="heder_image" className="heder_image" />
        </div>
      </div>
    </div>
  );
}
