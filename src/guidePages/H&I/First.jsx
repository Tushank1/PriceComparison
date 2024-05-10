import React from "react";
import "./First.css";
import { TbSlash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();

  return (
    <div className="first">
      <div className="guidetop">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon" />
        <span>Guides</span>
      </div>
      <div className="guideUpdate">
        <span>Updated 10 May 2024</span>
      </div>
      <div className="guideContext">
        <h1>Unexpected Air Fryer Recipes</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_5708653723678100708.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>Zara Andrén</span>
          </div>
        </div>
        <div className="guideDesc">
          <p>
            Although most people have at this point invested in an air fryer,
            not many are certain of what exactly to cook in it. Of course, we
            are all familiar with the basics recipies for air fryers, such as
            chips, frozen food etc. But did you know that there are actually a
            wide variety of foods that you can make in your air fryer? Such as,
            vegetables, bread and even cakes! We have gathered some fun air
            fryer recipes for beginners as well as novices, along with some
            healthy air fryer recipes and some delicious treats!
          </p>
        </div>
        <div className="guideVideo">
          <iframe
            width="750"
            height="394"
            src="https://www.youtube.com/embed/tUtUNqz6ZRI"
            title="15 AIR FRYER RECIPES | WHAT TO COOK IN YOUR AIR FRYER | KERRY WHELPDALE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <h3>Best Air Fryer Recipes to try out</h3>
        <p>
          Whether you are looking for healthy air fryer recipes or air fryer
          recipes that are something out of the ordinary, or if you're looking
          for some ninja air fryer recipes, we have gathered some unusual and
          fun ones to help you make the most of your air fryer! And although
          there are many recipes available online these air fryer recipes UK
          focus will help make sure that you get the best recipes and
          measurements for your air fryer. We even have some air fryer recipes
          for beginner UK that are not only easy to make but also delicious!
        </p>
        <div className="guideButton">
          <span>All air fryers</span>
        </div>
        <h3>Roast Potatoes in Air Fryer</h3>
        <p>
          Everyone's Sunday roast favourite can be made in an air fryer! Take a
          look at this recipe for the perfect roast potato that is equal part
          fluff, equal part crips and of course made in an air fryer!
        </p>
        <div className="guideButton2">
          <span>Roast Potatos Recipe</span>
        </div>
        <h3>How to Make Air Fryer Chips</h3>
        <p>
          Frozen chips are perhaps a given to make in an air fryer, but why not
          try making them from fresh potatoes? You will get a crispier and nicer
          flavour.
        </p>
        <div className="guideButton2">
          <span>Air Fryer Chips Recipe</span>
        </div>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Jacket_Potato_Air_Fryer.jpg"
          alt=""
        />
        <h3>How to Make a Jacket Potato in an Air Fryer</h3>
        <p>
          Jacket potatoes are a lunch time classic, and did you know that you
          can make them in your air fryer? Basically you will get the nice
          crispy skin, without having to use your oven and at a fraction of the
          time.
        </p>
        <div className="guideButton3">
          <span>Jacket Potatoes Air Fryer Recipe</span>
        </div>
        <h3>Christmas/ Roast dinner in an air fryer</h3>
        <p>
          If you really want to push your air fryer to it's limit and test what
          it is truly capable of, then why not cook an entire roast dinner in
          your air fryer? It is not only doable, it is also delicious and
          actually will save you some time.
        </p>
        <div className="guideButton3">
          <span>Christmas Dinner in Air Fryer Recipe</span>
        </div>
        <h3>Pizza leftovers</h3>
        <p>
          Place the pizza slices one by one in the air fryer, or stack two
          pieces with the filling against each other. Cook at 175 degrees for
          3-4 minutes (thinner pizza will cook faster so keep an eye on it).
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/roast_dinner_air_fryer.jpg"
          alt=""
        />
        <h3>Cheetos Mozzarella Sticks</h3>
        <p>
          Mix Cheetos (regular or Flaming Hot) in a food processor. Beat an egg
          and pour into a plate and fill another plate with flour. Dip your
          mozzarella sticks in egg, then flour and finally the Cheetos crumbs.
          Cook in the air fryer at 200 degrees for 5 minutes or until the crust
          is crispy and the inside melty.
        </p>
        <h3>Oreos</h3>
        <p>
          Everyone's favourite cookie can become even tastier in an air fryer!
          Check out this recipe to see how to make amazingly fluffy and
          irresistible Oreos dipped in pancake batter!
        </p>
        <h3>Focaccia</h3>
        <p>
          Make focaccia dough. After rising; divide the dough into small
          squares, about 1.5 cm thick. Heat the air fryer to 185 degrees. Place
          a piece of dough in the air fryer and cook for 6 minutes, flip and
          cook for another 4 minutes.
        </p>
        <h3>Eggs</h3>
        <p>
          Put eggs in the basket and cook at 140 degrees for 10 minutes for
          perfectly cooked eggs!
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Healthy_Air_Fryer_Recipes.jpg"
          alt=""
        />
        <h3>Muffins</h3>
        <p>
          Use any muffin recipe. Fill muffin tins 3/4 full and bake in your
          airfryer at 160 degrees for about 15 minutes. Feel free to decorate
          with frosting!
        </p>
        <h3>Scones</h3>
        <p>
          Make a regular scones dough. Divide the dough into 4-8 parts and bake
          in the air fryer for 10 minutes at 180 degrees
        </p>
        <h3>Roasted Veg</h3>
        <p>
          If you want healthy air fryer recipes, then you can never go wrong
          with cooking anything veg. Just pick you favourite veg, chop them up,
          use spray food oil and seasoning and then cook in your air fryer until
          crisp and soft.
        </p>
        <h3>5 Advantages of cooking in an air fryer</h3>
        <ol>
          <li>It consumes less energy so it helps to save money</li>
          <li>
            It's healthier, as most air fryers require little to no oil you
            subsequently reduce the fat percentage in traditionally fried dishes
            by up to 90%.
          </li>
          <li>
            You save time. Since there is no preheat period you use less energy
            and time.
          </li>
          <li>
            Safer cooking as there is no risk of oil catching fire or splashing
            up from the pot and burning you.
          </li>
          <li>
            It's easy to vary as you can cook everything from potatoes and
            vegetables to fish, meat and desserts!
          </li>
        </ol>
        <h3>More about air fryers</h3>
        <p>
          Want to learn more about air fryers? We have gathered all the
          information you need to make the most of your air fryer, and how to
          clean your air fryer as well as guides of popular models such as the
          Ninja, Tefal and Philips air fryers.
        </p>
        <div className="guideButton2">
          <span>All About Air Fryers</span>
        </div>
      </div>
    </div>
  );
}

export default First;
