import React, { useState } from "react";
import { useApiData } from "../../Context/ApiDataProvider";
import ChefCard from "./ChefCart";

const Chefs = () => {
  const { chefs } = useApiData();

  const [cardCount, setCardCount] = useState(4);
  const [seeMore, setSeeMore] = useState(true);

  const slider = chefs.slice(0, cardCount);

  const handelSeeMoreBtn = () => {
    setCardCount(chefs.length);
    setSeeMore(false);
  };

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold">
        Our <span className="text-lime-500">Chefs</span>
      </h1>
      <p className="text-gray-600 text-center mt-2">
        The main chefs in our restaurant and supervisors of the chefs' crew
      </p>
      <div className="grid md:grid-cols-2 gap-6 container">
        {slider.map((chef) => (
          <ChefCard key={chef._id} chef={chef} />
        ))}
      </div>
      <button
        onClick={handelSeeMoreBtn}
        className={`bg-lime-500 py-2 px-5 block mx-auto  rounded-md hover:hover:bg-lime-600 mb-8 text-white font-semibold ${
          seeMore ? "" : "hidden"
        }`}
      >
        See More
      </button>
    </div>
  );
};

export default Chefs;
