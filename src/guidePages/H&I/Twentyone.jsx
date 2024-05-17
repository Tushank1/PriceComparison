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
                src="https://www.pricerunner.com/product/80x80/3010820163/Eva-Solo-Nordic-Kitchen.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>2. Eva Solo Nordic Kitchen</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Nordic Nest <span>£82.97</span>
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
                src="https://www.pricerunner.com/product/80x80/3000478220/Stelton-EM-Classic-8-Cup.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>3. Stelton EM Classic 8 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Nordic Nest <span>£49.82</span>
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
                src="https://www.pricerunner.com/product/80x80/3001138113/House-Doctor-Nuru.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>4. House Doctor Nuru</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Nordic Nest <span>£26.90</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
          <div className="twentyone_table_product">
            <div className="twentyone_table_product_image">
              <img src="https://www.pricerunner.com/product/80x80/3000725889/Bialetti-Preziosa-8-Cup.jpg?ph=true&fmt=avif" />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>5. Bialetti Preziosa 8 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Amazon <span>£27.92</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
        </div>
        <div className="twentyone_table">
          <div className="twentyone_table_heading">
            <h1>2. The coffee filter is also a simple brewing method</h1>
          </div>
          <div className="twentyone_table_para">
            <p>
              The coarsely ground beans are first poured into a container that
              can hold the amount of cold-brewed coffee you want to brew. Then
              simply pour cold water on the beans and place the container in the
              fridge for 12-24 hours.
            </p>
            <p>
              Remember to close the container with a lid while the coffee is
              brewing.
            </p>
            <p>Finally, the coffee is filtered through a coffee filter.</p>
            <img
              src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-filtering-GIF.gif"
              alt=""
            />
            <p>
              We use a <span>Chemex jug for pour over coffee</span> together
              with a recyclable fabric filter - but you can also use the filter
              holder (without drip stop) from your coffee machine, or a suitable
              size funnel and a coffee filter.
            </p>
            <p>
              You may also want to use a sieve to filter out the coarse coffee
              grounds before pouring the coffee through the filter.
            </p>
            <p>
              <span>A little tip:</span> It may take a while for the coffee to
              run through regular coffee filters as the fine coffee grounds can
              get stuck in the filter. It can sometimes be helpful to apply two
              filters in the filter holder.
            </p>
          </div>
          <div className="twentyone_table_product">
            <div className="twentyone_table_product_image">
              <img
                src="https://www.pricerunner.com/product/80x80/3004203032/Chemex-Classic-6-Cup.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>1. Chemex Classic 6 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Anather Coffee <span>£40.00</span>
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
                src="https://www.pricerunner.com/product/80x80/3006233603/Kalita-Wave-185.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>2. Kalita Wave 185</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Amazon <span>£45.00</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
        </div>
        <div className="twentyone_table">
          <div className="twentyone_table_heading">
            <h1>3. Special equipment - for the connoisseur</h1>
          </div>
          <div className="twentyone_table_para">
            <p>
              The two previous methods are straightforward for most people, but
              some manufacturers have developed{" "}
              <span>special jugs just for Cold brew.</span>
            </p>
            <p>
              The cold-brewed coffee itself hardly gets much better by using the
              equipment, but it can make the process of brewing, filtering and
              storing in the fridge a little easier.
            </p>
          </div>
          <div className="twentyone_table_product">
            <div className="twentyone_table_product_image">
              <img
                src="https://www.pricerunner.com/product/80x80/1699498006/Hario-Cold-Brew.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>1. Hario Cold Brew</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at Anather CremaShop <span>£18.12</span>
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
                src="https://www.pricerunner.com/product/80x80/1695900070/KitchenAid-KCM4212SX.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>2. KitchenAid KCM4212SX</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at EcooKshop <span>£84.99</span>
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
                src="https://www.pricerunner.com/product/80x80/1625767927/Bodum-Bean-Ice-12-Cup.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyone_table_product_midContent">
              <div className="twentyone_table_product_midContent_one">
                <span>3. Bodum Bean Ice 12 Cup</span>
              </div>
              <div className="twentyone_table_product_midContent_two">
                <p>
                  Find deal at CoolShop <span>£55.00</span>
                </p>
              </div>
            </div>
            <div className="twentyone_table_product_button">
              <span>Go to store</span>
            </div>
          </div>
        </div>
        <h2>How to make a tasty cold brewed coffee</h2>
        <p>Strong, mild, sweet, ice cubes - with or without milk?</p>
        <p>
          The classic serving is with <span>syrup, milk, and ice cubes.</span>{" "}
          In the end, the distribution depends on your own taste - so you should
          probably taste it the first few times until you find out just how you
          like it.
        </p>
        <p>
          We have used a distribution of milk and coffee of about half of each.
          You can use whatever milk (and quantity) you want. From skimmed to
          whole milk, or maybe you prefer a plant-based alternative.
        </p>
        <p>
          You can even{" "}
          <span>
            consider if you want to give almond milk or rice milk a go.
          </span>{" "}
          Even if you usually prefer plain milk, almond milk, and rice milk, add
          a unique creamy consistency to the coffee - almost like heavy cream,
          just without the fat.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-pouring-milk-GIF.gif"
          alt=""
        />
        <p>
          Even though a cold-brewed coffee is sweeter in taste, most people
          would prefer to <span>sweeten the coffee with a good syrup.</span>
        </p>
        <p>
          But syrup tends to settle to the bottom of the glass, so remember to
          stir well.
        </p>
        <p>
          The selection of coffee syrup is now quite prominent in both
          supermarkets and speciality stores. The classic flavours are vanilla
          and caramel syrup, but maybe you are more into nut syrup? Try it out.
        </p>
        <p>
          <span>A little tip</span> is to freeze your coffee leftovers in an{" "}
          <span>ice cube tray.</span>
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-guide-coffee-ice-cubes.jpg"
          alt=""
        />
        <p>
          Then you always have coffee cubes ready for your Cold Brew - or for a
          cup of ice coffee, for that matter.
        </p>
        <p>
          Ice cubes made from coffee do not dilute the coffee taste as they
          melt.
        </p>
        <h2>Happy brewing from all of us at PriceCompare</h2>
        <p>
          We’re pretty sure that you’ll have a slightly different opinion on
          cold coffee from now on.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Cold-brew-guide-serving.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Twentyone;
