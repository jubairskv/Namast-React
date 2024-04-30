import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";  //this is used for to  find resId in router navition link as different id navigation for more component
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    console.log(resInfo)

    const resId = useParams();
    console.log(resId)


    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=393840")
        const data =await fetch(`${MENU_API}` + `${resId?.resId}`)
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }

    if (resInfo === null) return <Shimmer />;   //shimmer UI

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    console.log(name)

    // const restaurantInfo = resInfo?.cards[2]?.card.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    // Check if restaurantInfo is defined before destructuring its properties
    // if (restaurantInfo) {
    //     const { name, cuisines, costForTwoMessage } = restaurantInfo;
    //     console.log(name,cuisines,costForTwoMessage);
    //     // You can use the other properties as needed
    // } else {
    //     console.log("restaurantInfo is undefined or null.");
    // }


    return /*resInfo === null ? (<Shimmer/>) :*/ (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        {"Rs. "}
                        {item.card.info.defaultPrice / 100 || item.card.info.price /100 }
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu