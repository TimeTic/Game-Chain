import "./Home.css";
import { Link } from "react-router-dom";
import Cards from "./Cards.js";
import React from "react";
import Navbar from "./Navbar.js";
import Slider from "react-slick";
import fifa1 from "./fifa1.jpeg";
// import navbar1 from "./navbar1";

// import  Button  from 'react-native';

function Home() {
  return (
    <div className="Homepage">
      <div className="navbar">
        <Navbar />

        {/* <navbar1 /> */}
      </div>
      {/* 
      <div className="Ads">
        <div></div>
        <br />
        <img src={fifa1} alt="Fifa" height="" width="90%" />
        
      </div> */}
      <div>
        <form>
          <input
            className="searchbar"
            type="text"
            name="search"
            placeholder="Search.."
          />
        </form>
      </div>
      <div class="container">
        <img src="https://gamingbolt.com/wp-content/uploads/2022/07/fifa-23-image.jpg" />
        <Link to="/Check">
          <button class="btn">Buy Now</button>
        </Link>
      </div>

      <Cards />
      {/* <div class="row">
        <div class="column">
          <div class="card"></div>
        </div>
        <div class="column">
          <div class="card"> </div>
        </div>
        <div class="column">
          <div class="card"></div>
        </div>
        <div class="column">
          <div class="card"></div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
