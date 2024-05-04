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
  const [currentContent, setCurrentContent] = useState("content1");
  const [selectedSpan, setSelectedSpan] = useState("content1");

  const showcontent1 = () => {
    setCurrentContent("content1");
    setSelectedSpan("content1");
  };
  const showcontent2 = () => {
    setCurrentContent("content2");
    setSelectedSpan("content2");
  };
  const showcontent3 = () => {
    setCurrentContent("content3");
    setSelectedSpan("content3");
  };
  const showcontent4 = () => {
    setCurrentContent("content4");
    setSelectedSpan("content4");
  };
  const showcontent5 = () => {
    setCurrentContent("content5");
    setSelectedSpan("content5");
  };
  const showcontent6 = () => {
    setCurrentContent("content6");
    setSelectedSpan("content6");
  };
  const showcontent7 = () => {
    setCurrentContent("content7");
    setSelectedSpan("content7");
  };
  const showcontent8 = () => {
    setCurrentContent("content8");
    setSelectedSpan("content8");
  };
  const showcontent9 = () => {
    setCurrentContent("content9");
    setSelectedSpan("content9");
  };
  const showcontent10 = () => {
    setCurrentContent("content10");
    setSelectedSpan("content10");
  };
  const showcontent11 = () => {
    setCurrentContent("content11");
    setSelectedSpan("content11");
  };
  const showcontent12 = () => {
    setCurrentContent("content12");
    setSelectedSpan("content12");
  };
  const showcontent13 = () => {
    setCurrentContent("content13");
    setSelectedSpan("content13");
  };
  const showcontent14 = () => {
    setCurrentContent("content14");
    setSelectedSpan("content14");
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
              className={selectedSpan === "content1" ? "selected" : ""}
            />
            <CategoryOption
              Icon={GiCurledLeaf}
              title="Garden & Patio"
              onClick={showcontent2}
              className={selectedSpan === "content2" ? "selected" : ""}
            />
            <CategoryOption
              Icon={MdFamilyRestroom}
              title="Kids & Family"
              onClick={showcontent3}
              className={selectedSpan === "content3" ? "selected" : ""}
            />
            <CategoryOption
              Icon={MdOutlineToys}
              title="Toys & Hobbies"
              onClick={showcontent4}
              className={selectedSpan === "content4" ? "selected" : ""}
            />
            <CategoryOption
              Icon={SiPcgamingwiki}
              title="Gaming & Entertainment"
              onClick={showcontent5}
              className={selectedSpan === "content5" ? "selected" : ""}
            />
            <CategoryOption
              Icon={FaComputer}
              title="Computing"
              onClick={showcontent6}
              className={selectedSpan === "content6" ? "selected" : ""}
            />
            <CategoryOption
              Icon={MdOutlinePhoneAndroid}
              title="Phones & Wearables"
              onClick={showcontent7}
              className={selectedSpan === "content7" ? "selected" : ""}
            />
            <CategoryOption
              Icon={GiSoundWaves}
              title="Sound & Vision"
              onClick={showcontent8}
              className={selectedSpan === "content8" ? "selected" : ""}
            />
            <CategoryOption
              Icon={FaCameraRetro}
              title="Photography"
              onClick={showcontent9}
              className={selectedSpan === "content9" ? "selected" : ""}
            />
            <CategoryOption
              Icon={GiHanger}
              title="Clothing & Accessories"
              onClick={showcontent10}
              className={selectedSpan === "content10" ? "selected" : ""}
            />
            <CategoryOption
              Icon={RiMentalHealthLine}
              title="Health & Beauty"
              onClick={showcontent11}
              className={selectedSpan === "content11" ? "selected" : ""}
            />
            <CategoryOption
              Icon={IoIosBasketball}
              title="Sports & Outdoor"
              onClick={showcontent12}
              className={selectedSpan === "content12" ? "selected" : ""}
            />
            <CategoryOption
              Icon={GiScrewdriver}
              title="Do it yourself"
              onClick={showcontent13}
              className={selectedSpan === "content13" ? "selected" : ""}
            />
            <CategoryOption
              Icon={GiScooter}
              title="Motor Transport"
              onClick={showcontent14}
              className={selectedSpan === "content14" ? "selected" : ""}
            />
          </div>
        </div>
        <div className="right">{renderContent()}</div>
      </div>
    </>
  );
}

export default CategoryComponent;
