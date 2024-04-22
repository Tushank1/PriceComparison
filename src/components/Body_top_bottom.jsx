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

function Body_top_bottom() {
  return (
    <div className="header_icon">
      <HeaderOption Icon={MdOutlineAddHomeWork} title="Home & Interior" />
      <HeaderOption Icon={GiCurledLeaf} title="Garden & Patio" />
      <HeaderOption Icon={MdFamilyRestroom} title="Kids & Family" />
      <HeaderOption Icon={MdOutlineToys} title="Toys & Hobbies" />
      <HeaderOption Icon={SiPcgamingwiki} title="Gaming & Entertainment" />
      <HeaderOption Icon={FaComputer} title="Computing" />
      <HeaderOption Icon={MdOutlinePhoneAndroid} title="Phones & Wearables" />
      <HeaderOption Icon={GiSoundWaves} title="Sound & Vision" />
      <HeaderOption Icon={FaCameraRetro} title="Photography" />
      <HeaderOption Icon={GiHanger} title="Clothing & Accessories" />
      <HeaderOption Icon={RiMentalHealthLine} title="Health & Beauty" />
      <HeaderOption Icon={IoIosBasketball} title="Sports & Outdoor" />
      <HeaderOption Icon={GiScrewdriver} title="Do it yourself" />
      <HeaderOption Icon={GiScooter} title="Motor Transport" />
    </div>
  );
}

export default Body_top_bottom;
