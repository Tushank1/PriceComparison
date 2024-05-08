import React from "react";
import Body_top from "../components/Body_top";
import Body_top_bottom from "../components/Body_top_bottom";
import ItemData from "../components/ItemData";
import PopularProducts from "../Data/PopularProducts";
import BestDeal from "../Data/BestDeal";
import Banner from "../components/Banner";
import Sound from "../Data/Sound";
import Shoes from "../Data/Shoes";
import Beauty from "../Data/Beauty";
import Phones from "../Data/Phone";
import Perfume from "../Data/Perfume";
import Banner_2 from "../components/Banner_2";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Body_top />
      <Body_top_bottom />
      <ItemData
        title="Popular Products right now"
        subtitle="See all popular products"
        popularProducts={PopularProducts}
        onSubTitleClick={() => navigate("/popularProducts")}
      />
      <ItemData
        title="The best deals of the day"
        subtitle="Find all deals in one place!"
        bestDeal={BestDeal}
        onSubTitleClick={() => navigate("/deal")}
      />
      <Banner />
      <ItemData
        title="Find a new Sound"
        subtitle="Immerse yourself completely in the music with a pair of over-ear headphones"
        sound={Sound}
      />
      <ItemData
        title="Time to bring out the running shoes"
        subtitle="With warmer weather it's finally time to gear up and enjoy an outside run"
        shoes={Shoes}
      />
      <ItemData
        title="Trendy Spring Perfumes"
        subtitle="Take a look amongst popular favourites to find your spring perfume"
        perfume={Perfume}
      />
      <ItemData
        title="Mobile phones"
        subtitle="We have gathered all affordable mobile phones"
        phones={Phones}
      />
      <ItemData
        title="Trending beauty products"
        subtitle="Viral favourites that are topping the list right now"
        beauty={Beauty}
      />
      <Banner_2 />
    </div>
  );
}

export default Home;
