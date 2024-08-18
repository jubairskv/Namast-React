import RestaurantCard, { withPromotedLabel } from "./Restaurantcard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ScrollCards from "./ScrollCards";
import TopResturant from "./TopResturant";
import swigg_full_api from "../utils/constant";
import { CDN_URL } from "../utils/constant";
import Footer from "./Footer";

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
  const [res, setRes] = useState([]); //function
  //const res=arr[0]
  //const setRes=arr[1]
  //when ever there is a chnage in state variable react render the whole componet very fast-reconciliation
  const [searchText, setSearchText] = useState("");
  const [filterCards, setFilterCards] = useState([]);
  const [scroll, setScroll] = useState("");
  const [scrollCards, setScrollCards] = useState([]);
  const [titleResturant, setTitleResuturant] = useState([]);
  const [title, setTitle] = useState("");
  const [buttonCards, setButtonCards] = useState([]);
  const [buttonCards2, setButtonCards2] = useState([]);
  const [buttonCards3, setButtonCards3] = useState([]);
  const [playStoreIcon, setPlayStoreIcon] = useState("");

  //console.log(res)
  //console.log("body render", scroll);

  //const RestaurantcardPromoted = withPromotedLabel(RestaurantCard)
  // const arr=useState(resList)   // behind the scene in usestate
  // const [res,setRes]=arr;      //array destrcturing

  // it works after rendering the component
  //useEffect take  two arrgument one arrow function,depebdencies and this useeffect called after the component render

  //if no dependencies array is empty => useEffect is called on initial render(just once it called when component render)
  // if u pass state as dependencies array whenever the state changes made it will rerender
  //if dependencies array is localstat it called every state is updated
  useEffect(
    () => {
      /*callback function */
      fetchData();
    },
    [] /*dependencies*/
  );

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&nextOffset=${nextOffset}`
      );
      const json = await data.json();
      setRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterCards(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setScrollCards(
        json?.data?.cards[0]?.card?.card.gridElements.infoWithStyle.info
      );
      setScroll(json?.data?.cards[0]?.card?.card);
      setTitle(json?.data?.cards[1]?.card?.card.header.title);
      setTitleResuturant(json?.data?.cards[2]?.card?.card);
      setButtonCards(json?.data?.cards[6]?.card?.card);
      setButtonCards2(json?.data?.cards[7]?.card?.card);
      setButtonCards3(json?.data?.cards[8]?.card?.card);
      setPlayStoreIcon(json?.data?.cards[9]?.card?.card);
      console.log( json?.data?.cards[0]?.card?.card.gridElements.infoWithStyle.info)
    } catch (err) {
      console.log(err);
    }
  };

  //const scrollCards = scroll?.gridElements?.infoWithStyle?.info
  //console.log(scrollCards)

  {
    /*  const fetchData = async () => {
    try {
      const response = await fetch("https://corsproxy.io/? https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lat: 12.9351929,
          lng: 77.62448069999999,
          is_seo_homepage_enabled: true,
          page_type: "DESKTOP_WEB_LISTING"
        })
      });
      const json = await response.json();
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      // Optional Chaining - ?
      setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterCards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (err) {
      console.log(err);
    }
  };*/
  }

  //conditional Rendering - replacing into ternary operator
  {
    /*if(res.length===0){
    return <Shimmer/>
  }*/
  }

  const { setUserName, LoggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! please check your network connection;
      </h1>
    );

  //jsx component render 1st after useEffect will render
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    /*ternary operator*/ <div data-testid="resCards" className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={
              searchText
            } /* when i give value as searchtext u cant able to type in the placeholder it will bind to the state so thatu need to update the state with help of onchange((e)=>{setSearchText(e.target.vale)})*/
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the res card update the ui
              //search Text
              const filterCards = res.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterCards(filterCards);
            }}
          >
            search
          </button>
        </div>
        <div className=" flex items-center m-4 p-4 ">
          {/* <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const restList = res.filter((res) => res.info.avgRating > 4);
              console.log(restList);
              setRes(restList);
            }}
          >
            Top rated Restaurant
          </button> */}
        </div>
        <div className="flex m-4 p-4 items-center ">
          {/* <label>username :</label>
          <input
            className="border border-black "
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="pr-[65%] pb-5 font-GilroyExtraBold text-4xl">
          {scroll?.header?.title}
        </h1>
        <div className="flex no-scrollbar overflow-x-scroll w-[90%]">
          {scrollCards.map((restaurant) => ( 
            <Link to={"scroll/" + restaurant?.info?.id}  key={restaurant?.info?.id}>
              <ScrollCards
              scrollData={
                restaurant
              }                                   /*passing data as props to child component as resData */
            />
            </Link>
          ))}
          

        </div>
      </div>
      <div className="pl-10 pt-16">
        <h1 className="pr-[20%] pl-10 pb-10 font-GilroyExtraBold text-4xl text-nowrap">
          {title}
        </h1>
        <div className="flex no-scrollbar overflow-x-scroll w-[95%]">
          {filterCards.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"restaurant/" + restaurant?.info?.id}
            >
              <TopResturant resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
      <div className="pl-10">
        <div className="pb-10 ">
          <h1 className=" font-GilroyExtraBold text-4xl pl-10">
            {titleResturant.title}
          </h1>
        </div>
        <div className="grid grid-cols-5 pr-24 ">
          {filterCards.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"restaurant/" + restaurant?.info?.id}
            >
              {/* {restaurant.data.promoted ?
              <RestaurantcardPromoted resData={restaurant}/>:} */}
              <RestaurantCard
                resData={
                  restaurant
                } /*passing data as props to child component as resData */
              />
            </Link>
          ))}
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          {console.log(resList)} */}
          {/*<RestaurantCard resName="KFC" cuisine="Briyani, North Indian, Asian"/>*/}
          {/* <RestaurantCard resName="Mc-Donals" cuisine="Briyani, North Indian, Asian"/> */}
        </div>
      </div>
      <div className="pl-10 pt-2">
        <div className="pb-10 ">
          <h1 className=" font-GilroyExtraBold text-4xl pl-10">
            {buttonCards.title}
          </h1>
        </div>
        <div className="grid grid-cols-4 pr-24 gap-4 pl-10">
          {buttonCards.brands.map((Cards) => (
            <button className="border border-solid p-5 rounded-lg text-nowrap font-GilroySemiBold  ">
              {Cards.text}
            </button>
          ))}
        </div>
      </div>
      <div className="pl-10 pt-5">
        <div className="pb-10 ">
          <h1 className=" font-GilroyExtraBold text-4xl pl-10">
            {buttonCards2.title}
          </h1>
        </div>
        <div className="grid grid-cols-4 pr-24 gap-4 pl-10">
          {buttonCards2.brands.map((Cards) => (
            <button className="border border-solid p-5 rounded-lg text-nowrap font-GilroySemiBold ">
              {Cards.text}
            </button>
          ))}
        </div>
      </div>

      <div className="pl-10 pt-5">
        <div className="pb-10 ">
          <h1 className=" font-GilroyExtraBold text-4xl pl-10">
            {buttonCards3.title}
          </h1>
        </div>
        <div className="grid grid-cols-5 pr-24 gap-[44rem] pl-10">
          {buttonCards3.brands.map((Cards) => (
            <button className="border border-solid p-5 w-[40rem] rounded-lg text-nowrap font-GilroySemiBold  ">
              {Cards.text}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-28 bg-color-lightgray mt-10 flex justify-center items-center gap-8">
        <h1 className="font-GilroyExtraBold text-color-gray">
          {playStoreIcon.title}
        </h1>
        <img
          src={CDN_URL + playStoreIcon.androidAppImage}
          alt="playstoreandroid"
          className="w-18 h-16"
        ></img>
        <img
          src={CDN_URL + playStoreIcon.iosAppImage}
          alt="playstoreiso"
          className="w-18 h-16"
        ></img>
      </div>
     <Footer/>
    </div>
  );
};
export default Body;
