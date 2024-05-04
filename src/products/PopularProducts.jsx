import React from "react";
import "./PopularProducts.css";
import Cart from "./Cart";
import PopularProducts from "../Data/PopularProducts";

function PopularProduct() {
  return (
    <>
      <div className="main_container">
        <div className="upper">
          <div className="update">
            <span>Updated 4 May 2024</span>
          </div>
          <div className="Productsheading">
            <h1>Most popular products right now</h1>
          </div>
          <div className="website">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUzHyguHyclHyUoHyYwHydiHjSsGkuTG0M9HysgHyQxHyjzFGKWG0SzGU0cICQ0HynrFF8AICAKICEZICO4GU/WFlncFVqlGknGGFQVICJEHy1SHzFZHjKKHEDCGFJ7HTwrHybPF1eFGkE/Hyt9HD2iyo+uAAAAzElEQVR4AcXRU6LEMAAF0MZ2be1/jc9M5ntu3ROnemYAfA/CJSP0PYwL+d8kVIxpzbRRxsr/6HxA8S2pbpLMMMmmbZsOhr6DGQ7cj9Nct9YpKws4ABD7JTYEFDBVFWImrtue42ErENdizeROkSbqi32mim+qNXtxtAnMnodo1yZVOUKzLuzBCqV9M8YwPooSSj1A9Nr2MeQ48Fd3Jw4HywcUsE/VftII1PVvU62n9BWl8KZrGvEX8aj1vb8+udZseX35qwjtn8/Xl+flBWovD+P4WnTiAAAAAElFTkSuQmCC"
              alt=""
            />
            <h5>PriceCompare</h5>
          </div>
          <div className="para">
            <p>
              What products are trending this week? Here we list the most
              searched for products on PriceCompare right now!
            </p>
            <img
              src="https://www.pricerunner.com/images/assets/content/bit/board/PriceRunner_Most-Popular_Cover.png?d=896x504"
              alt=""
            />
            <p>
              What we consider the most popular products is constantly changing,
              but here you can see the most searched for product in the past
              week.
            </p>
          </div>
        </div>
        <div className="down">
          <div className="downhead">
            <h3>Trending right now</h3>
          </div>
          <div className="productrow">
            {PopularProducts?.map((products) => {
              return (
                <Cart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
