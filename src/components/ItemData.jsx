import React from "react";
import "./ItemData.css";
import ItemCart from "./ItemCart";

function ItemData({
  title,
  subtitle,
  popularProducts,
  bestDeal,
  shoes,
  sound,
  phones,
  beauty,
  perfume,
  onSubTitleClick,
}) {
  return (
    <>
      <div className="main_container">
        <div className="heading">
          <h1>{title}</h1>
          <p onClick={onSubTitleClick}>{subtitle}</p>
          <div className="row">
            {popularProducts?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {bestDeal?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {sound?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {shoes?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {perfume?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {phones?.map((products) => {
              return (
                <ItemCart
                  key={products.id}
                  id={products.id}
                  price={products.price}
                  img={products.img}
                  rating={products.rating}
                  name={products.name}
                />
              );
            })}
            {beauty?.map((products) => {
              return (
                <ItemCart
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

export default ItemData;
