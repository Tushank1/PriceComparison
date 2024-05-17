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
import Guide from "./guidePages/Guide";
import Fifteen from "./guidePages/H&I/Fifteen";
import Sixteen from "./guidePages/H&I/Sixteen";
import Seventeen from "./guidePages/H&I/Seventeen";
import Eighteen from "./guidePages/H&I/Eighteen";
import Nineteen from "./guidePages/H&I/Nineteen";
import Twenty from "./guidePages/H&I/Twenty";
import Twentyone from "./guidePages/H&I/Twentyone";
import Twentytwo from "./guidePages/H&I/Twentytwo";
import Twentythree from "./guidePages/H&I/Twentythree";
import K_First from "./guidePages/K&F/K_First";
import K_Second from "./guidePages/K&F/K_Second";
import K_Third from "./guidePages/K&F/K_Third";
import K_Fourth from "./guidePages/K&F/K_Fourth";
import K_Five from "./guidePages/K&F/K_Five";
import Twentyfour from "./guidePages/H&I/Twentyfour";
import Twentyfive from "./guidePages/H&I/Twentyfive";

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
            <Route path="/fifteen" element={<Fifteen />} />
            <Route path="/sixteen" element={<Sixteen />} />
            <Route path="/seventeen" element={<Seventeen />} />
            <Route path="/eighteen" element={<Eighteen />} />
            <Route path="/nineteen" element={<Nineteen />} />
            <Route path="/twenty" element={<Twenty />} />
            <Route path="/twentyone" element={<Twentyone />} />
            <Route path="/twentytwo" element={<Twentytwo />} />
            <Route path="/twentythree" element={<Twentythree />} />
            <Route path="/twentyfour" element={<Twentyfour />} />
            <Route path="/twentyfive" element={<Twentyfive />} />
            <Route path="/k_first" element={<K_First />} />
            <Route path="/k_second" element={<K_Second />} />
            <Route path="/k_third" element={<K_Third />} />
            <Route path="/k_fourth" element={<K_Fourth />} />
            <Route path="/k_five" element={<K_Five />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
