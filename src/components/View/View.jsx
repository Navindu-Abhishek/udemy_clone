import React from "react";
import Slides from "../Slides/Slides";
import "./View.css";

// import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import slide1 from "../../assests/View_slides/view_slide1.jpg";
import slide2 from "../../assests/View_slides/view_slide2.jpg";
import slide3 from "../../assests/View_slides/view_slide3.jpg";
import slide4 from "../../assests/View_slides/view_slide4.jpg";
import slide5 from "../../assests/View_slides/view_slide5.jpg";

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function View() {
  return (
    <div className="view">
      <div className="view__topic">
        <h2>Students are viewing</h2>
      </div>
      <div className="view__slides">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Slides
              img={slide1}
              topic="Microsoft Excel - Excel from Beginner to Advanced"
              author="Kyle Pew, Office Newb"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(292,668)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide2}
              topic="The Complete 2022 Web Development Bootcamp"
              author="Dr. Angela Yu"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(178,484)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide3}
              topic="The Complete JavaScript Course 2022: From Zero to Expert!"
              author="Jonas Schmedtmann"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(132,328)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide4}
              topic="The Web Developer Bootcamp 2022"
              author="Colt Steele"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(230,349)"
              dPrice="$13.99"
              rPrice="$84.44"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide5}
              topic="Build Responsive Real-World Websites with HTML and CSS"
              author="Jonas Schmedtmann"
              rate="4.8"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              }
              reviews="(72,012)"
              dPrice="$13.99"
              rPrice="$84.99"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide1}
              topic="Microsoft Excel - Excel from Beginner to Advanced"
              author="Kyle Pew, Office Newb"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(292,668)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide2}
              topic="The Complete 2022 Web Development Bootcamp"
              author="Dr. Angela Yu"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(178,484)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide3}
              topic="The Complete JavaScript Course 2022: From Zero to Expert!"
              author="Jonas Schmedtmann"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(132,328)"
              dPrice="$13.99"
              rPrice="$84.44"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide4}
              topic="The Web Developer Bootcamp 2022"
              author="Colt Steele"
              rate="4.7"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </>
              }
              reviews="(230,349)"
              dPrice="$13.99"
              rPrice="$84.44"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slides
              img={slide5}
              topic="Build Responsive Real-World Websites with HTML and CSS"
              author="Jonas Schmedtmann"
              rate="4.8"
              stars={
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              }
              reviews="(72,012)"
              dPrice="$13.99"
              rPrice="$84.99"
              Bestseller="Bestseller"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
