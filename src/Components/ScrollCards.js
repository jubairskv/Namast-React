import React from "react";
import { CDN_URL } from "../utils/constant";

const ScrollCards = (props) => {
  const { scrollData } = props;
  //console.log(scrollData);
  return (
    <div className="">
      <img
        src={CDN_URL + scrollData.imageId}
        alt="scrollImage"
        className="max-w-40 h-auto"
      />
    </div>
  );
};

export default ScrollCards;
