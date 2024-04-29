import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="h-[750px] w-full bg-orange-100 p-8">
      <div>
        <div>
          <p className=" text-orange-500 text-xl font-normal mt-[36px] mb-2 ml-1">
            We are Hideva Group
          </p>
          <h2 className="text-6xl font-normal">Design and Build Contractor</h2>
          <p className="text-2xl text-zinc-500 mt-3 mb-6 ml-1">
            With unwavering commitment and expertise, we create <br /> spaces
            that stand as a testament to our dedication and <br /> craftsmanship
          </p>
          <button
            type="button"
            className="rounded-lg bg-orange-500 p-2 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500"
          >
            Get a quote
          </button>
        </div>

        <div className=" flex space-x-6 mt-[183px]">
          <div>
            <p className=" font-bold text-3xl text-orange-500">18+</p>
            <p className=" font-medium">
              Construction <br /> Services
            </p>
          </div>
          <div>
            <p className=" font-bold text-3xl text-orange-500">10+</p>
            <p className=" font-medium">
              Fundi <br /> Engineers
            </p>
          </div>
          <div>
            <p className=" font-bold text-3xl text-orange-500">5+</p>
            <p className=" font-medium">
              Regular <br /> Suppliers
            </p>
          </div>
        </div>
      </div>
      <div className="hero"></div>
    </div>
  );
};

export default Hero;
