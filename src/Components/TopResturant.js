import React from "react";
import { CDN_URL } from "../utils/constant";
//import StarIcon from "../Assets/"

const TopResturant = ({ resData }) => {
  if (!resData) return null;
  //console.log(resData);
  return (
    <div className="pl-10">
      <div className="relative w-64 h-48">
        <img
          src={CDN_URL + resData?.info?.cloudinaryImageId}
          alt="TopResturant"
          className="w-full h-full object-cover rounded-2xl"
        />
        <h1 className="absolute font-GilroyExtraBold text-xl bottom-0 left-0 w-full pl-2 text-nowrap bg-black-light-gradient bg-opacity-10 backdrop-blur-[1px] text-white py-2 rounded-b-2xl">
          {resData?.info?.aggregatedDiscountInfoV3?.header +
            " " +
            resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </h1>
      </div>
      <h1 className="font-GilroyBold text-lg pt-3 pl-3">{resData.info.name}</h1>
      <div className="flex pl-3">
        <h3 className="font-GilroyMediumBold">{resData.info.avgRating}</h3>
        <h4 className="font-GilroySemiBold pl-2">
          {resData.info.sla.slaString}
        </h4>
      </div>
      <h5 className="font-GilroyMediumBold text-color-graylight pl-3">
        {resData.info.cuisines.join(", ").length > 24
          ? `${resData.info.cuisines.join(", ").slice(0, 24)}...`
          : resData.info.cuisines.join(", ")}
      </h5>
      <h5 className="font-GilroyMediumBold text-color-graylight pl-3">
        {resData.info.areaName}
      </h5>
    </div>
  );
};

export default TopResturant;
