import React from "react";
import "./Compare.css";

function Compare() {
  return (
    <>
      <div className="compare_heading">
        <h1>Compare price</h1>
        <p>
          We at PriceCompare think that it’s important that you always get the
          best price, and above all that you are happy with your purchase.
          That’s why we have developed several useful functions to help you
          along. We got your back! So that you can be sure that both the product
          and shop you choose match your expectations.
        </p>
      </div>
      <div className="price">
        <h2>Finding the best price</h2>
        <p>
          Interested in how to find the best price using PriceRunner? Here you
          can find more information on{" "}
          <span>delivery, shipping and payment options</span>, you can also find{" "}
          <span>reviews and tests</span>, as well as how to check the{" "}
          <span>price history</span> and <span>shop information.</span>
        </p>
        <h3>Filter for delivery, shipping & payment options</h3>
        <p>
          Interested in how to find the best price using PriceRunner? Here you
          can find more information on delivery, shipping and payment options,
          you can also find reviews and tests, as well as how to check the price
          history and shop information.
        </p>
        <li>Select “Filter”.</li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/3zewSulHlqJBjOCfIFowYG/8d53fcf3ddf4ef7d3903a1ee92668d75/compare_prices_filter.jpg"
          alt=""
        />
        <li>
          Select the boxes of the filters you wish to activate. The products
          will be updated autmotically below.
        </li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/1zf9cbYChWgk3CsfIASX5Y/5bb4aecc67309873b04fc4b28b03d496/compare_prices_expand_filter.jpg"
          alt=""
        />
        <li>
          Compare the different options to determine which shops suits your
          needs the best!
        </li>
      </div>
      <div className="review">
        <h2>Reviews & tests</h2>
        <p>
          When deciding what to buy, other people’s recommendations and
          experience with the product is invaluable. Via our function “Reviews”
          our members can leave reviews, ask questions and share their
          experiences of the product. By reading reviews you can quickly get
          help and a form an idea of whether or not this product is suited for
          you.
        </p>
        <p>
          Besides reading reviews from other users, our expert tests can be of
          great help when you’re in the decission making process. Our experts at
          PriceRunner conduct entirely independent test within a wide range of
          product categories. Everything is tested in a natural environment and
          it is tested in the way the product is intended to be used. This
          assures not only transparency but also real-life results from the
          tests that accuratley reflect the products qualities.
        </p>
        <li>Select “Reviews and tests.”</li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/5YWYQgzhNv8lUdLLUa3txA/dd3f4cd9cb68e53e103149604217a67f/reviews_tests.jpg"
          alt=""
          className="first"
        />
        <li>
          You will get a quick overview of what the test of the product has
          concluded. Just below you can read and leave reviews of the product.
        </li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/7oeRPMup1YpiQw9UOauWUW/43550ea6d8095a10e32618ee2b2e6cdc/tested_product.jpg"
          alt=""
          className="second"
        />
        <li>
          Under reviews you will find “Questions and answers”. Here you can ask
          questions about the products as well as answering other members
          questions.
        </li>
      </div>
      <div className="history">
        <h2>Price history</h2>
        <p>
          To be completely sure that your getting the best deal possible on your
          purchase it’s good to check the price history before you buy. This way
          you can easily see the price development over the past few months and
          quickly determine if you’re actually getting a good deal or not, or if
          it is in fact a “fake deal” and you migth be better off waiting for
          the price to drop further.
        </p>
        <li>Select “Statistics”</li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/7sY4bt0l7pphkSEzRrD3lP/e7641ed49c9cc5fd041cba2d39d50996/statistics.jpg"
          alt=""
          className="first"
        />
        <li>
          Choose if you want to show the price history for the past few months
          or if you want to compare during a longer period of time.
        </li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/6DhU416p743KpesUe9Ubnx/96c64e7979be4e0b4d4056b22c07f6d5/price_history.jpg"
          alt=""
          className="graph"
        />
        <li>
          By selecting “Choose store” you can see the price development for a
          specific shop.
        </li>
        <li>
          If you want to be notified when the price of a product drops, select
          “Price alert”.
        </li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/3pyt2ZzCdY2dQY6qvtBQG2/902eaaf5a61cadbbdc90dfa3f7199842/price_alert.jpg"
          alt=""
          className="alert"
        />
      </div>
      <div className="information">
        <h2>Shop information</h2>
        <p>
          Delivery times, payment options and terms & conditions often vary from
          store to store. This is a good thing to keep in mind when buying a
          product. Luckily we have made it very simple for you to get a quick
          overview of what each store has to offers. So that you can feel
          completely safe with your choice of both shop and product.
        </p>
        <li>Select the arrow to the left of the shop name.</li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/62aNo5RHVoqAiTZn3e4Tyo/fa1ba4245e859bf7b4ff10ff53e277c5/store_information.jpg"
          alt=""
          className="first"
        />
        <li>
          Get information about the shops reviews, payment and delivery options.
        </li>
        <img
          src="https://images.ctfassets.net/31h9ykss8g0q/24gp1seXveBlRiaioG34lg/7b5dc275abb7f067e78eb1ace5802e0f/detailed_store_information.jpg"
          alt=""
          className="second"
        />
        <p>
          Below the shop information you can also see if there are any other
          product versions. There may for example be other colours options
          available on the headphones you want to buy. You can then get a quick
          overview if this and compare products and prices, to easily make a
          good purchasing decision.
        </p>
        <a href="#top">Back to the top</a>
      </div>
    </>
  );
}

export default Compare;
