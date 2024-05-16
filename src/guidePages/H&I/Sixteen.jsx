import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Sixteen() {
  const navigate = useNavigate();

  return (
    <div className="third">
      <div className="guidetop">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext">
        <h1>Top presents for 30-somethings</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_741059819045405428.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>Sara Assadi</span>
          </div>
        </div>
        <div className="guideDesc"></div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-12.jpg?d=896x504"
            alt=""
          />
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1632013534/Lyngby-Vase-Vase-20cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Vase (Lyngby Vase)</h2>
            <p>
              A beautiful vase is the perfect way to present a birthday bouquet,
              and we love this porcelain vase from Lyngby.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £32.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£32.00 at Amazon</span>
              </div>
              <div className="button1">
                <span>£32.40 at Nordic Nest</span>
              </div>
              <div className="button1">
                <span>£35.00 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1871381754/Traditional-Wine-Rack-Wine-Rack-Bar-Equipment.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Wine rack (Traditional Wine Rack)</h2>
            <p>
              Give the gift of attractive storage for bottles of wine! This is a
              modular wine rack in stained wood and metal with space for 12
              bottles – including magnums. Because you can stack it, the wine
              rack can grow with your cellar.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button3">
                <span>Best price at Drink Stuff</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1606074996/Sandqvist-Alva-Black.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Attractive backpack (Sandqvist Alva)</h2>
            <p>
              Sandqvist’s Alva is an attractive and stylish bag manufactured in
              organic cotton canvas and vegan leather. A computer pocket on the
              inside makes it convenient to carry both your laptop and your
              lunchbox to the office or university.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button4">
                <span>Best price at John Lewis & Partners</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3011766231/Philips-HD9260.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Airfryer (Philips HD9260/90)</h2>
            <p>
              An airfryer produces fried food completely without oil. Instead,
              it uses hot air. You can fry chicken, heat up frozen vegetables
              and make your own chips. You can even make crisps. Parts of the
              fryer are dishwasher-safe. This is a great present for anyone who
              loves cooking but prefers to eat healthy.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>Best price at Robert Dyas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1708190476/Le-Creuset-Cerise-Signature-with-lid-4.2-L-24-cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Cast iron casserole (Le Creuset)</h2>
            <p>
              Le Creuset’s round casseroles are a true classic that have been
              used for baking bread and making stews since 1925. The enamelled
              inside makes them easy to clean, and they’re also dishwasher-safe.
            </p>
            <p>
              They’re available in many different colours, so it’s easy to
              choose one that matches the rest of the kitchen decor.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £161.38</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£161.38 at Nordic Nest</span>
              </div>
              <div className="button1">
                <span>£213.75 at Wayfair</span>
              </div>
              <div className="button1">
                <span>£228.00 at Harts of Stur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sixteen;
