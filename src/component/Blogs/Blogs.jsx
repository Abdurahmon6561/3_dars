import React from "react";
import October from "./image/october.png";
import November from "./image/november.png";
import January from "./image/january.png";

const Blogs = () => {
  return (
    <div className="mb-[300px]">
      <div className="text-center">
        <p className="text-2xl text-orange-500 font-medium mb-3">Blog</p>
        <h2 className="text-4xl mb-10">
          Insightful blogs about the construction industry.
        </h2>
        <div className=" p-7 flex space-x-28">
          <div className=" w-[406px] h-[428px] text-left">
            <img src={October} alt="photo" className="mb-6" />
            <p className="text-lg">24 October 2022</p>
            <p className="text-2xl text-orange-500 font-bold mt-3 mb-4">
              What are the processes involved <br /> in putting up a building?
            </p>
            <p className="text-lg">
              The process of putting up a building is <br /> usually done in
              phases and understanding <br /> this phases is important to a
              client in terms...
            </p>
            <button
              type="button"
              className=" mt-2 rounded-lg bg-orange-500 p-2 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500"
            >
              Read more
            </button>
          </div>
          <div className=" w-[406px] h-[428px] text-left">
            <img src={November} alt="photo" className="mb-6" />
            <p className="text-lg">3 November 2022</p>
            <p className="text-2xl text-orange-500 font-bold mt-3 mb-4">
              What is Minimalist Architecture <br /> and Minimal Design Space?
            </p>
            <p className="text-lg">
              Minimalism in architecture is a form that can <br /> be
              characterized using various aspects with <br /> the sole aim of
              reducing clutter and...
            </p>
            <button
              type="button"
              className=" mt-2 rounded-lg bg-orange-500 p-2 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500"
            >
              Read more
            </button>
          </div>
          <div className=" w-[406px] h-[428px] text-left">
            <img src={January} alt="photo" className="mb-6" />
            <p className="text-lg">5 January 2023</p>
            <p className="text-2xl text-orange-500 font-bold mt-3 mb-4">
              Integrating Technology for <br /> Modern Construction
            </p>
            <p className="text-lg">
              In the realm of modern construction, the <br /> integration of
              smart home innovations has <br /> emerged as a transformative
              force...
            </p>
            <button
              type="button"
              className=" mt-2 rounded-lg bg-orange-500 p-2 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
