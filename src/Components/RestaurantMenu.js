// import { useEffect, useState } from "react"
// import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";  //this is used for to  find resId in router navition link as different id navigation for more component
import useRestarauntMenu from "../utils/useRestaursntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

   // const [resInfo, setResInfo] = useState(null);

    //console.log(resInfo)

    const resId = useParams();
    //console.log(resId)
    
    const resInfo =useRestarauntMenu(resId)

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=393840")
    //     const data =await fetch(`${MENU_API}` + `${resId?.resId}`)   {/*resId:{resId=idnumber}*/} 
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json.data)
    // }

    if (resInfo === null) return <Shimmer />;   //shimmer UI

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    console.log(name)

    // const restaurantInfo = resInfo?.cards[2]?.card.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // Check if restaurantInfo is defined before destructuring its properties
    // if (restaurantInfo) {
    //     const { name, cuisines, costForTwoMessage } = restaurantInfo;
    //     console.log(name,cuisines,costForTwoMessage);
    //     // You can use the other properties as needed
    // } else {
    //     console.log("restaurantInfo is undefined or null.");
    // }
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(itemcategory=>itemcategory.card?.["card"]?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")   //@type=["@type"] both are same
    console.log(categories)
    return /*resInfo === null ? (<Shimmer/>) :*/ (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category)=>
            <RestaurantCategory key={category.card.card.id} data={category?.card?.card}/>)}
        </div>
    )
}
export default RestaurantMenu