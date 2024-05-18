import React from "react";
import "./ItemData.css";
import ItemCart from "./ItemCart";
import { useState } from "react";
import Product_top from "../pro_components/Product_top";

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
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };
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
                  onItemSelect={handleItemSelect}
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
                  onItemSelect={handleItemSelect}
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
                  onItemSelect={handleItemSelect}
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
        {selectedItem && <Product_top item={selectedItem} />}
      </div>
    </>
  );
}

export default ItemData;
