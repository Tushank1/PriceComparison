import React from "react";
import "./Second.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Second() {
  const navigate = useNavigate();

  return (
    <div className="second">
      <div className="secondtop">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon" />
        <span>Guides</span>
      </div>
      <div className="secondUpdate">
        <span>Updated 24 October 2023</span>
      </div>
      <div className="secondContext">
        <h1>The 7 Best Air Fryers of 2023</h1>
        <div className="secondAuthor">
          <div className="secondAuthorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_2992016160197658622.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="secondAuthorName">
            <span>Matilda Hansson</span>
          </div>
        </div>
        <div className="SecondDesc">
          <p>
            Are you looking for the best air fryer? Then make sure to consider
            this top list before your purchase. We've gathered the top reviewed
            air fryers from some of the most popular brands such as Ninja,
            Cosori, Tefal and Tower–as well as what sets them apart so you can
            find the best model for you.
          </p>
        </div>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/topplista-airfryers.png?d=896x504"
          alt=""
        />
        <h3>Which Air Fryer should you buy?</h3>
        <p>
          With an ever-growing popularity thanks to energy and time-saving
          properties that also help you cook a bit healthier, the supply of air
          fryers has boomed in the past year. And although we love having many
          choices, finding the right air fryer for you can be challenging. It's
          also important to know what to consider when buying an air fryer.
          We've gathered the top reviewed models so that you can find the
          perfect one for you. You can also check the air fryer's top list and
          read user reviews to find the best one.
        </p>
        <h3>Popular Air Fryer Brands</h3>
        <ul>
          <li>Philips air fryer</li>
          <li>Cosori air fryer</li>
          <li>Ninja air fryer</li>
          <li>Tefal air fryer</li>
          <li>Tower air fryer</li>
          <li>Gourmia air fryer</li>
          <li>Swan air fryer</li>
          <li>Salter air fryer</li>
          <li>Daewoo air fryer</li>
        </ul>
        <h3>Philips Airfryer XXL HD9762</h3>
        <p>
          One of the price watched air fryers is the Philips Airfryer XXL, with
          an average rating of 4.8 out of 5 stars. With a capacity of 7.3L it is
          a large air fryer and is the perfect choice for a larger family. You
          can use it with or without oil. A big advantage to buying a Philips
          air fryer is that you can buy a wide range of air fryer accessories.
          They even have an app filled with recipes and cooking tips, you can
          get it here: NutriU-App. The price tag is a bit on the premium side,
          but you get what you pay for and the Philips air fryer is one of the
          best air fryers on the market right now.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ Automatic shut off</span>
        <span>+ Connected app</span>
        <span>+ Dishwasher friendly</span>
        <span>+ 6 different cooking settings</span>
        <span>- Takes up a lot of space</span>
        <div className="guidebutton2">
          <span>More Philips Air Fryers</span>
        </div>
        <h3>Ninja Air Fryer Dual Zone AF300EU</h3>
        <p>
          If you're looking for a really big air fryer then this popular model
          from Ninja is a great choice as it has a capacity of 9,5 litres. The
          Ninja Dual air fryer has two baskets so you can cook two dishes at
          once. You can even have different temperatures for each basket,
          between 40-230 degrees. The only downside is that it is very large and
          takes up a lot of space.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ Capacity of 9,5 liter</span>
        <span>
          + Cook two dishes at the same time at different temperatures
        </span>
        <span>+ Dishwasher friendly</span>
        <span>+ 6 different cooking settings</span>
        <span>- Very large and pricey</span>
        <div className="guidebutton3">
          <span>More air fryers from Ninja</span>
        </div>
        <h3>Tower Air Fryer T17038</h3>
        <p>
          Tower air fryers are among some of the most popular brands,
          specifically the Tower T17038 which with its massive 11 litre capacity
          is great for larger families. It comes with an oil tray as well as a
          rotisserie fork, which is perhaps one of its most appealing features.
          With three air flow racks you will be able to cook a wide variety of
          meals.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ 11 litre capacity</span>
        <span>+ Viewing Window</span>
        <span>+ Removable bowl and rotisserie fork</span>
        <span>+ Auto shut off and overheat protection</span>
        <span>- Takes up a lot of space</span>
        <div className="guidebutton2">
          <span>All Tower air fryers</span>
        </div>
        <h3>Cosori air fryer Premium CP158-AF</h3>
        <p>
          The popular Cosori Air fryer Premium has a 5.5 litre capacity which is
          suitable for about 4 people, depending on how much you cook with your
          air fryer. A unique selling point with this air fryer is the square
          design which as a result offers 15% more cooking area compared with
          the round ones. This is advantageous as many recipes call for an even
          spread of the food in order to cook evenly. It has a touch LED screen
          and 11 pre-settings that will allow you to cook a wide variety of
          dishes.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ Square basket design</span>
        <span>+ 100 Recipes Cookbook</span>
        <span>+ 5.5 litres capacity</span>
        <span>
          + 11 menu presets including settings for desserts, bread and
          vegetables
        </span>
        <span>- Pricey for the size</span>
        <div className="guidebutton2">
          <span>All Cosori air fryers</span>
        </div>
        <h3>Xiaomi Mi Smart air fryer</h3>
        <p>
          If you're looking for a cheap air fryer then the Xiaomi Mi Smart air
          fryer is a great choice! This is a small air fryer that is convenient
          and easy to store and as a result it's also a bit more budget
          friendly, undoubtedly one of the many reasons that the Xiaomi Mi Smart
          air fryer is one of the most popular choices. With a temperature
          choices ranging between 40 and 200 °C you can not only fry but also
          defrost, dry, bake and even ferment. There are also a few cool
          features such as a voice assistant that will let you turn the air
          fryer on and off, in addition to that there is also a scheduled
          cooking feature, that allows you to put food in the air fryer and then
          set a time for when you want the food to cook, so if you come home
          late in the evening you will have a hot meal waiting for you.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ Budget friendly</span>
        <span>+ 100 Recipes Cookbook</span>
        <span>+ Voice assistant as well as scheduled cooking times</span>
        <span>+ Temperature range between 40 and 200 °C</span>
        <span>- Small capacity of 3.5 litres</span>
        <div className="guidebutton2">
          <span>All Xiaomi air fryers</span>
        </div>
        <h3>Tefal air fryer ActiFry Genius XL YV970840</h3>
        <p>
          The Tefal air fryer is one of the most popular models and with some
          innovative features it's not hard to see why. Specifically the Tefal
          ActiFry Genius XL YV970840 model is to most popular of all the Tefal
          air fryers. It has a rotating tray above the fryer bowl which means
          that there are two cooking zones, so you can cook two dishes at once.
          You can also remove the tray and the fryer's one pot feature will
          double as a slow cooker so you can cook a wide variety of dishes.
          There are many automatic programs as well as entirely customisable
          settings available.
        </p>
        <h4>Pros and Cons</h4>
        <span>+ Several different settings</span>
        <span>+ Viewing window</span>
        <span>+ Double bowls with two cooking zones</span>
        <span>+ Dishwasher compatible</span>
        <span>- Expensive</span>
        <div className="guidebutton2">
          <span>All Tefal air fryers</span>
        </div>
        <h3>Salter EK5196 Dual Air Pro Air Fryer</h3>
        <p>
          Perhaps not one of the most well known brands, but the Salter air
          fryers are incredibly popular and highly reviewed none the less. The
          Salter Dual Air Pro air fryer has a 7,6 litre capacity it's also a
          double air fryer, as well as sensor touch control and 10 cooking
          functions.
        </p>
        <h4>Pros and Cons</h4>
        <span>
          + Two compartments allow you to cook 2 different foods at the same
          time
        </span>
        <span>+ 7.6 litre capacity</span>
        <span>+ Rise and fall basket to allow oil to drain from food</span>
        <span>+ 2 cooking compartments</span>
        <span>- Not much surface area to cook larger produce</span>
        <div className="guidebutton2">
          <span>All Salter air fryers</span>
        </div>
        <h3>Air Fryer Accessories</h3>
        <p>
          Make the most of your air fryer with some really useful air fryer
          accessories, with everything from baking sheets made especially for
          air fryers and cupcake forms to grill racks and skewers.
        </p>
        <div className="guidebutton2">
          <span>All air fryer accessories</span>
        </div>
        <h3>Air Fryer Recipes for the UK</h3>
        <p>
          Let your imagination run wild when cooking with your air fryer, not
          just chips - think of it as more of a convection oven rather than a
          deep fat fryer. You can cook anything from roast potatoes in your air
          fryer as well as some delicious crispy bacon in air fryer, don't be
          limited to just air fryer chips and sausages in your air fryer!
        </p>
        <h4>Air fryer recipe books:</h4>
        <li>Air Fryer Cookbook For Dummies</li>
        <li>Keto Kitchen: Air Fryer Cookbook</li>
        <li>The Essential Air Fryer Cookbook</li>
        <li>The Complete Air Fryer Cookbook</li>
        <li>The air fryer cookbook</li>
        <div className="guidebutton3">
          <span>Read more about air fryers</span>
        </div>
        <h3>Black Friday's around the corner!</h3>
        <p>So are the best deals on air fryers. Keep an eye on prices.</p>
        <div className="guidebutton3">
          <span>Black Friday 2023 Deals</span>
        </div>
      </div>
    </div>
  );
}

export default Second;
