import React from "react";
import "./Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Fourth() {
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
        <h1>Trendy water bottles</h1>
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
            Find it difficult to drink enough water? With a stylish water
            bottle, it’s more fun to use and easier to remember those extra
            millilitres that you otherwise too easily forget as well some hot
            water bottles for when you want to stay warm when out in the cold.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-47.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          In addition to the water in what we eat, you should also drink about
          1-1.5 litres extra per day, and even more if you sweat a lot due to
          exercise or hot weather. With an attractive bottle in your bag you
          don’t have to buy expensive bottled water when you’re away from home,
          and everyone knows exercise is more fun if you have the right
          equipment. Here are seven stylish water bottles that work just as well
          in the office as they do at the gym.
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1906889476/Glacial-Water-Bottle-0.6L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>2. Glacial water bottle 0.6 litre</h2>
            <p>
              Water bottles from Glacial are popular for several reasons. On the
              one hand, they have a stylish design, but they also work as a
              thermos in both directions. So this bottle keeps a drink cold for
              24 hours, or hot for half the time. Perfect to take with you to
              the gym or the beach in order to be able to cool off properly.
            </p>
            <p>
              These bottles are available in several attractive colours and
              patterns and can also be matched with other items from the series,
              such as a thermos mug for coffee.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £15.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£15.99 at Amazon</span>
              </div>
              <div className="button2">
                <span>£34.00 at Royal Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1702804163/Sistema-Tritan-Active-Water-Bottle-0.8L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>3. System Hydrate Tritan Active 0.8 litre</h2>
            <p>
              These colourful bottles from Sistema Hydrate hold 0.8 litres and
              have a practical lid that makes it easy to quickly open and close
              them when drinking. The durable tritan plastic is unbreakable and
              doesn’t become matte on the surface after a period of use.
            </p>
            <p>
              The water bottle is BPA and phthalate-free and can withstand the
              dishwasher (top basket) and the microwave (without the lid) as
              well as being freezer-safe. A convenient and easy-to-use bottle
              that can be used for a long time.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £7.99</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£7.99 at Wilko</span>
              </div>
              <div className="button2">
                <span>£8.99 at Robert Dyas</span>
              </div>
              <div className="button3">
                <span>£10.00 at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3002424081/Yeti-Rambler-Water-Bottle-1.1L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>4. Yeti Rambler water bottle 1.1 litre</h2>
            <p>
              This water bottle is a large and robust thermos with a spout that
              makes it easy to drink directly from the bottle if you want. The
              bottle also works very well as a normal thermos on any trip.
            </p>
            <p>
              The spout is simple to remove for easier cleaning. The bottle has
              vacuum insulation, is made of stainless steel and can be cleaned
              in the dishwasher. The Yeti Rambler is available in black and
              white.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £49.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£49.00 at End Clothing</span>
              </div>
              <div className="button2">
                <span>£49.69 at LD Mountain</span>
              </div>
              <div className="button3">
                <span>£49.95 at Dapper Street</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3002182995/Smartshake-Bohtal-Insulated-Water-Bottle-0.6L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>5. Smartshake Bohtal insulated water bottle 0.6 litre</h2>
            <p>
              A stylish water bottle with a marbled pattern in several designs –
              this model from Smartshake definitely looks the part for your
              workout. It’s BPA-free, made of stainless steel and has a useful
              silicone base that allows it to be put down silently as well as
              keeping it stable..
            </p>
            <p>
              Cold drinks stay chilled for 24 hours and hot drinks last for 12
              hours thanks to the vacuum inside the flask. Perfect for those who
              need a water top up in the office, gym or even whilst driving the
              car.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £28.60</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£28.60 at Notino</span>
              </div>
              <div className="button2">
                <span>£32.85 at Amazon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1790373571/BKR-Spiked-Water-Bottle-0.5L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>6. Bkr Water bottle, Spiked Muse, 0.5 l</h2>
            <p>
              A colourful water bottle in a playful design that holds half a
              litre. The bottle is made of glass with a silicone coating, and
              completely free of BPA and phthalates. It can be washed on the top
              shelf of the dishwasher and has a screw cap with a neat little
              handle on it.
            </p>
            <p>
              Easy to carry in your bag or to have standing on the desk as a
              reminder to take a few extra sips during the working day.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £31.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£31.00 at Amazon</span>
              </div>
              <div className="button2">
                <span>£32.00 at Gorgeous Shop</span>
              </div>
              <div className="button3">
                <span>£32.00 at Beauty Flash</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1517617310/Camelbak-Camelbak-Eddy-Water-Bottle-0.75L.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>7. Camelbak Eddy water bottle 0.75 litre</h2>
            <p>
              The classic sports brand Camelbak has long been at the forefront
              of serving thirsty athletes with water when they need it. This
              0.75 litre bottle is made of Eastman Tritan™ Copolyester with a
              polypropylene cap and is BPA/BPS/BPF free..
            </p>
            <p>
              It’s quick and easy to take a sip on the go thanks to the
              practical drip-free nozzle, and the bottle is easy to open as well
              as clean (or top up with ice on extra hot days). It can also be
              cleaned on the top shelf of the dishwasher.
            </p>
            <div className="price1">
              <div className="containerprice1">
                <span>Price from: £10.00</span>
              </div>
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>£10.00 at Nevisport</span>
              </div>
              <div className="button2">
                <span>£15.85 at OnBuy</span>
              </div>
              <div className="button3">
                <span>£16.15 at Swinnerton</span>
              </div>
            </div>
          </div>
        </div>

        <h3>3 tips when buying water bottles</h3>
        <ol>
          <li>
            Look for a thermos. If a bottle has a thermos function, you get two
            bottles in one, and can also use it for hot drinks. It’s also nice
            not to find yourself drinking lukewarm water after half a day in the
            sun.
          </li>
          <li>
            Buy the right size. If you only drink 300-400 ml extra per day, you
            may find it too cumbersome to lug around a large bottle and so end
            up leaving it at home. And vice versa. If your water always runs out
            so that you need to refill it or maybe even buy bottled water, then
            you need a bigger one.
          </li>
          <li>
            Check out the material. Plastics that release chemicals when in
            contact with water aren’t the best choice for a water bottle. Choose
            one that’s kind both to you and to nature.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Fourth;
