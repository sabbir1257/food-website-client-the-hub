import React from "react";
import Navbar from "../components/Page/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Page/Footer";


const Root = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
