import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>MovieHub</h1>

      <div className="navbar_links">
        <a href="">Trending</a>
        <a href="">Top Rated</a>
        <a href="">Upcoming</a>
      </div>
    </div>
  );
};

export default Navbar;
