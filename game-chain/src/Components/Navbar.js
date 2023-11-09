import "./Navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, useLogin } from "../Context/LoginProvider";
import Search from "./Search.js";
// import myFunction from "./script";
export default function Navbar() {
  return (
    <div className="topnav">
      <nav className="nav">
        <button className="site-title-button">
          {" "}
          <a href="/" className="site-title">
            Game-Chain
          </a>
        </button>

        <ul>
          <Link to="/">
            <button>
              <li>Home</li>
            </button>
          </Link>
          <li>
            <button>
              {" "}
              <a href="/shop"> Shop</a>{" "}
            </button>
          </li>
          <Link to="/Login">
            <li>
              <button>Login</button>
            </li>
          </Link>
          <li>
            <button>
              {" "}
              <Link to="/Profile">Profile</Link>
            </button>
          </li>
          <li>
            <button>
              {" "}
              <Link to="/cart"> Cart</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
