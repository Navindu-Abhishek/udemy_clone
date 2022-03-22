import React from "react";

import "./Footer.css";

import company1 from "../../assests/Introduce/Companies/companies-1.svg";
import company2 from "../../assests/Introduce/Companies/companies-2.svg";
import company3 from "../../assests/Introduce/Companies/companies-3.svg";
import company5 from "../../assests/Introduce/Companies/companies-5.svg";
import company6 from "../../assests/Introduce/Companies/companies-6.svg";

import { IoEarthSharp } from "react-icons/io5";
import logo from "../../assests/logo-udemy.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__header">
        <h3>
          Top companies choose <span>Udemy Business</span> to build in-demand
          career skills.
        </h3>
        <div className="footer__header--logos">
          <img src={company1} alt="" srcset="" />
          <img src={company2} alt="" srcset="" />
          <img src={company3} alt="" srcset="" />
          <img src={company5} alt="" srcset="" />
          <img src={company6} alt="" srcset="" />
        </div>
      </div>
      <hr />
      <div className="footer__middle">
        <div className="block block1">
          <p>Udemy Business</p>
          <p>Teach on Udemy</p>
          <p>Get the app</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div className="block block2">
          <p>Careers</p>
          <p>Blog</p>
          <p>Help and Support</p>
          <p>Affiliate</p>
          <p>Investors</p>
        </div>
        <div className="block block3">
          <p>Terms</p>
          <p>Privacy policy</p>
          <p>Cookie settings</p>
          <p>Sitemap</p>
          <p>Accessibility statement</p>
        </div>
        <div className="black_button">
          <button>
            <IoEarthSharp />
            <span> English</span>
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <img src={logo} alt="" />
        <p>© 2022 Udemy, Inc.</p>
      </div>
    </div>
  );
}
