import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                https://qv0rd4.csb.app/# <i></i> Our team consists of a small
                number of young developers who have been working on the
                Game-Chain™ website for a number of months now. At the moment,
                these programmers are high school students that are thinking
                about majoring in computer science and are at the stage in their
                lives where they are learning how to code throughout the course
                of their careers. As a team, we respect one another and work
                together as a team to build amazing projects together. Our
                current location is at DAE, where our instructors help out with
                any bugs or problems that we may encounter while we are coding.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    C
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Java
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Android
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=V-_O7nl0Ii0&ab_channel=JohnFrye">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#"> Game-Chain™</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                {/* <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
