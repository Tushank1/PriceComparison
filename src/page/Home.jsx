import React, { useEffect, useState, useCallback } from "react";
import Body_top from "../components/Body_top";
import Body_top_bottom from "../components/Body_top_bottom";
import ItemData from "../components/ItemData";
import Banner from "../components/Banner";
import Banner_2 from "../components/Banner_2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [dealProducts, setDealProducts] = useState([]);
  const [soundProducts, setSoundProducts] = useState([]);
  const [shoeProducts, setShoeProducts] = useState([]);
  const [perfumeProducts, setPerfumeProducts] = useState([]);
  const [phoneProducts, setPhoneProducts] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/allproducts");
      setAllProducts(response.data);

      const popular = response.data.filter(
        (product) => product.category === "popular"
      );
      console.log("Popular products:", popular);
      setPopularProducts(popular);

      const deal = response.data.filter(
        (product) => product.category === "deal"
      );
      console.log("Deal products:", deal);
      setDealProducts(deal);

      const sound = response.data.filter(
        (product) => product.category === "sound"
      );
      console.log("Sound products:", sound);
      setSoundProducts(sound);

      const shoe = response.data.filter(
        (product) => product.category === "shoe"
      );
      console.log("Shoe products:", shoe);
      setShoeProducts(shoe);

      const perfume = response.data.filter(
        (product) => product.category === "shoe"
      );
      console.log("Perfume products:", perfume);
      setPerfumeProducts(perfume);

      const phone = response.data.filter(
        (product) => product.category === "phone"
      );
      console.log("Phone products:", phone);
      setPhoneProducts(phone);

      const beauty = response.data.filter(
        (product) => product.category === "beauty"
      );
      console.log("Beauty products:", beauty);
      setBeautyProducts(beauty);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Add the memoized function as a dependency

  return (
    <div>
      <Body_top />
      <Body_top_bottom />
      <ItemData
        title="Popular Products right now"
        subtitle="See all popular products"
        populardata={popularProducts}
        onSubTitleClick={() => navigate("/popularProducts")}
      />
      <ItemData
        title="The best deals of the day"
        subtitle="Find all deals in one place!"
        bestDealData={dealProducts}
        onSubTitleClick={() => navigate("/deal")}
      />
      <Banner />
      <ItemData
        title="Find a new Sound"
        subtitle="Immerse yourself completely in the music with a pair of over-ear headphones"
        soundData={soundProducts}
      />
      <ItemData
        title="Time to bring out the running shoes"
        subtitle="With warmer weather it's finally time to gear up and enjoy an outside run"
        shoesData={shoeProducts}
      />
      <ItemData
        title="Trendy Spring Perfumes"
        subtitle="Take a look amongst popular favourites to find your spring perfume"
        perfumeData={perfumeProducts}
      />
      <ItemData
        title="Mobile phones"
        subtitle="We have gathered all affordable mobile phones"
        phonesData={phoneProducts}
      />
      <ItemData
        title="Trending beauty products"
        subtitle="Viral favourites that are topping the list right now"
        beautydata={beautyProducts}
      />
      <Banner_2 />
    </div>
  );
}

export default Home;
