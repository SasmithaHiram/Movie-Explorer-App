import React from "react";
import "./Navbar.css";
import DarkMode from "../dark-mode/DarkMode";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>MovieHub</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="">Trending</a>
        <a href="">Top Rated</a>
        <a href="">Upcoming</a>
      </div>
    </div>
  );
};

export default Navbar;
