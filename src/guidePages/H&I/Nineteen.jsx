import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Nineteen() {
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
        <h1>Top list: Stylish vases</h1>
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
            A beautiful vase is a must in every home, whether for larger
            bouquets of flowers or single cut blooms and whichever material you
            prefer, whether that be a glass vase or a more earthly ceramics
            vase. We’ve been looking at which vases are popular right now –
            maybe you can find your own new favourite?
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/pricerunner_toplist-vases_cover.png?d=896x504"
            alt=""
          />
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1266150343/Iittala-Alvar-Aalto-Vase-25.1cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Iittala Alvar Aalto</h2>
            <p>
              This popular vase is available in different sizes and colours. The
              range also includes votive candle holders, cutting boards and
              serving bowls with the same charming wave shape.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £116.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£116.00 at Royal Design</span>
              </div>
              <div className="button2">
                <span>£130.89 at Nordic Nest</span>
              </div>
              <div className="button1">
                <span>£159.99 at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3090199049/Louise-Roe-Jewel-Opal-White-Vase-16cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Louise Roe Jewel</h2>
            <p>
              This mouth-blown vase in jewel form from Louise Roe is just as
              beautiful regardless of whether you use it for a large bouquet or
              a couple of cut flowers. Available in three sizes.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button3">
                <span>Best price at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1646540917/Marimekko-Flower-Vase-10.4cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Marimekko Flower</h2>
            <p>
              Flower from Marimekko is a small green vase with an undulating
              form. As it’s only 10.4 cm high, it’s ideal for the first spring
              flowers of the year.
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
              src="https://www.pricerunner.com/product/168x168/1649172981/Ernst-Round-Vase-25cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Ernst</h2>
            <p>
              Ernst is a stylish round vase in a classic design with a thin
              leather strap around the neck. There are also hyacinth vases in
              both stoneware and glass from the same collection.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £23.90</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£23.90 at Nordic Nest</span>
              </div>
              <div className="button2">
                <span>£23.90 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1860081808/Holmegaard-Primula-Vase-25.5cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Holmegaard Primula 25.5</h2>
            <p>
              The Holmegaard Primula is a vase in grey glass that really brings
              your flowers into focus. Perfect for hortensias or other statement
              flowers.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £50.40</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£50.40 at Royal Design</span>
              </div>
              <div className="button2">
                <span>£50.41 at Nordic Nest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3015764708/Klong-AEng-Vase-9cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Klong Äng</h2>
            <p>
              The Klong Äng has long been a really popular vase. It has a
              built-in flower holder, in metal, that makes it easy to arrange
              your flowers so they stand out beautifully.
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
              src="https://www.pricerunner.com/product/168x168/1548026201/Orrefors-Carat-Vase-24cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Orrefors Carat</h2>
            <p>
              Lovely lilies thrive best in a really elegant vase, such as this
              one from Orrefors.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £260.10</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£260.10 at Nordic Nest</span>
              </div>
              <div className="button1">
                <span>£274.49 at Amazon</span>
              </div>
              <div className="button2">
                <span>£296.00 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1583040703/Kosta-Boda-Open-Minds-Vase-36cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Kosta Boda Open Minds</h2>
            <p>
              This vase almost doesn’t need flowers – it’s a work of art in
              itself. The Open Minds series also includes serving bowls and
              other tableware.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £218.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£218.00 at Nordic Nest</span>
              </div>
              <div className="button2">
                <span>£218.00 at Royal Design</span>
              </div>
              <div className="button2">
                <span>£299.99 at Rue La La</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1613866545/Kaehler-Hammershoei-Vase-8.5cm-3pcs.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Kähler Hammersh ø j Miniature vase</h2>
            <p>
              A small vase that’s perfect for small cuttings, avocado stones or
              acorns. Place it alone or with several small vases of different
              sizes.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £24.11</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£24.11 at Amazon</span>
              </div>
              <div className="button2">
                <span>£30.24 at Nordic Nest</span>
              </div>
              <div className="button2">
                <span>£49.00 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1903672936/Jonathan-Adler-Frida-Vase-40.6cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>Jonathan Adler Frida Vase</h2>
            <p>
              A unique vase with decorative faces. The vase also has a lid, if
              you prefer to use it as a jewellery box.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £270.83</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£270.83 at Jonathan Adler</span>
              </div>
              <div className="button4">
                <span>£325.00 at Tobias Oliver Interiors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nineteen;
