import React from "react";
import { CDN_URL } from "../utils/constant";
//import StarIcon from "../Assets/"

const TopResturant = ({ resData }) => {
  console.log(resData);
  return (
    <div>
      <div className="relative w-64 h-48">
        <img
          src={CDN_URL + resData[0].info.cloudinaryImageId}
          alt="TopResturant"
          className="w-full h-full object-cover rounded-2xl"
        />
        <h1 className="absolute bottom-0 left-0 w-full text-center bg-black-light-gradient bg-opacity-10 backdrop-blur-[1px] text-white py-2 rounded-b-2xl">
          top Item
        </h1>
      </div>

      <h1 className="font-GilroyBold pt-3 pl-3">{resData[0].info.name}</h1>
      <div className="flex pl-3">
        <h3 className="font-GilroyMediumBold">{resData[0].info.avgRating}</h3>
        <h4 className="font-GilroySemiBold pl-2">
          {" "}
          . {resData[0].info.sla.slaString}
        </h4>
      </div>
      <h5 className="font-GilroyMediumBold text-color-graylight pl-3">
        {resData[0].info.cuisines.join(" ,")}
      </h5>
      <h5 className="font-GilroyMediumBold text-color-graylight pl-3">
        {resData[0].info.areaName}
      </h5>
    </div>
  );
};

export default TopResturant;
