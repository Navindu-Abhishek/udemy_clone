import React from "react";
import "./Slides.css";

export default function Slides({
  rate,
  img,
  topic,
  author,
  stars,
  reviews,
  dPrice,
  rPrice,
  Bestseller,
}) {
  return (
    <div className="slide">
      <img src={img} alt="" />
      <p className="slide__topic">{topic}</p>
      <span className="slide__author">{author}</span>
      <div className="slide__rate">
        <span className="slide__rate-rate">{rate}</span>
        <span className="slide__rate-stars">{stars}</span>
        <span className="slide__rate-reviews">{reviews}</span>
      </div>
      <div className="slide__price">
        <span className="discount_price">{dPrice}</span>
        <span className="real_price">{rPrice}</span>
      </div>
      <div className="slide__bestseller">
        <p>{Bestseller}</p>
      </div>
    </div>
  );
}
