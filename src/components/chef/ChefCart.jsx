import React from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const { name, experience, number_of_recipes, likes, image, _id } = chef;

  return (
    <main className="w-full  mx-auto mt-20 grid md:grid-cols-2 mb-10 border rounded border-lime-500 p-6">
      <div className="p-5">
        <h1 className="text-4xl font-bold py-5">{name}</h1>
        <p className="text-2xl my-2 text-gray-500">
          The Best Recipes : {number_of_recipes}
        </p>
        <p className="text-2xl my-2 text-gray-500">
          {" "}
          Experience : {experience}
        </p>
        <p className="text-2xl flex items-center gap-2 my-2 text-gray-500">
          <span className="text-yellow-600 ">
            <BiLike />
          </span>{" "}
          {likes}
        </p>
        <Link to={`/view-details/${_id}`}>
          <button className="bg-lime-500 hover:bg-lime-600 w-full py-2 mt-10 rounded-md text-lg font-semibold text-white">
            View Details
          </button>
        </Link>
      </div>
      <div>
        <LazyLoad
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img className=" w-80 h-80 rounded-md" src={image} alt="Shoes" />
        </LazyLoad>
      </div>
    </main>
  );
};

export default ChefCard;
