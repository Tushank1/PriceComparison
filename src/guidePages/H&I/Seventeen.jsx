import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Seventeen() {
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
        <h1>Great bedding for kids</h1>
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
            Are you looking for a cosy bedding set for your child or some
            seasonal Christmas bedding? We’ve come up with our top tips for
            bedclothes that work for prams, cots and junior beds. They’re made
            in materials that both look nice and are cosy to snuggle down in.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-9.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          Looking for bed linen for the entire family?{" "}
          <span>
            We’ve also made a list of attractive, comfortable bedding for
            adults.
          </span>
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1578941382/Klippan-Yllefabrik-Little-Bear-Blankets-Brown-Green--Blue--Pink-(90x70cm).jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Klippan Yllefabrik Little Bear blanket</h2>
            <p>
              Little Bear is a warm jaquard weave cotton blanked with an animal
              pattern. The cotton is organic and the blanket looks great from
              either side. Also available in green and pink. 70 x 90 cm.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £34.90</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£34.90 at Nordic Nest</span>
              </div>
              <div className="button1">
                <span>£41.60 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seventeen;
