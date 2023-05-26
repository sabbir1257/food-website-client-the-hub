import React from "react";
import Hero from "../Page/Hero";
import Cart from "./Cart";
import Trusted from "../Page/Trusted";
import Chefs from "../components/chef/Chefs";

const Home = () => {
  return (
    <div>
        <Hero/>
        <Chefs/>
        <Cart/>
        <Trusted/>
    </div>
  );
};

export default Home;
