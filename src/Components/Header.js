import { LOGO_URL } from "../utils/constant";
import { useContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Header = () => {
  let [btnName, setbtnName] = useState("Login")
  //console.log("Header render");
  const OnlineStatus = useOnlineStatus();

  const {LoggedInUser}= useContext(UserContext)
  console.log(LoggedInUser)


  //subcribing to the sore using selector

  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems)
  

  return (
    <div className="flex justify-between bg-pink-300 shadow-md sm:bg-yellow-50 lg:bg-green-300">
      <div className="logo-conatiner">
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/Contact">OnlineStatus:{OnlineStatus ? "✅" : "🔴"}</Link>
          </li>
          <li className="px-4">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {/* <a href="/About">About us</a> */}
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl ">Cart - ({cartItems.length} items)</li>
          <button className="login-btn"
           onClick={() => { btnName === "Login" ? 
           setbtnName("Logout") : 
           setbtnName("Login") }}>{btnName}</button>
          <li className="px-4 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;