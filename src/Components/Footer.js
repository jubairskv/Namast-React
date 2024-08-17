import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[28rem] bg-black text-white flex justify-center gap-[10rem] pt-10 ">
      <ul>
        <li className="font-GilroyBold">swigg</li>
        <li>text</li>
      </ul>
      <ul>
        <li className="font-GilroyBold text-xl">Company</li>
        <div className="text-color-graylight font-GilroySemiBold space-y-4 pt-5">
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swigg One</li>
          <li>Swigg Instamart</li>
          <li>Swigg Genie</li>
        </div>
      </ul>
      <ul>
        <li className="font-GilroyBold text-xl">Contact us</li>
        <div className="text-color-graylight font-GilroySemiBold space-y-4 pt-5">
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </div>

        <div className="flex flex-col pt-5">
          <li className="font-GilroyBold text-xl">legal</li>
          <div className="text-color-graylight font-GilroySemiBold space-y-4 pt-5">
            <li>Terms & condition</li>
            <li>Cookie policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </div>
        </div>
      </ul>
      <ul>
        <li className="font-GilroyExtraBold text-xl">we delivery to:</li>
        <div className="text-color-graylight font-GilroySemiBold space-y-4 pt-5 ">
          <li>Banglore</li>
          <li>Chennai</li>
          <li>Hyderbad</li>
          <li>Gurgaon</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
