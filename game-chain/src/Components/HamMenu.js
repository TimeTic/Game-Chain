import "./HamMenu.css";
import { Link } from "react-router-dom";
export default function HamMenu() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="#">
            <div class="subnav">
              <button class="subnavbtn">
                Video Games <i class="fa fa-caret-down"></i>
              </button>
              <div class="subnav-content">
                <Link to="/Xbox">Xbox</Link>
                <br />
                <Link to="/Playstation">Playstation</Link>
                <br />
                <Link to="/Nintendo">Nintendo</Link>
                <br />
                <Link to="/PC">PC gaming</Link>
              </div>
            </div>
          </a>
          <a href="#">
            <li>Consoles</li>
          </a>
          <a href="#">
            <li>Gaming Accessories</li>
          </a>
          <a href="#">
            <li>Toys/Collectables</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
