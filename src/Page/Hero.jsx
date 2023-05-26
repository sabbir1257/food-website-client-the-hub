import React from "react";
import hero from "../img/hero.webp";
import { BsBoxArrowUpRight } from 'react-icons/bs';


const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative mb-10">
      <div className="before:content-[''] w-full h-[90vh] relative before:absolute before:bg-[#00000077] before:top-0 before:right-0 before:left-0 before:bottom-0">
        <img className="w-full h-full object-cover" src={hero} alt="" />
      </div>

      <div className="absolute max-w-[1240px] w-full mx-auto top-[30%] -mt-6 left-5 right-0 justify-center flex-col text-white h-full ">
        <h2 className="sm:text-6xl text-3xl pl-2 font-bold mt-10 leading-normal px-4 text-lime-300">
          You feel Hungry?<br />{" "}
          <span className="text-white">
            Please call us for your meal... <br /> Wanna Eat!{" "}
          </span>
        </h2>
        <button className="px-6 py-3 bg-lime-300 text-black rounded mt-6 ml-2 flex items-center gap-2">
          Explore Here <BsBoxArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
