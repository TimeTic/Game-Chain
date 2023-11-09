import React from "react";
import "./PC.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function PC() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <img src="https://www.pngitem.com/pimgs/m/114-1141447_pc-logo-png-pc-logo-white-png-transparent.png" />{" "}
        <Link to="/Check">
          <button class="btn">Buy Now</button>
        </Link>
      </div>
      <div className="shopping-cards">
        <section class="cards">
          <article class="card card--1">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Elden Ring</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $30
                </a>
              </span>
            </div>
          </article>

          <article class="card card--2">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category"> Games</span>
              <h3 class="card__title">Resident Evil</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  $30
                </a>
              </span>
            </div>
          </article>

          <article class="card card--3">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Detroit Become Human</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $12
                </a>
              </span>
            </div>
          </article>

          <article class="card card--4">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">God Of War Ragnorak</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span>
            </div>
          </article>
        </section>
        <br />
        <br />

        <section className="cards">
          <article class="card card--5">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Super Smash Bros</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span>
            </div>
          </article>

          <article class="card card--6">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">FIFA 23</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $50
                </a>
              </span>
            </div>
          </article>

          <article class="card card--7">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Mario Kart 8 Deluxe</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span>
            </div>
          </article>

          <article class="card card--8">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Mortal Kombat 11 Ultimate</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>
        </section>

        <br />
        <br />
        <section class="cards">
          <article class="card card--9">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Grand Theft Auto V</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $10
                </a>
              </span>
            </div>
          </article>

          <article class="card card--10">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Subnautica</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>

          <article class="card card--11">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty: Modern Warfare II </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $50
                </a>
              </span>
            </div>
          </article>

          <article class="card card--12">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty Black Ops III</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>
        </section>

        <br />
        <br />

        <section class="cards">
          <article class="card card--13">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Grand Theft Auto V</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $10
                </a>
              </span>
            </div>
          </article>

          <article class="card card--14">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Subnautica</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>

          <article class="card card--11">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty: Modern Warfare II </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $50
                </a>
              </span>
            </div>
          </article>

          <article class="card card--12">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty Black Ops III</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default PC;
