import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  let [btnName,setbtnName]=useState("Login")
  //console.log("Header render");

    return (
      <div className="header">
        <div className="logo-conatiner">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;