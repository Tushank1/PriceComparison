import React from "react";
import "./Deal.css";
import BestDeal from "../Data/BestDeal";
import Dealcart from "./Dealcart";
import { FaAngleDown } from "react-icons/fa6";

function Deal() {
  return (
    <>
      <div className="dealMain">
        <div className="dealUpper">
          <div className="dealImage">
            <img
              src="https://images.ctfassets.net/31h9ykss8g0q/1tEGA1cXecAvcsIVKK1CMT/bc3c9cc1a838fe4d4ea0d003378b15b6/deal_of_the_day.jpg?q=80&fm=avif"
              alt=""
            />
          </div>
          <div className="dealText">
            <div className="dealHead">
              <h1>Get the best price</h1>
            </div>
            <div className="dealPara">
              <p>
                We scan millions of products daily to show today's lowest sale
                price and compare prices to the average of the last 30 days.
              </p>
            </div>
          </div>
        </div>
        <div className="dealLower">
          <div className="dealLeft">
            <div className="dealLeftHeading">
              <h1>Filter</h1>
            </div>
            <div className="dealsale">
              <div className="dealsaleHead">
                <div className="dealsaleText">
                  <p>Sale</p>
                </div>
                <div className="dealicon">
                  <FaAngleDown />
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>50% or more</p>
                <div className="dealview">
                  <p>12048</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>25% or more</p>
                <div className="dealview">
                  <p>77549</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>10% or more</p>
                <div className="dealview">
                  <p>270428</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>5% or more</p>
                <div className="dealview">
                  <p>495832</p>
                </div>
              </div>
            </div>
            <div className="dealsale">
              <div className="dealsaleHead">
                <div className="dealsaleText">
                  <p>Price</p>
                </div>
                <div className="dealicon">
                  <FaAngleDown />
                </div>
              </div>
              <div className="dealgraph"></div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Up to €10</p>
                <div className="dealview">
                  <p>56871</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>€10 - €70</p>
                <div className="dealview">
                  <p>153448</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>At least €70</p>
                <div className="dealview">
                  <p>55792</p>
                </div>
              </div>
            </div>
            <div className="dealsale">
              <div className="dealsaleHead">
                <div className="dealsaleText">
                  <p>Category</p>
                </div>
                <div className="dealicon">
                  <FaAngleDown />
                </div>
              </div>
              <div className="searching">
                <input type="text" placeholder="Find Category" />
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Mobile Phones</p>
                <div className="dealview">
                  <p>222</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Game Consoles</p>
                <div className="dealview">
                  <p>18</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Headphones</p>
                <div className="dealview">
                  <p>661</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Shoes</p>
                <div className="dealview">
                  <p>9859</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Washing Machines</p>
                <div className="dealview">
                  <p>48</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Watches</p>
                <div className="dealview">
                  <p>2517</p>
                </div>
              </div>
            </div>
            <div className="dealsale">
              <div className="dealsaleHead">
                <div className="dealsaleText">
                  <p>Retailer</p>
                </div>
                <div className="dealicon">
                  <FaAngleDown />
                </div>
              </div>
              <div className="searching">
                <input type="text" placeholder="Find Retailer" />
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Amazon</p>
                <div className="dealview">
                  <p>117156</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Buycarparts</p>
                <div className="dealview">
                  <p>10913</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Autodoc</p>
                <div className="dealview">
                  <p>9675</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Tirendo</p>
                <div className="dealview">
                  <p>8300</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Winparts</p>
                <div className="dealview">
                  <p>7871</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>OnBuy</p>
                <div className="dealview">
                  <p>7825</p>
                </div>
              </div>
            </div>
            <div className="dealsale">
              <div className="dealsaleHead">
                <div className="dealsaleText">
                  <p>Brand</p>
                </div>
                <div className="dealicon">
                  <FaAngleDown />
                </div>
              </div>
              <div className="searching">
                <input type="text" placeholder="Find Brand" />
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Apple</p>
                <div className="dealview">
                  <p>131</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Sony</p>
                <div className="dealview">
                  <p>98</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Samsung</p>
                <div className="dealview">
                  <p>419</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>adidas</p>
                <div className="dealview">
                  <p>1674</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Nike</p>
                <div className="dealview">
                  <p>1258</p>
                </div>
              </div>
              <div className="dealcontent">
                <input type="checkbox" className="checkbox" />
                <p>Emporio Armani</p>
                <div className="dealview">
                  <p>155</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dealRight">
            <div className="dealRightHead">
              <div className="dealRightText">
                <p>1000+products</p>
              </div>
              <div className="dealRightSort">
                <div className="dealRightSortText">
                  <p>Sort by best</p>
                </div>
                <div className="dealRightSortImage">
                  <FaAngleDown />
                </div>
              </div>
            </div>
            <div className="dealrow">
              {BestDeal?.map((products) => {
                return (
                  <Dealcart
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
      </div>
    </>
  );
}

export default Deal;
