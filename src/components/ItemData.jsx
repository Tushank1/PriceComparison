import React from "react";
import "./ItemData.css";
import ItemCart from "./ItemCart";

function ItemData({
  title,
  subtitle,
  populardata,
  bestDealData,
  shoesData,
  soundData,
  phonesData,
  beautydata,
  perfumeData,
  onSubTitleClick,
}) {
  return (
    <>
      <div className="main_container">
        <div className="heading">
          <h1>{title}</h1>
          <p onClick={onSubTitleClick}>{subtitle}</p>
          <div className="row">
            {populardata?.map((product) => (
              <ItemCart
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                rating={product.rating}
              />
            ))}
            {bestDealData?.map((deals) => {
              return (
                <ItemCart
                  key={deals.id}
                  id={deals.id}
                  price={deals.price}
                  img={deals.img}
                  rating={deals.rating}
                  name={deals.name}
                />
              );
            })}
            {soundData?.map((products) => {
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
            {shoesData?.map((products) => {
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
            {perfumeData?.map((products) => {
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
            {phonesData?.map((products) => {
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
            {beautydata?.map((products) => {
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
