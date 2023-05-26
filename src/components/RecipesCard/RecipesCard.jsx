import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipesCard = ({ singleData }) => {
  const { recipe_name, cooking_method, food_image, ratings, ingredient } =
    singleData;

  const [fold, setFold] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const handelFavoriteBtn = () => {
    toast("Added in Favorite");
    setIsLiked(true);
  };

  return (
    <article className="p-4 rounded border w-full">
      <img
        className="w-full h-[450px] rounded object-cover"
        src={food_image}
        alt=""
      />
      <div className="text-center">
        <h3 className=" text-xl font-bold my-3">{recipe_name}</h3>
        <div className=" flex justify-center">
        </div>
        <div>
            <h1 className="text-2xl">Rating: {ratings}</h1>
        </div>
        <button
          onClick={handelFavoriteBtn}
          disabled={isLiked}
          className={` w-[150px] py-3 rounded text-white my-2 ${
            isLiked ? "bg-lime-500 cursor-not-allowed" : "bg-lime-700"
          }`}
        >
          {isLiked ? "Favorited" : "Favorite"}
        </button>
        <div className="border p-4 rounded">
          <span className="font-bold text-xl ">ingredient : </span>
          <div className="md:flex gap-3 flex-wrap">
            {singleData?.ingredient &&
              singleData.ingredient.map((ingredient, index) => (
                <span key={index}>{ingredient}</span>
              ))}
          </div>
        </div>

        {fold ? (
          <>
            <p className=" text-gray-500">
              {cooking_method.substring(0, 400)}.....
            </p>
            <span
              className="cursor-pointer text-blue-600 "
              onClick={() => setFold(!fold)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <p className=" text-gray-900">{cooking_method}.....</p>
            <span
              className="cursor-pointer text-blue-600 "
              onClick={() => setFold(!fold)}
            >
              Read Less
            </span>
          </>
        )}
      </div>
      <ToastContainer/>
    </article>
  );
};

export default RecipesCard;
