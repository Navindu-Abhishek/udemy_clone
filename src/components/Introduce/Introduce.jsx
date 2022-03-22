import React from "react";
import "./Introduce.css";
import Template from "./Template/Template";

import introduce1 from "../../assests/Introduce/Introduce-1.jpg";
import introduce2 from "../../assests/Introduce/Introduce-2.jpg";
import introduce3 from "../../assests/Introduce/Introduce-3.jpg";

import company1 from "../../assests/Introduce/Companies/companies-1.svg";
import company2 from "../../assests/Introduce/Companies/companies-2.svg";
import company3 from "../../assests/Introduce/Companies/companies-3.svg";
import company4 from "../../assests/Introduce/Companies/companies-4.svg";
import company5 from "../../assests/Introduce/Companies/companies-5.svg";
import company6 from "../../assests/Introduce/Companies/companies-6.svg";

export default function Introduce() {
  return (
    <div className="introduce">
      <div className="introduce__template template1">
        <Template
          img={introduce1}
          heading="Become an instructor"
          text="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
          button_text="Start teaching today"
        />
      </div>
      <div className="introduce__companies">
        <h1>Trusted by companies of all sizes</h1>
        <div className="companies__logos">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
        </div>
      </div>

      <div className="introduce__template template2">
        <Template
          // style={{ flexDirection: "row-reverse" }}
          img={introduce2}
          header_img={company4}
          text="Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more."
          button_text="Get Udemy Business"
        />
      </div>

      <div className="introduce__template template3">
        <Template
          img={introduce3}
          heading="Transform your life through education"
          text="Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
          button_text="Find Out Now"
        />
      </div>
    </div>
  );
}
