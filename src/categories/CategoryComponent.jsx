import React, { useState } from "react";
import "./CategoryComponent.css";
import CategoryOption from "./CategoryOption";
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
import IconContent from "./IconContent";
import PatioGardern from "./PatioGardern";
import FamilyKids from "./FamilyKids";
import HobbiesToys from "./HobbiesToys";
import EntertainmentGaming from "./EntertainmentGaming";
import Comput from "./Comput";
import WearablesPhones from "./WearablesPhones";
import VisionSound from "./VisionSound";
import Yphoto from "./Yphoto";
import AccessoriesClothing from "./AccessoriesClothing";
import BeautyHealth from "./BeautyHealth";
import OutdoorSports from "./OutdoorSports";
import TransportMotor from "./TransportMotor";
import YourselfItDo from "./YourselfItDo";

function CategoryComponent() {
  const navigate = useNavigate();
  const [currentContent, setCurrentContent] = useState("content1");

  const showcontent1 = () => {
    setCurrentContent("content1");
  };
  const showcontent2 = () => {
    setCurrentContent("content2");
  };
  const showcontent3 = () => {
    setCurrentContent("content3");
  };
  const showcontent4 = () => {
    setCurrentContent("content4");
  };
  const showcontent5 = () => {
    setCurrentContent("content5");
  };
  const showcontent6 = () => {
    setCurrentContent("content6");
  };
  const showcontent7 = () => {
    setCurrentContent("content7");
  };
  const showcontent8 = () => {
    setCurrentContent("content8");
  };
  const showcontent9 = () => {
    setCurrentContent("content9");
  };
  const showcontent10 = () => {
    setCurrentContent("content10");
  };
  const showcontent11 = () => {
    setCurrentContent("content11");
  };
  const showcontent12 = () => {
    setCurrentContent("content12");
  };
  const showcontent13 = () => {
    setCurrentContent("content13");
  };
  const showcontent14 = () => {
    setCurrentContent("content14");
  };

  const renderContent = () => {
    switch (currentContent) {
      case "content1":
        return <IconContent />;
      case "content2":
        return <PatioGardern />;
      case "content3":
        return <FamilyKids />;
      case "content4":
        return <HobbiesToys />;
      case "content5":
        return <EntertainmentGaming />;
      case "content6":
        return <Comput />;
      case "content7":
        return <WearablesPhones />;
      case "content8":
        return <VisionSound />;
      case "content9":
        return <Yphoto />;
      case "content10":
        return <AccessoriesClothing />;
      case "content11":
        return <BeautyHealth />;
      case "content12":
        return <OutdoorSports />;
      case "content13":
        return <YourselfItDo />;
      case "content14":
        return <TransportMotor />;
    }
  };

  return (
    <>
      <div className="supreme">
        <div className="left">
          <div className="category_icon">
            <CategoryOption
              Icon={MdOutlineAddHomeWork}
              title="Home & Interior"
              onClick={showcontent1}
            />
            <CategoryOption
              Icon={GiCurledLeaf}
              title="Garden & Patio"
              onClick={showcontent2}
            />
            <CategoryOption
              Icon={MdFamilyRestroom}
              title="Kids & Family"
              onClick={showcontent3}
            />
            <CategoryOption
              Icon={MdOutlineToys}
              title="Toys & Hobbies"
              onClick={showcontent4}
            />
            <CategoryOption
              Icon={SiPcgamingwiki}
              title="Gaming & Entertainment"
              onClick={showcontent5}
            />
            <CategoryOption
              Icon={FaComputer}
              title="Computing"
              onClick={showcontent6}
            />
            <CategoryOption
              Icon={MdOutlinePhoneAndroid}
              title="Phones & Wearables"
              onClick={showcontent7}
            />
            <CategoryOption
              Icon={GiSoundWaves}
              title="Sound & Vision"
              onClick={showcontent8}
            />
            <CategoryOption
              Icon={FaCameraRetro}
              title="Photography"
              onClick={showcontent9}
            />
            <CategoryOption
              Icon={GiHanger}
              title="Clothing & Accessories"
              onClick={showcontent10}
            />
            <CategoryOption
              Icon={RiMentalHealthLine}
              title="Health & Beauty"
              onClick={showcontent11}
            />
            <CategoryOption
              Icon={IoIosBasketball}
              title="Sports & Outdoor"
              onClick={showcontent12}
            />
            <CategoryOption
              Icon={GiScrewdriver}
              title="Do it yourself"
              onClick={showcontent13}
            />
            <CategoryOption
              Icon={GiScooter}
              title="Motor Transport"
              onClick={showcontent14}
            />
          </div>
        </div>
        <div className="right">{renderContent()}</div>
      </div>
    </>
  );
}

export default CategoryComponent;
