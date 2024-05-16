import React from "react";
import "./Twentyone.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Twentyone() {
  const navigate = useNavigate();

  return (
    <div className="twentyone">
      <div className="guidetop_twentyone">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon_twentyone" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate_twentyone">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext_twentyone">
        <h1>How to make cold brew coffee</h1>
        <div className="guideAuthor_twentyone">
          <div className="authorImage_twentyone">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_7534977977640960368.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName_twentyone">
            <span>Brian Sommer</span>
          </div>
        </div>
        <div className="guideDesc_twentyone">
          <p>
            What is Cold Brew coffee (i.e., a cold-brewed coffee)? "Cold Brew
            coffee is a delicious coffee speciality. Try it for yourself; it’s
            light - and delicious. "But I don’t like cold coffee!" No, well, few
            do. But cold-brewed coffee is thankfully something utterly different
            than the hot cup of coffee that you poured (and then forgot about)
            half an hour ago. We will help you make the most delicious Cold
            Brew, however you prefer it, plain, vanilla flavoured or perhaps
            even Guinness Cold Brew.
          </p>
        </div>
        <div className="thirdImage_twentyone">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-guide.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          <span>What is Cold Brew coffee?</span> A Cold Brew is coffee that is
          entirely brewed without heating. And that’s the exact detail that
          works wonders for the taste. But there are a few things that you need
          to take into account - and do a little differently.
        </p>
        <p>
          So what is the difference between an iced coffee and a cold-brewed
          coffee, then? <span>The answer lies in the taste.</span> Although both
          iced coffee and cold-brewed coffee must be enjoyed cold, the iced
          coffee is first brewed hot, and then the coffee is poured over ice.
        </p>
        <p>
          When the coffee is brewed without heating, the taste develops into a
          sweeter coffee free of the taste of bitter substances.
        </p>
        <p>
          Are you looking for{" "}
          <span>inspiration to serve a Cold Brew coffee?</span>
        </p>
        <p>
          In about 2 minutes, you will have read your way to the recipe, but if
          you can’t wait that long, you can find it at the bottom of the guide.
        </p>
        <p>
          But perhaps you need to know the brewing method first, - so let's
          start with the technical stuff, which is not that complicated.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-guide-ingredients.jpg"
          alt=""
        />
        <p>
          The advantage of cold-brewed coffee is that the taste is allowed to
          develop slowly and naturally without bitterness.
        </p>
        <p>
          Instead, the result is{" "}
          <span>
            a sweet, mild, tasty and aromatically rounded cup of coffee -
          </span>{" "}
          which opens your eyes to a whole new world of coffee taste.
        </p>
        <p>
          We mean the thing about the open eyes quite literally. Because when
          you brew the coffee in cold water, all the caffeine is extracted from
          the beans while brewing.
        </p>
        <p>
          And then you get <span>a rather invigorating cup of coffee,</span>{" "}
          without the coffee tasting too strong or bitter. (Not looking for the
          stimulating effect? Then try decaffeinated coffee beans instead.)
        </p>
        <h2>Cold brew takes its time - from 12 to 24 hours.</h2>
        <p>
          Yes, it’s a long time, but the individual processes in the brewing are
          easy. The methods themselves don’t require much more from you than a
          few minutes.
        </p>
        <p>
          When your cold-brewed coffee is brewed, it can{" "}
          <span>stay for up to 14 days in the fridge</span> in a closed
          container
        </p>
        <p>So be sure to make plenty while you’re at it.</p>
        <h4>What you need to get started:</h4>
        <ul>
          <li>80-100 grams of coffee beans per litre of water</li>
          <li>
            A coffee grinder (you can find one in our{" "}
            <span>test of coffee grinder here</span>)
          </li>
        </ul>
        <p>
          You can also buy ground coffee beans as long as they’re coarsely
          ground - for cafetiere or coarser.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-brewing-GIF.gif"
          alt=""
        />
        <h2>3 popular ways to brew Cold Brew</h2>
        <p>
          No matter which brewing method you go for, the actual brewing
          (extraction) happens in the same way. You just have to pour{" "}
          <span>cold tap water</span> over the beans and let them soak in the
          water for 12 to 24 hours. Then the coffee must be filtered, and for
          that, we give you <span>the 3 most used methods</span> to filter the
          coffee.
        </p>
        <div className="twentyone_table">
          <div className="twentyone_table_heading">
            <h1>1. The cafetiere - perhaps the most popular brewing method</h1>
          </div>
          <div className="twentyone_table_para">
            <p>
              Pour an appropriate amount of coarsely ground beans into{" "}
              <span>a coffee press</span>, pour cold water on the beans and
              stir.
            </p>
            <p>
              Now just leave your cafetiere in the fridge for anywhere between
              12-24 hours before pressing the plunger to the bottom and pouring
              the coffee from the cafetiere.
            </p>
          </div>
          <div className="twentyone_table_product">
            <div className="twentyone_table_product_image">
              <img
                src="https://www.pricerunner.com/product/80x80/3004199670/Bodum-Chambord-8-Cup.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>1. Bodum Chambord 8 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Amazon <span>£27.53</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
          <div className="twentyone_table_product">
            <div className="twentyone_table_product_image">
              <img
                src="https://www.pricerunner.com/product/80x80/3004199670/Bodum-Chambord-8-Cup.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>1. Bodum Chambord 8 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Amazon <span>£27.53</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twentyone;
