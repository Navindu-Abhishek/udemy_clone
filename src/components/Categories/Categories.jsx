import React from "react";
import "./Categories.css";

import photo1 from "../../assests/Categories/categories_1.jpg";
import photo2 from "../../assests/Categories/categories_2.jpg";
import photo3 from "../../assests/Categories/categories_3.jpg";
import photo4 from "../../assests/Categories/categories_4.jpg";
import photo5 from "../../assests/Categories/categories_5.jpg";
import photo6 from "../../assests/Categories/categories_6.jpg";
import photo7 from "../../assests/Categories/categories_7.jpg";
import photo8 from "../../assests/Categories/categories_8.jpg";

export default function categories() {
  return (
    <div className="categories">
      <div className="categories__topic">
        <h2>Top categories</h2>
      </div>
      <div className="categories__photos">
        <div className="categories__photos--top">
          <div className="categories__photo">
            <img src={photo1} alt="" />
            <p>Design</p>
          </div>
          <div className="categories__photo">
            <img src={photo2} alt="" />
            <p>Development</p>
          </div>
          <div className="categories__photo">
            <img src={photo3} alt="" />
            <p>Marketing</p>
          </div>
          <div className="categories__photo">
            <img src={photo4} alt="" />
            <p>IT and Software</p>
          </div>
        </div>
        <div className="categories__photos--bottom">
          <div className="categories__photo">
            <img src={photo5} alt="" />
            <p>Personal Development</p>
          </div>
          <div className="categories__photo">
            <img src={photo6} alt="" />
            <p>Business</p>
          </div>
          <div className="categories__photo">
            <img src={photo7} alt="" />
            <p>Photography</p>
          </div>
          <div className="categories__photo">
            <img src={photo8} alt="" />
            <p>Music</p>
          </div>
        </div>
      </div>
    </div>
  );
}
