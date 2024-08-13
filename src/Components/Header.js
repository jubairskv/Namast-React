import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Header = () => {
  let [btnName, setbtnName] = useState("Login")
  //console.log("Header render");
  const OnlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext)
  //console.log(LoggedInUser)


  //subcribing to the sore using selector

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems)


  return (
    <div className="flex justify-between  w-full h-[95px] bg-white shadow-md sm:bg-white lg:bg-white pr-64 " >
      <div className="logo-conatiner">
        <img className="w-[100px]" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            <Link to="/Contact">OnlineStatus:{OnlineStatus ? "✅" : "🔴"}</Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            {/* <a href="/About">About us</a> */}
            <Link to="/About">Search</Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg text-color-gray ">
            <Link to="/Contact">Offers</Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            <Link to="/Grocery">Help</Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray "> <Link to="/cart">Cart{/*({cartItems.length}items)*/}</Link> </li>
          <button className="login-btn  font-GilroyBold text-lg  text-color-gray  "
            onClick={() => {
              btnName === "Login" ?
              setbtnName("Logout") :
              setbtnName("Login")
            }}>{btnName}</button>
          <li className="px-4 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;