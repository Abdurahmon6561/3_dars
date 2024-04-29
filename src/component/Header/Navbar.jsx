import React from "react";

const Navbar = () => {
  return (
    <div className=" space-x-6 mr-10">
      <a
        href="#"
        className=" hover:text-orange-500 hover:transition duration-700 ease-in-out"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-orange-500 hover:transition duration-700 ease-in-out"
      >
        Services
      </a>
      <a
        href="#"
        className="hover:text-orange-500 hover:transition duration-700 ease-in-out"
      >
        About
      </a>
      <a
        href="#"
        className="hover:text-orange-500 hover:transition duration-700 ease-in-out"
      >
        Blog
      </a>
      <button
        type="button"
        className="hover:border hover:border-orange-500 rounded-lg bg-orange-500 p-1 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500"
      >
        Contact us
      </button>
    </div>
  );
};

export default Navbar;
