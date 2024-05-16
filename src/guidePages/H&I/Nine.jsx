import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Nine() {
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
        <h1>Chic shower curtains for any bathroom</h1>
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
            A shower curtain is a fairly important part of the bathroom decor.
            Choose an attractive one that matches the atmosphere in your home
            and hangs beautifully from your shower curtain rail.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-27.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          When it comes to making a bathroom feel great, it’s often a feeling of
          peace and quiet that really works. Getting a moment of calmness behind
          a locked door is always welcome, and with the right atmosphere, it
          should be enjoyable to take a long shower or a hot bath.
        </p>
        <p>
          However, to prevent water from soaking the entire bathroom, a shower
          curtain is often required, and there are lots to choose from. Here we
          take a look at just a few, so you don’t have to spend too much time
          away from your bubble bath!
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3031830420/Spirella-Transparent-(10.18732).jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>1. Spirella Matto</h2>
            <p>
              A transparent shower curtain that fits in with most modern
              bathrooms. Spirella is a Swiss company that claims to have
              introduced the shower curtain to the European market. This was
              after the founder, Anton A Heuberger, took a shower in an American
              hotel room and was inspired by the interior. This shower curtain
              is made of 100% vinyl and can only be washed by hand
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>Best price at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3002202390/Ferm-Living-Chambray-(FL-9297).jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>2. Ferm Living Chambray (FL-9297)</h2>
            <p>
              The Chambray curtain from trendy Ferm Living is made of a soft
              cotton material, which gives a nice cosy feeling to your bathroom.
              It is available in two different muted tones to suit most modern
              bathrooms. The shower curtain measures 205x160 cm and can be
              washed at 30 degrees.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £64.21</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button3">
                <span>£64.12 at Lampemesteren</span>
              </div>
              <div className="button2">
                <span>£71.43 at Nordic Nest</span>
              </div>
            </div>
          </div>
        </div>
        <h3>3 tips for buying shower curtains</h3>
        <ol>
          <li>
            Check the washing instructions. It’s nice to be able to quickly
            freshen up a curtain by throwing it in the washing machine – rather
            than having to hand wash it.
          </li>
          <li>
            Feel the weight. Who likes it when a shower curtain sticks to their
            body? Buy a curtain with weights at the bottom to help keep it
            straight.
          </li>
          <li>
            Check the material label. There are shower curtains that feel almost
            like ordinary fabric, which is much nicer than the more plasticky
            variants.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Nine;
