import React from "react";
import Home from "./image/home.png";

const About = () => {
  return (
    <div className="flex justify-around h-[715px] p-2 w-full bg-orange-100 mb-[100px]">
      <div>
        <img src={Home} alt="photo" />
      </div>
      <div>
        <p className="text-2xl  text-orange-400 font-bold mt-[231px]">
          About us
        </p>
        <h3 className="text-[32px] font-semibold mt-3 mb-6">
          Efficiency, Building, Budget & Time
        </h3>
        <p className="text-lg">
          Hideva Group is a team of skilled construction professionals <br />{" "}
          with a passion for building and a commitment to excellence. <br /> We
          provide a range of services, from small-scale renovations <br /> to
          large-scale commercial construction. We believe in <br /> transparency
          and communication, and we work closely with <br /> our clients to
          ensure their needs are met. Thank you for <br />
          considering us for your construction needs.
        </p>
      </div>
    </div>
  );
};

export default About;
