import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  {
    /*props to destrcturing*/ {
      /*resName,cuisine*/
    }
  }
  const { resData } = props;
  //console.log(resData)
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  //console.log(resData)

  const { LoggedInUser } = useContext(UserContext);
  //console.log(resName,cuisine)
  //const {resName,cuisine}=props  destrctuing props logic behind
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
      <h1 className="font-GilroyBold text-lg pt-3 pl-3 max-w-[80%]">
        {resData.info.name}
      </h1>
      <div className="flex pl-3">
        <h3 className="font-GilroyMediumBold">{resData.info.avgRating}</h3>
        <h4 className="font-GilroySemiBold pl-2">
          {" "}
          . {resData.info.sla.slaString}
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

//higher order component

//input - RestaurantCard ==>RestaurantCardPromoted

// export const withPromotedLabel =(RestaurantCard)=>{
//   return (props)=>{
//     return (
//       <div>
//         <lable className="absolute bg-black text-white m-1 p-2 rounded-lg">promoted</lable>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }

// }
// const RestaurantCard=(props)=>{
//const {resName,cuisine}=props  destrctuing props logic behind
//     console.log(props)
//     return(
//         <div className="res-card" style={{background:"#f0f0f0"}}>
//             <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>   {/*using props */}
//             <h4>4.3 Star</h4>
//             <h4>35 Mins</h4>

//         </div>
//      <div className="res-card" style={{background:"#f0f0f0"}}>
//      <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
//      <h3>Meghana Foods</h3>
//      <h4>Briyani, North Indian, Asian</h4>
//      <h4>4.3 Star</h4>
//      <h4>35 Mins</h4>
//  </div>                //static data

//     )
// }
export default RestaurantCard; //default export for single export
