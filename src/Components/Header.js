import { LOGO_URL } from "../utils/constant";
//import { logo_url } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
//import store from "../utils/store";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { TbUserSquareRounded } from "react-icons/tb";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  //console.log("Header render");
  const OnlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  //console.log(LoggedInUser)

  //subcribing to the sore using selector

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems)

  return (
    <div className="flex justify-around items-center w-full h-[95px] bg-white shadow-md sm:bg-white lg:bg-white pr-69 ">
      <div className="logo-conatiner">
        <img className="w-[80px] items-center pt-1" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-center ">
        <ul className="flex p-4 m-4 space-x-10">
          {/* <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            <Link to="/Contact">OnlineStatus:{OnlineStatus ? "✅" : "🔴"}</Link>
          </li> */}
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4 font-GilroyBold text-lg  text-color-gray ">
            {/* <a href="/About">About us</a> */}
            <Link to="/About">
              <div className="flex items-center">
                <IoSearch className="w-6 h-6" />
                Search
              </div>
            </Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg text-color-gray ">
            <Link to="/Contact">
              <div className="flex items-center">
                <BiSolidOffer className="w-6 h-6" />
                Offers
              </div>
            </Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            <Link to="/Grocery">
              <div className="flex items-center">
                <IoIosHelpBuoy className="w-6 h-6" />
                Help
              </div>
            </Link>
          </li>
          <li className="px-4 font-GilroyBold text-lg  text-color-gray ">
            {" "}
            <Link to="/cart">
              <div className="flex items-center">
                <BsCartCheck className="w-6 h-6" />
                Cart
              </div>
              {/*({cartItems.length}items)*/}
            </Link>{" "}
          </li>
          <button
            className="login-btn  font-GilroyBold text-lg  text-color-gray  "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            <div className="flex items-center">
              <TbUserSquareRounded className="w-6 h-6" />
              {btnName}
            </div>
          </button>
          {/* <li className="px-4 font-bold">{LoggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
