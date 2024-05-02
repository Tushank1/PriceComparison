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
import DoItYourself from "./page/DoItYourself";
import Motor from "./page/Motor";

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
            <Route path="/yourself" element={<DoItYourself />} />
            <Route path="/MotorTransport" element={<Motor />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
