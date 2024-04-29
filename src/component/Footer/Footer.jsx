import React from "react";
import Logo from "./icon/logo.svg";
import Instagram from "./icon/insta.svg";
import Facebook from "./icon/facebook.svg";
import Twitter from "./icon/twitter.svg";

const Footer = () => {
  return (
    <div className=" flex justify-around mt-[68px] bg-orange-100 h-[257px] w-full p-10">
      <div>
        <img src={Logo} alt="" className="mt-[58px] cursor-pointer" />
      </div>
      <div className=" flex space-x-10">
        <div>
          <p className="text-lg font-semibold">Services</p>
          <ul>
            <li className="hover:text-orange-600 cursor-pointer">New Builds</li>
            <li className="hover:text-orange-600 cursor-pointer">
              Renovations
            </li>
            <li className="hover:text-orange-600 cursor-pointer">
              Conversions
            </li>
            <li className="hover:text-orange-600 cursor-pointer">Fit Out</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold">Information</p>
          <ul>
            <li className="hover:text-orange-600 cursor-pointer">Events</li>
            <li className="hover:text-orange-600 cursor-pointer">Contact us</li>
            <li className="hover:text-orange-600 cursor-pointer">
              Privacy policy
            </li>
            <li className="hover:text-orange-600 cursor-pointer">
              Terms of services
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold">Address</p>
          <ul>
            <li className="hover:text-orange-600 cursor-pointer">
              Nyeri Town - Nyeri
            </li>
            <li className="hover:text-orange-600 cursor-pointer">Mumbi</li>
            <li className="hover:text-orange-600 cursor-pointer">Call us</li>
            <li className="hover:text-orange-600 cursor-pointer">Email us</li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={Instagram}
          alt=""
          className="cursor-pointer p-2 hover:p-1 w-[39px] h-[39px] rounded-lg bg-orange-200  hover:transition duration-700 ease-in-out hover:bg-orange-400"
        />
        <img
          src={Facebook}
          alt=""
          className="cursor-pointer p-2 hover:p-1 w-[39px] h-[39px] rounded-lg bg-orange-200  hover:transition duration-700 ease-in-out hover:bg-orange-400"
        />
        <img
          src={Twitter}
          alt=""
          className="cursor-pointer p-2 hover:p-1 w-[39px] h-[39px] rounded-lg bg-orange-200  hover:transition duration-700 ease-in-out hover:bg-orange-400"
        />
      </div>
    </div>
  );
};

export default Footer;
