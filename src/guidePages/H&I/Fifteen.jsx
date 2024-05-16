import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Fifteen() {
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
        <h1>Top list: Best gifts for mum</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_7314996540121040246.png?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>PriceCompare</span>
          </div>
        </div>
        <div className="guideDesc">
          <p>
            Birthday, Christmas Eve, Mother’s Day – the opportunities to buy a
            gift for mum are many. Unfortunately, it may not always be the case
            that ideas are as numerous as the gift occasions. But don’t worry.
            We’ve looked for the best gift ideas for mum in all different price
            ranges.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide-giftguide-mom.jpg?d=896x504"
            alt=""
          />
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1775669030/Dorre-Bottle-Stopper.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>For the mother who loves bubbly: Champagne cork</h2>
            <p>
              Sparkling drinks are delicious, but you don’t always drink the
              whole bottle in one night, and by morning the bubbles have gone.
              Keep the mother in your life bubbly: buy her a champagne cork.
              With this cork she can easily seal the bottle so that the bubbles
              are still there even the following evening. Long live bubbles!
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>Best price at Nordic Nest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1554133219/Sangean-MMR-88.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>For the prepper mother: A radio</h2>
            <p>
              Did your mother hoard toilet paper and tins of food at the start
              of the pandemic? Why not complete her survival kit with a radio?
              One of these is on every prepper's wish list.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button4">
                <span>Best price at Conrad Electronic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3009225208/reMarkable-2-Paper-Marker-Plus.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>For mothers who like lists: ReMarkable 2</h2>
            <p>
              Do you know a mother who loves to make lists and take notes, but
              at the same time likes to digitise her everyday life? If you feel
              it’s time for a great gift that can help the mother in your life
              keep track of all the details – then ReMarkable is the perfect
              gift. It’s a digital notebook that feels like paper.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>Best price at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3000879726/Maison-Margiela-Replica-By-The-Fireplace-EdT-30ml.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>For the mother who likes everyday luxury: A unique perfume</h2>
            <p>
              Maison Margiela's fragrance series Replica offers unique
              fragrances based on different life experiences. How about Walk on
              the Beach, or By the Fireplace or Lazy Sunday Morning? There are
              scents for all tastes.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £55.42</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£55.42 at Notino</span>
              </div>
              <div className="button2">
                <span>£57.36 at Parfumdreams</span>
              </div>
              <div className="button2">
                <span>£59.00 at End Clothing</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3008522676/UGG-Scuff-Suede-Chestnut.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>For the mother who feels the cold: A pair of comfy slippers</h2>
            <p>
              Does your mother always complain about having cold feet? Or has
              she just returned to office work after working at home for the
              past year? Why not buy her some protection against the cold, hard,
              world with a pair of cosy slippers to wear at home or even in the
              office. Nobody likes to have cold feet.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £63.17</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£63.17 at Amazon</span>
              </div>
              <div className="button1">
                <span>£72.00 at Jules B</span>
              </div>
              <div className="button1">
                <span>£89.95 at Standout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifteen;
