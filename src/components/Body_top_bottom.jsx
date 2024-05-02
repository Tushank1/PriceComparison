import React from "react";
import "./Body_top_bottom.css";
import HeaderOption from "./HeaderOption";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { GiCurledLeaf } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineToys } from "react-icons/md";
import { SiPcgamingwiki } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoIosBasketball } from "react-icons/io";
import { GiScrewdriver } from "react-icons/gi";
import { GiScooter } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Body_top_bottom() {
  const navigate = useNavigate();

  return (
    <div className="header_icon">
      <HeaderOption
        Icon={MdOutlineAddHomeWork}
        title="Home & Interior"
        onClick={() => {
          navigate("/home&Interior", { state: { title: "Home & Interior" } });
        }}
      />
      <HeaderOption
        Icon={GiCurledLeaf}
        title="Garden & Patio"
        onClick={() => {
          navigate("/gardern&Patio", { state: { title: "Garden & Patio" } });
        }}
      />
      <HeaderOption
        Icon={MdFamilyRestroom}
        title="Kids & Family"
        onClick={() => {
          navigate("/kids&Family", { state: { title: "Kids & Family" } });
        }}
      />
      <HeaderOption
        Icon={MdOutlineToys}
        title="Toys & Hobbies"
        onClick={() => {
          navigate("/toys&Hobbies", { state: { title: "Toys & Hobbies" } });
        }}
      />
      <HeaderOption
        Icon={SiPcgamingwiki}
        title="Gaming & Entertainment"
        onClick={() => {
          navigate("/gaming&Entertainment", {
            state: { title: "Gaming & Entertainment" },
          });
        }}
      />
      <HeaderOption
        Icon={FaComputer}
        title="Computing"
        onClick={() => {
          navigate("/computing", {
            state: { title: "Computing" },
          });
        }}
      />
      <HeaderOption
        Icon={MdOutlinePhoneAndroid}
        title="Phones & Wearables"
        onClick={() => {
          navigate("/phones&Wearables", {
            state: { title: "Phones & Wearables" },
          });
        }}
      />
      <HeaderOption
        Icon={GiSoundWaves}
        title="Sound & Vision"
        onClick={() => {
          navigate("/sound&Vision", {
            state: { title: "Sound & Vision" },
          });
        }}
      />
      <HeaderOption
        Icon={FaCameraRetro}
        title="Photography"
        onClick={() => {
          navigate("/photography", {
            state: { title: "Photography" },
          });
        }}
      />
      <HeaderOption
        Icon={GiHanger}
        title="Clothing & Accessories"
        onClick={() => {
          navigate("/clothing", {
            state: { title: "Clothing & Accessories" },
          });
        }}
      />
      <HeaderOption
        Icon={RiMentalHealthLine}
        title="Health & Beauty"
        onClick={() => {
          navigate("/health&Beauty", {
            state: { title: "Health & Beauty" },
          });
        }}
      />
      <HeaderOption
        Icon={IoIosBasketball}
        title="Sports & Outdoor"
        onClick={() => {
          navigate("/sportsOutdoor", {
            state: { title: "Sports & Outdoor" },
          });
        }}
      />
      <HeaderOption
        Icon={GiScrewdriver}
        title="Do it yourself"
        onClick={() => {
          navigate("/yourself", {
            state: { title: "Do it yourself" },
          });
        }}
      />
      <HeaderOption
        Icon={GiScooter}
        title="Motor Transport"
        onClick={() => {
          navigate("/MotorTransport", {
            state: { title: "Motor Transport" },
          });
        }}
      />
    </div>
  );
}

export default Body_top_bottom;
