import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import EldenRing from "./EldenRing.jpeg";
import GodOfWar from "./GodOfWar.webp";
import fifa1 from "./fifa1.jpeg";
import resident from "./resident.webp";
import mario from "./mario.webp";
import detroit from "./detroit.webp";
import SuperSmash from "./SuperSmash.webp";

export default function Cards() {
  return (
    {},
    (
      <div className="shopping-cards">
        <div className="Accessories">
          <h1> GAMES</h1>
        </div>
        <br />
        <br />
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
              <h3 class="card__title">
                Mario + Rabbids Sparks of Hope - Nintendo
              </h3>
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

          <article class="card card--14">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Spider-Man Miles Morales - PS5</h3>
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

          <article class="card card--15">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Minecraft</h3>
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

          <article class="card card--16">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Mortal Kombat X</h3>
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
        <br />
        <br />
        <br />
        <div className="Accessories">
          <h1> Gaming Accessories </h1>
        </div>
        <br />
        <br />
        <br />
        <section class="cards">
          <article class="card card--a1">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                Sony PULSE 3D Wireless Gaming Headset for PlayStation 5
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $80
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a2">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                PowerA Twin Charging Station for PlayStation 5 DualSense
                Wireless Controllers
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $20
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a3">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                Sony DualSense Wireless Controller for PlayStation 5
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $60
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a4">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                Logitech G29 Driving Force Racing Wheel for PlayStation 4, 5,
                and PC
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $180
                </a>
              </span>
            </div>
          </article>
        </section>
        <br />
        <br />
        <br />
        <section class="cards">
          <article class="card card--a5">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                Logitech G PRO X Gaming Headset - League of Legends
              </h3>
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

          <article class="card card--a6">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                SteelSeries Arctis 5 PUBG Edition Wired Gaming Headset
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $80
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a7">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                HyperX Cloud Alpha Pro Wired Gaming Headset
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $90
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a8">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                Razer Kaira Wireless Gaming Headset for Xbox Series X/S{" "}
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $180
                </a>
              </span>
            </div>
          </article>
        </section>
        <br />
        <br />
        <br />
        <section class="cards">
          <article class="card card--a9">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                {" "}
                Seiren X Cardioid Condenser Streaming Microphone
              </h3>
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

          <article class="card card--a10">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                HyperX QuadCast - USB Condenser Gaming Microphone
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $80
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a11">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title"> HyperX QuadCast S</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $90
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a12">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">Razer Seiren Mini</h3>
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
        </section>
        <br />
        <br />
        <br />

        <section class="cards">
          <article class="card card--a13">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">Logitech G203 </h3>
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

          <article class="card card--a14">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">Razer Viper Ultimate Lightweight</h3>
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

          <article class="card card--a15">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">
                {" "}
                Glorious Gaming - Model O Wireless Gaming Mouse{" "}
              </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $60
                </a>
              </span>
            </div>
          </article>

          <article class="card card--a16">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Accessories </span>
              <h3 class="card__title">Logitech G502 HERO</h3>
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
        </section>
      </div>
    )
  );
}

// function Cards() {

//   const games = [
//     {
//       title: "EldenRing - PlayStation 5",
//       image: EldenRing,
//       price: "$30",
//       description:
//         "A New Fantasy World - Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Unravel the mysteries of the Elden Ring's power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures."
//     },

//     {
//       title: "God Of War Ragnorak PlayStation - 5",
//       image: GodOfWar,
//       price: "$40",
//       description:
//         "Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they’ve been trying their utmost to undo the end times. But despite their best efforts, Fimbulwinter presses onward. Witness the changing dynamic of the father-son relationship as they fight for survival; Atreus thirsts for knowledge to help him understand the prophecy of “Loki”, as Kratos struggles to break free of his past and be the father his son needs. See for yourself how fate will force a choice upon them: between their own safety or the safety of the realms. All the while, hostile Asgardian forces assemble…"
//     },

//     {
//       title: "Fifa 23 - PlayStation 5",
//       image: fifa1,
//       price: "$50",
//       description:
//         "EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup™, the addition of women’s club teams, cross-play features, and more. EA SPORTS™ FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game, with advances in HyperMotion2 Technology driven by twice as much real-world motion capture helping to create more true football animation than ever before in every match. Play the biggest tournaments in football with both the men’s and women’s FIFA World Cup™ coming to FIFA 23 during the season, play as women’s club teams – powered by dedicated HyperMotion2 animation – for the first time ever, plus enjoy cross-play features that make it easier to play against friends. Enjoy a new way to play and build your dream squad in FIFA Ultimate Team™ with FUT Moments and a revamped Chemistry system, or live out your football dreams in Career Mode as you define your personality as a player and manage as some of football’s most famous names. In VOLTA FOOTBALL and Pro Clubs, bring more personality to the pitch with new levels of customization and enhanced street and stadium gameplay. However you play, experience The World’s Game with over 19,000 players, 700+ teams, 100+ stadiums, and over 30 leagues - including the UEFA Champions League, Premier League, new Barclays FA Women’s Super League and France D1 Arkema with unrivaled authenticity in FIFA 23."
//     },
//     {
//       title: "Resident Evil Village - PlayStation 5 ",
//       image: resident,
//       price: "$30",
//       description:
//         " Resident Evil Village Gold Edition, is a bundle of the Winters’ Expansion and the main game. The new content includes a Third-Person Mode for the campaign, The Mercenaries Additional Orders featuring new stages and playable characters Chris Redfield, Heisenberg, and Lady Dimitrescu; and a continuation of the story in Shadows of Rose. Set 16 years after the events of Resident Evil Village, this new tale follows Rose Winters, the daughter of main protagonist Ethan, as she struggles with her terrifying powers. Players must explore and survive a warped and mysterious realm inside the consciousness of the Megamycete in search of a cure."
//     },

//     {
//       title: "Detroit Become Human - PlayStation 4",
//       image: detroit,
//       price: "$12",
//       description:
//         "Detroit: Become Human is the latest title in development by Quantic Dream and expands on the studio's legacy of gripping narrative driven experiences (Fahrenheit/Heavy Rain/ Beyond: Two Souls). Throughout the game, players will co-write the story through the actions of several protagonists in an ambitiously bending and thrilling narrative. As the player, you will embody several characters, amongst which KARA, CONNOR, and MARKUS. As Kara, you will witness your brave new world turn to chaos as you take on the role of a female service android trying to find her own place in a turbulent social landscape. Whilst you shape the branching narrative as Connor, an Android Cop employed by the human police force to seek out deviant Android such as Markus, a leader of the android group seeking freedom for his people, you will be making choices that will not only determine your own fate, but that of the entire city and possibly beyond. Discover what it really means to be human in a powerfully emotional journey made of choice and consequences."
//     },

//     {
//       title: "Mario Kart 8 Deluxe - Nintendo Switch",
//       image: mario,
//       price: "$40",
//       description:
//         "Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!"
//     },

//     {
//       title: "Super Smash Bros. Ultimate - Nintendo Switch",
//       image: SuperSmash,
//       price: "$40",
//       description:
//         "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more! Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!"
//     }
//   ];
//   return games.map((game) => (
//     <Card
//       title={game.title}
//       image={game.image}
//       price={game.price}
//       description={game.description}
//     />
//   )

//   );
// }
