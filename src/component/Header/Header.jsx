import React from "react";
import Logo from "./icon/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" flex justify-between container mb-[36px]">
      <img src={Logo} alt="" className=" cursor-pointer ml-10" />
      <Navbar />
    </div>
  );
};

export default Header;
