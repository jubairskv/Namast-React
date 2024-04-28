import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    
    const [resInfo,setResInfo]=useState(null);

    console.log(resInfo)


    useEffect(()=>{
      fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=793210&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
        const json= await data.json();
        console.log(json)
        setResInfo(json.data)
    }

    // if(resInfo===null) return <Shimmer/>    //shimmer UI
    return resInfo === null ? (<Shimmer/>) : (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <ul>
                <li>{resInfo.cards[0]?.card?.card?.text}</li>
                <li>Briyani</li>
                <li>Briyani</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu