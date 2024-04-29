import React from "react";

const Massage = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl text-orange-500 font-medium mb-3">
          Get in Touch
        </p>
        <h2 className="text-4xl mb-10">
          Reach out to us and let's turn your construction dreams into reality
        </h2>
      </div>
      <div className="w-[1065px] bg-slate-100 ml-[232px] rounded-lg p-8">
        <div className="ml-[70px]">
          <p className="mb-2 font-medium">Name</p>
          <input
            type="text"
            placeholder="John Doe"
            className="w-[838px] h-[79px] rounded-lg p-2 mb-[36px]"
          />
        </div>
        <div className="ml-[70px]">
          <p className="mb-2 font-medium">Email</p>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-[838px] h-[79px] rounded-lg p-2 mb-[36px]"
          />
        </div>
        <div className="ml-[70px]">
          <p className="mb-2 font-medium">Message</p>
          <input type="text" className="w-[838px] h-[241px] rounded-lg" />
        </div>
        <button
          type="button"
          className=" ml-[70px] w-[213px] mt-[36px] rounded-lg bg-orange-500 p-2 text-white hover:transition duration-700 ease-in-out hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Massage;
