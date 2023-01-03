import homePic from "../assets/homepng.png";
import { Link } from "react-router-dom"
import React from "react";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={homePic} alt="home pic" />
      </Link>
    </div>
  );
}

export default Header;
