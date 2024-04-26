import RestaurantCard from "./Restaurantcard"
import { useState,useEffect } from "react"
//import resList from "../utils/mockData";

// let listofres=[
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "200767",
//           "name": "Sharief Bhai",
//           "cloudinaryImageId": "5015204e6868e99a2e4d84880af68c5a",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Arabian",
//             "South Indian",
//             "Rolls & Wraps",
//             "Street Food",
//             "Fast Food",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 3.8,
//           "parentId": "5734",
//           "avgRatingString": "3.8",
//           "totalRatingsString": "10K+",
//           "promoted": true,
//           "adTrackingId": "cid=12881219~p=0~adgrpid=12881219#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=200767~eid=844c77c2-1343-4b41-a3a9-21b949fab62f~srvts=1713861580083~collid=83649",
//           "sla": {
//             "deliveryTime": 48
//           },
//         }
//       }
//     }
//   },
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "200768",
//           "name": "KFC",
//           "cloudinaryImageId": "5015204e6868e99a2e4d84880af68c5a",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Arabian",
//             "South Indian",
//             "Rolls & Wraps",
//             "Street Food",
//             "Fast Food",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 5.0,
//           "parentId": "5734",
//           "avgRatingString": "5.0",
//           "totalRatingsString": "10K+",
//           "promoted": true,
//           "adTrackingId": "cid=12881219~p=0~adgrpid=12881219#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=200767~eid=844c77c2-1343-4b41-a3a9-21b949fab62f~srvts=1713861580083~collid=83649",
//           "sla": {
//             "deliveryTime": 48
//           },
//         }
//       }
//     }
//   },
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "200769",
//           "name": "Dominos",
//           "cloudinaryImageId": "5015204e6868e99a2e4d84880af68c5a",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Arabian",
//             "South Indian",
//             "Rolls & Wraps",
//             "Street Food",
//             "Fast Food",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.9,
//           "parentId": "5734",
//           "avgRatingString": "4.9",
//           "totalRatingsString": "10K+",
//           "promoted": true,
//           "adTrackingId": "cid=12881219~p=0~adgrpid=12881219#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=200767~eid=844c77c2-1343-4b41-a3a9-21b949fab62f~srvts=1713861580083~collid=83649",
//           "sla": {
//             "deliveryTime": 48
//           },
//         }
//       }
//     }
//   }
// ]



const Body = () => {
  //Normal varaible
  //let res=[]

  //state Varaible res-inital value or default value  setRes-updated value      default value down  it also act as a nrml variable
  const [res, setRes] = useState([]);  //function
  //const res=arr[0]
  //const setRes=arr[1]

  console.log(res)


  // const arr=useState(resList)   // behind the scene in usestate
  // const [res,setRes]=arr;      //array destrcturing

 // it works after rendering the component
  useEffect(()=>{/*callback function */
   fetchData()
  },[] /*dependencies*/)

  const fetchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restList = res.filter((res) => res.info.avgRating > 4)
            setRes(restList)
          }}>
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {
          res.map(restaurant =>
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          )
        }
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          {console.log(resList)} */}
        {/*<RestaurantCard resName="KFC" cuisine="Briyani, North Indian, Asian"/>*/}
        {/* <RestaurantCard resName="Mc-Donals" cuisine="Briyani, North Indian, Asian"/> */}

      </div>
    </div>
  )
}
export default Body;