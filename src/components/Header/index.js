import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <h1>LOGO</h1>
      </div>
      <div className="header_nav">
        <ul className="header_nav_list">
          <li className="header_nav_list_item">
            <a href="#">Home</a>
          </li>
          <li className="header_nav_list_item">
            <a href="#">About</a>
          </li>
          <li className="header_nav_list_item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
