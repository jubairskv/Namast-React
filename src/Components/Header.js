import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  let [btnName,setbtnName]=useState("Login")
  //console.log("Header render");
  const OnlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-conatiner">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
          <li>
              <Link to="/Contact">OnlineStatus:{OnlineStatus? "✅" :"🔴" }</Link>
            </li>
            <li>
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a href="/About">About us</a> */}
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;