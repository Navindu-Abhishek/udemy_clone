import React from "react";
import "./Courses.css";

import Slides from "../Slides/Slides";

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

// import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import slide1 from "../../assests/slide-1.jpg";
import slide2 from "../../assests/slide-2.jpg";
import slide3 from "../../assests/slide-3.jpg";
import slide4 from "../../assests/slide-4.jpg";
import slide5 from "../../assests/slide-5.jpg";

export default function Courses() {
  // const [swiperRef, setSwiperRef] = useState(null);
  // const appendNumber = useRef(100);
  // const prependNumber = useRef(1);

  return (
    <div className="courses">
      <div className="courses__topic">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="courses__categories">
        <p>Python</p>
        <p>Excel</p>
        <p>Web Development</p>
        <p>Javascript</p>
        <p>Data science</p>
        <p>AWS Certification</p>
        <p>Drawing</p>
      </div>
      <div className="courses__category">
        <div className="courses__category--top">
          <h1>Expand your career opportunities with Python</h1>
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will...
          </p>
          <div className="white_button">
            <button>Explore Python</button>
          </div>
        </div>
        <div className="courses__category--slides">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Slides
                img={slide1}
                topic="Learn Python: The Complete Python Programming Course"
                author="Avinash Jain, The Codex"
                rate="4.4"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(1817)"
                dPrice="$13.99"
                rPrice="$84.44"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide2}
                topic="Learning Python for Data Analysis and Visualization"
                author="Jose Portila"
                rate="4.3"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(17,313)"
                dPrice="$13.99"
                rPrice="$84.44"
                Bestseller="Bestseller"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide3}
                topic="Python for Beginners - Learn Programming from scratch"
                author="Edwin Diaz, Coding Faculty Solutions"
                rate="4.3"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(1,123)"
                dPrice="$13.99"
                rPrice="$84.44"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide4}
                topic="Learn Python: Python for Beginners"
                author="Abrar Hussain"
                rate="4.2"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </>
                }
                reviews="(2,693)"
                dPrice="$13.99"
                rPrice="$29.99"
                Bestseller="Bestseller"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide5}
                topic="Python From Scratch & Selenium WebDriver From Scratch 2022"
                author="Admas Kinfu"
                rate="4.5"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <FaRegStar />
                  </>
                }
                reviews="(1,404)"
                dPrice="$14.99"
                rPrice="$84.99"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide1}
                topic="Learn Python: The Complete Python Programming Course"
                author="Avinash Jain, The Codex"
                rate="4.4"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(1817)"
                dPrice="$13.99"
                rPrice="$84.44"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide2}
                topic="Learning Python for Data Analysis and Visualization"
                author="Jose Portila"
                rate="4.3"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(17,313)"
                dPrice="$13.99"
                rPrice="$84.44"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide3}
                topic="Python for Beginners - Learn Programming from scratch"
                author="Edwin Diaz, Coding Faculty Solutions"
                rate="4.3"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </>
                }
                reviews="(1,123)"
                dPrice="$13.99"
                rPrice="$84.44"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide4}
                topic="Learn Python: Python for Beginners"
                author="Abrar Hussain"
                rate="4.2"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </>
                }
                reviews="(2,693)"
                dPrice="$13.99"
                rPrice="$29.99"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slides
                img={slide5}
                topic="Python From Scratch & Selenium WebDriver From Scratch 2022"
                author="Admas Kinfu"
                rate="4.5"
                stars={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <FaRegStar />
                  </>
                }
                reviews="(1,404)"
                dPrice="$14.99"
                rPrice="$84.99"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
