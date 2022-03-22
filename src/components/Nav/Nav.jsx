import React from "react";
import logo from "../../assests/logo-udemy.svg";
import "./Nav.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__bars">
        <FaBars />
      </div>
      <div className="nav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav__text">
        <p>Categories</p>
      </div>
      <div className="nav__search-bar">
        <AiOutlineSearch className="icon" />
        <input type="text" id="text" placeholder="Search for anything" />
      </div>
      <div className="nav__text">
        <p>Udemy Business</p>
      </div>
      <div className="nav__text">
        <p>Teach on Udemy</p>
      </div>
      <div className="nav__cart">
        <BsCart3 />
      </div>
      <div className="nav__buttons">
        <div className="nav__buttons white_button">
          <button>Log in</button>
        </div>
        <div className="nav__buttons-black black_button">
          <button>Sign up</button>
        </div>
        <div className="nav__buttons icon white_button">
          <button>
            <IoEarthSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
