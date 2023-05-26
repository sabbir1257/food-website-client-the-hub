import React from "react";
import img1 from "../img/cart1.jpg";
import img2 from "../img/cart2.jpg";
import img3 from "../img/cart3.jpg";
import img4 from "../img/cart4.jpg";
import img5 from "../img/cart5.jpg";
import img6 from "../img/cart6.jpg";

const Cart = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-center text-4xl font-serif font-bold underline">
          Food items.
        </h1>
        <p className="my-4 mb-8 text-gray-500">
          Our all Products
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img1} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">Chicken Pasta</h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 17.5</span>
          </p>
        </div>
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img2} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">Chicken Burger</h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 19.5</span>
          </p>
        </div>
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img3} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">Beef Burger</h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 21.5</span>
          </p>
        </div>
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img4} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">
            Beef Masala Pizza
          </h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 20.5</span>
          </p>
        </div>
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img5} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">Franch Fry</h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 13.5</span>
          </p>
        </div>
        <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
          <img className="w-72 h-72" src={img6} alt="" />
          <h1 className="text-2xl font-sans font-semibold ">Italian Pasta</h1>
          <p className="my-4">
            Price: <span className="font-semibold">$ 18</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
