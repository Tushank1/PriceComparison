import React from "react";
import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./page/Error";
import Product from "./page/Product";
import How_to_use from "./page/How";
import About_us from "./page/About";
import Interior from "./page/Interior";
import Patio from "../src/page/Gardern";
import KidsFamily from "./page/Kids&Family";
import ToysHobbies from "./page/ToysHobbies";
import GamingEntertainment from "./page/Gaming&Entertainment";
import Computing from "./page/Computer";
import Wearables from "./page/Wearables";
import Vision from "./page/Vision";
import Photograph from "./page/Photograph";
import Cloth from "./page/Cloth";
import HealthBeauty from "./page/Health&Beauty";
import SportsOutdoor from "./page/Sports&Outdoor";
import Motor from "./page/Motor";
import Categories from "./page/Categories";
import ExtraElement from "./page/ExtraElement";
import PopularProduct from "./products/PopularProducts";
import Deal from "./products/Deal";
import First from "./guidePages/H&I/First";
import Second from "./guidePages/H&I/Second";
import Third from "./guidePages/H&I/Third";
import Fourth from "./guidePages/H&I/Fourth";
import Five from "./guidePages/H&I/Five";
import Six from "./guidePages/H&I/Six";
import Seven from "./guidePages/H&I/Seven";
import Eight from "./guidePages/H&I/Eight";
import Nine from "./guidePages/H&I/Nine";
import Ten from "./guidePages/H&I/Ten";
import Twelve from "./guidePages/H&I/Twelve";
import Eleven from "./guidePages/H&I/Eleven";
import Fourteen from "./guidePages/H&I/Fourteen";
import Thirteen from "./guidePages/H&I/Thirteen";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/info" element={<How_to_use />} />
            <Route path="/about" element={<About_us />} />
            <Route path="/home&Interior" element={<Interior />} />
            <Route path="/gardern&Patio" element={<Patio />} />
            <Route path="/kids&Family" element={<KidsFamily />} />
            <Route path="/computing" element={<Computing />} />
            <Route path="/toys&Hobbies" element={<ToysHobbies />} />
            <Route
              path="/gaming&Entertainment"
              element={<GamingEntertainment />}
            />
            <Route path="/phones&Wearables" element={<Wearables />} />
            <Route path="/sound&Vision" element={<Vision />} />
            <Route path="/photography" element={<Photograph />} />
            <Route path="/clothing" element={<Cloth />} />
            <Route path="/health&Beauty" element={<HealthBeauty />} />
            <Route path="/sportsOutdoor" element={<SportsOutdoor />} />
            <Route path="/yourself" element={<ExtraElement />} />
            <Route path="/MotorTransport" element={<Motor />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/popularProducts" element={<PopularProduct />} />
            <Route path="/deal" element={<Deal />} />
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
            <Route path="/five" element={<Five />} />
            <Route path="/six" element={<Six />} />
            <Route path="/seven" element={<Seven />} />
            <Route path="/eight" element={<Eight />} />
            <Route path="/nine" element={<Nine />} />
            <Route path="/ten" element={<Ten />} />
            <Route path="/eleven" element={<Eleven />} />
            <Route path="/twelve" element={<Twelve />} />
            <Route path="/thirteen" element={<Thirteen />} />
            <Route path="/fourteen" element={<Fourteen />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
