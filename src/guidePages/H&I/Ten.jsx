import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Ten() {
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
        <h1>Nice key cabinets for your entrance hall</h1>
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
        <div className="guideDesc">
          <p>
            With a key cabinet, you don’t have to run around looking for your
            keys every time you go out and you keep full control over everything
            that needs a cabinet key locks.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-34.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          Everything in its place is a rather tired expression, but it’s still a
          good one. With specific places for things like keys it becomes much
          easier to keep track of them all rather than lose them in a box or on
          a shelf somewhere.
        </p>
        <p>
          With a key cabinet in the hall, you can keep track of the whole
          family's keys, and also store those other keys that aren’t used so
          often. With some models you also get a noticeboard.
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1897882438/Montana-Furniture-Unlock-Key-Safe-Box-Basket.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>2. Montana Furniture Unlock key cabinet</h2>
            <p>
              Danish company Montana manufacture high-quality design furniture
              and interior details, and their square key cabinets are really
              great. The cabinet is available in several attractive colours and
              has a discreet lock in the cabinet door.
            </p>
            <p>
              The cabinet is made of painted MDF and hung on a rail on the wall.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>Best price at Nordic Nest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1909921903/BURG-WAECHTER-6220-10-Ni.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>3. Burg Wächter 6220/10 Ni</h2>
            <p>
              This discreet cabinet from Burg Wächter is easy to place. The
              door, which is held closed with a magnet, has twenty small punched
              keyholes and on the inside are hooks with space for ten sets of
              keys.
            </p>
            <p>
              The cabinet is small and flexible, 21x27 cm and only 7 cm deep,
              which makes it easy to site even in a small hall. The door is made
              of stainless steel and the back is black.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £16.64</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£16.64 at Amazon</span>
              </div>
              <div className="button4">
                <span>£17.09 at Conrad Electronic</span>
              </div>
              <div className="button1">
                <span>£25.99 at Wayfair</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3000661748/Yale-Y-SKB000NFP.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>4. Yale YKB/540/CB2</h2>
            <p>
              Sometimes you need a little extra control over your keys, and at
              those times it makes sense to have an extra key to the key
              cabinet, so to speak. With a code lock on this cabinet, you
              prevent unauthorised access to your keys, and it is easy to decide
              who has access to the code.
            </p>
            <p>
              The cabinet has a stylish design which makes it easy to site in
              any environment. Inside there are 46 key hooks.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £21.50</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£21.50 at Amazon</span>
              </div>
              <div className="button2">
                <span>£21.99 at Robert Dyas</span>
              </div>
              <div className="button1">
                <span>£22.00 at Wickes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1915500736/BURG-WAECHTER-6204-10-Ni-Skyline-NY.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>5. Burg Wächter key cabinet</h2>
            <p>
              Room for ten keys and a New York themed design are found in this
              key cabinet from Burg Wächter, who offer several different designs
              with city themes on their cabinets. The cabinet is small and
              convenient, which makes it easy to place even in a narrow hall.
              The door is closed with a magnetic lock.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>Best price at Wayfair</span>
              </div>
            </div>
          </div>
        </div>
        <h3>3 tips for buying key cabinets</h3>
        <ol>
          <li>
            Choose the right number of hooks. One key per hook is a good rule of
            thumb and it also means you spend less time searching for the right
            key.
          </li>
          <li>
            Think bigger. Do you need a bulletin board or a mirror as well? Then
            a combination model is perfect for saving wall space.
          </li>
          <li>
            Review your security. Maybe you need a key cabinet with a code, at
            least for those keys whose locks protect your most valuable things.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Ten;
