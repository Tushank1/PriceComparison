import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Eight() {
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
        <h1>Trendy armchairs for every style</h1>
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
            Buying attractive armchairs for your living room isn’t just about
            choosing a great look. From the ergonomic point of view, a really
            comfortable armchair is also a must-have. If you choose good
            quality, your new favourite armchair will be a companion for many
            years to come that might just replace your Ikea armchair.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-26.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          Good armchairs encourage both socialising and relaxation, and no
          matter what taste you have in interior design, there are any number of
          great chairs to choose from.
        </p>
        <p>
          Which armchair you end up with is, of course, a matter of taste, but
          before spending your hard-earned cash it’s worth thinking about how
          and where you plan to use a chair. Maybe it would be a good idea to
          buy an armchair that converts into a guest bed, or maybe you want to
          invest in a design piece that can be passed on to the next generation?
          Here we look at seven armchairs that receive high marks from satisfied
          customers.
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3010902568/Fritz-Hansen-Egg-Armchair-107cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>1. Fritz Hansen Egg</h2>
            <p>
              An armchair that can be described as the Rolls Royce of chairs
              when it comes to both design and popularity. And maybe that’s true
              for the price too. But this is a piece of furniture that never
              goes out of style, and one that will last for generations.
            </p>
            <p>
              “The Egg” was designed in 1958 by Arne Jacobsen, one of the most
              famous and popular furniture designers of our time, whose works
              are known all over the world. A great buy for those with a big
              budget who want a timeless design classic.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button4">
                <span>Best price at Designer Sofas 4u</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3002288855/Beliani-Eslov-Armchair-103cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>2. Beliani Eslov 103 cm Recliner</h2>
            <p>
              A really robust armchair for those who want something extra when
              it comes to functionality. The warming velvet upholstery is really
              cosy to sit in, and the rounded design invites you to relax time
              after time.
            </p>
            <p>
              With the backrest folded down and the footrest up, the stable
              construction also offers an almost complete lying position – great
              for those tired backs. And the soft padding is really comfortable
              whatever position you choose.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £379.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£379.99 at ManoMano</span>
              </div>
              <div className="button1">
                <span>£379.99 at OnBuy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1672645139/Swedese-Lamino-Armchair-101cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>3. Lamino</h2>
            <p>
              This armchair was designed by Bruno Mathsson and is a beloved
              treasure in many homes of design fans. It’s as comfortable as it
              is stylish, partly because Mathsson used a slightly different
              method to create furniture that was as ergonomically comfortable
              as possible. Among other things, he sat down in a snowdrift to
              study which shape would best suit his back.
            </p>
            <p>
              Lamino’s comfort is typical of his works, and the chair has become
              so popular that the small town of Värnamo in Sweden is even called
              “Lamino’s home town”.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button3">
                <span>Best price at Nordic Nest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3000194557/Beliani-Muret-Armchair-87cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>4. Beliani Muret Recliner</h2>
            <p>
              Recliner is a very relaxing word. And if you lie back in this
              armchair, you risk wanting to stay there forever. That’s how
              comfortable it feels.
            </p>
            <p>
              The Beliani Muret Recliner is 163 cm long and is available in
              several appealing colours. The chair has turned wooden legs which
              give the design an extra elegant touch.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £329.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£329.99 at ManoMano</span>
              </div>
              <div className="button1">
                <span>£329.99 at OnBuy</span>
              </div>
              <div className="button2">
                <span>£329.99 at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1884353311/Beliani-Setten-Armchair-82cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>5. Beliani Setten Bed Chair</h2>
            <p>
              A perfect armchair for those who have little space but still want
              to be able to offer guests an overnight bed. In a very convenient
              way, this chair turns easily into a bed, but it is also possible
              to only half unfold it so you get a comfortable reclining armchair
              with a backrest instead.
            </p>
            <p>
              This bed chair is 104 cm wide, which makes it pretty spacious, and
              fully unfolded, it is 190 cm long. A versatile and compact piece
              of furniture that’s as practical as it is stylish!
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £389.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button2">
                <span>£389.99 at ManoMano</span>
              </div>
              <div className="button1">
                <span>£389.99 at OnBuy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3002399464/vidaXL-kubu-Armchair-70cm.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>6. vidaXL 60x77x70cm Recliner</h2>
            <p>
              This stylish woven design with seat and back of rattan may not be
              the softest armchair on our list, but it definitely adds a
              decorative touch to any room. With a frame of solid mahogany, it
              gives a stable and relaxed impression, and the wide seat also
              makes it really comfortable.
            </p>
            <p>
              The armchair is available in three different colours and the
              natural rattan is easy to clean with a slightly damp cloth.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £121.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£121.99 at VidaXL</span>
              </div>
              <div className="button1">
                <span>£121.99 at OnBuy</span>
              </div>
            </div>
          </div>
        </div>
        <h3>3 tips for buying an armchair</h3>
        <ol>
          <li>
            How will it be used? Do you want to be able to have overnight
            guests, will it be used daily or mostly left untouched in your best
            room? Choose the armchair that best fits your life and home.
          </li>
          <li>
            Check for extra features. Massage, a heated seat and reclining
            functions – an armchair can be so much more than just a sea
          </li>
          <li>
            Check the delivery. An armchair is a rather awkward piece of
            furniture, so if you buy online make sure you know what the shipping
            costs are and what they include. Some companies help you get the
            chair into your home and even to assemble it. Which means you aren’t
            left in the street with a giant box, scratching your head, as the
            delivery van drives away.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Eight;
