import React from "react";
import "./FeaturedTopics.css";

export default function FeaturedTopics() {
  return (
    <div className="featured_topics">
      <div className="featured_topics__topic">
        <h2>Featured topics by category</h2>
      </div>
      <div className="featured_topics__sub_topics">
        <div className="sub_topic__Development sub_topic">
          <h3>Development</h3>
          <div className="sub_topic__content">
            <a href="#">Python</a>
            <p>34,097,962 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Web Development</a>
            <p>10,730,844 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Machine Learning</a>
            <p>6,706,601 students</p>
          </div>
        </div>

        <div className="sub_topic__Business sub_topic">
          <h3>Business</h3>
          <div className="sub_topic__content">
            <a href="#">Financial Analysis</a>
            <p>1,153,713 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">SQL</a>
            <p>5,408,831 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">PMP</a>
            <p>1,601,378 students</p>
          </div>
        </div>

        <div className="sub_topic__IT and Software sub_topic">
          <h3>IT and Software</h3>
          <div className="sub_topic__content">
            <a href="#">AWS Certification</a>
            <p>5,352,893 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Ethical Hacking</a>
            <p>10,341,533 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Cyber Security</a>
            <p>3,753,909 students</p>
          </div>
        </div>

        <div className="sub_topic__Design sub_topic">
          <h3>Design</h3>
          <div className="sub_topic__content">
            <a href="#">Photoshop</a>
            <p>10,545,701 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Graphic Design</a>
            <p>3,207,891 students</p>
          </div>
          <div className="sub_topic__content">
            <a href="#">Drawing</a>
            <p>2,360,526 students</p>
          </div>
        </div>
      </div>
      <div className="white_button">
        <button>Explore more topics</button>
      </div>
    </div>
  );
}
