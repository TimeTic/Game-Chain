import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLoggedin() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        {" "}
        Game-Chain
      </a>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/shop"> Shop</a>
        </li>

        {/* <li>
          <Link to="/Login"> Login</Link>
        </li> */}
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart"> Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
