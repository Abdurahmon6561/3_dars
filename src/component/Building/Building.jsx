import React from "react";
import First from "./image/first.png";
import Second from "./image/second.png";
import Third from "./image/third.png";

const Building = () => {
  return (
    <div className=" mt-28 mb-[100px]">
      <div className="text-center">
        <p className="text-2xl text-orange-500 font-medium mb-3">Services</p>
        <h2 className="text-4xl mb-10">Building Dreams, Crafting Realities</h2>
      </div>
      <div className=" p-7 flex space-x-28">
        <div className=" w-[406px] h-[428px] bg-gray-200 rounded-lg">
          <img src={First} alt="photo" />
          <div className=" p-4">
            <p className="text-2xl font-semibold">Consultation Services</p>
            <ul className=" mt-2">
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Design & Build
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Cost analysis
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Permits & Processes
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Scheduling
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Phasing
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Resource management
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[406px] h-[428px] bg-gray-200 rounded-lg">
          <img src={Second} alt="photo" />
          <div className=" p-4">
            <p className="text-2xl font-semibold">General Construction</p>
            <ul className=" mt-2">
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                New Construction
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Building Addition
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Renovation
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Restoration
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Rebuilding from Drainage
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Drainage
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[406px] h-[428px] bg-gray-200 rounded-lg">
          <img src={Third} alt="photo" />
          <div className=" p-4">
            <p className="text-2xl font-semibold">Maintenance Services</p>
            <ul className=" mt-2">
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Windows & Doors Fitting
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Siding Repairs
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Plumbing
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Electrical &Solar Fitting
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                HVAC
              </li>
              <li className="text-lg font-medium ml-4 p-1 hover:text-orange-500 cursor-pointer">
                <div className="w-2 h-2 bg-orange-500 rounded-lg mb-[-17px] ml-[-14px]"></div>
                Remodeling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
