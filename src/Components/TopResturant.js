import React from "react";
import { CDN_URL } from "../utils/constant";
import StartIcon from "../Assets/"

const TopResturant = ({ resData }) => {
  console.log(resData);
  return (
    <div>
      <img src={CDN_URL + resData[0].info.cloudinaryImageId} alt="TopResturant"  className="w-64 h-48 rounded-2xl"/>
      <h1 className="font-GilroyBold pt-3 pl-3">{resData[0].info.name}</h1>
      <img src={CDN_URL + "Rxawards/_CATEGORY-Burger.png"}/> 
    </div>
  );
};

export default TopResturant;
