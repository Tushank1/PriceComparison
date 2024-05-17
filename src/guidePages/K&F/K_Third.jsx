import React from "react";
import "../H&I/Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function K_Third() {
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
        <h1>Top list: Best presents for a new baby</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_741059819045405428.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>Jhanella Coderis</span>
          </div>
        </div>
        <div className="guideDesc">
          <p>
            Has your friend just had a new addition to the family? Or perhaps
            one of your siblings has a new baby! Why not celebrate the arrival
            of a baby with a baby gift – and maybe get one for the parents too?
            We’ve made a top list of the best baby shower gift ideas, both for
            the little one and for the exhausted parents.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/giftguide-baby.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          Having a baby is quite an event, whether it is the first one or the
          fifth. It’s nice to give a present to a newborn baby, but it can be
          difficult to find something that feels just right. That’s why we’ve
          done the hard work for you and found the finest baby presents for our
          top list.
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3010516324/Vulli-Sophie-The-Giraffe-Clutching-Toy.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Sophie the Giraffe</h2>
            <p>
              Sophie the giraffe has been a popular baby gift since the 60's.
              Made of natural rubber from the Hevea tree with completely
              harmless colouring, Sophie is a safe and bite-friendly baby toy,
              which also makes a discreet noise if hugged. Perfect for the baby
              when he or she starts to teethe, as it gives the infant something
              to gnaw on.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £14.11</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£14.11 at Notino</span>
              </div>
              <div className="button4">
                <span>£14.99 at Samuel Johnston</span>
              </div>
              <div className="button1">
                <span>£15.99 at Very</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1842873399/Ergobaby-Omni-360-All-in-One.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Ergonomic baby sling</h2>
            <p>
              An ergonomic sling can save tired backs, especially when the baby
              wants to be close at all times. We like the Ergobaby Omni 360 All
              in One, which is easy to use. The padded shoulder straps are
              comfortable, and the waist belt helps to relieve the load
              effectively.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £144.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£144.00 at Amazon</span>
              </div>
              <div className="button4">
                <span>£144.90 at John Lewis & Partners</span>
              </div>
              <div className="button3">
                <span>£144.90 at Kiddies</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3000876972/Liewood-Vivi-Dino-Silicone-Tableware-Set.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Children’s tableware</h2>
            <p>
              Children's tableware is a really classic baby gift. Even if it’s
              not yet time for a newborn to be eating solid food, time passes
              quickly and durable tableware will soon come into its own. Bear in
              mind that it this will often end up on the floor, so even if
              porcelain is lovely to look at, silicone is much more durable.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>Best price at The Hut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default K_Third;
