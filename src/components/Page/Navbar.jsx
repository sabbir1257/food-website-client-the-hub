import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="">
      <div className="flex justify-between items-center py-4">
        <Link to="/">
          <h2 className="text-2xl	font-bold text-lime-400">The Hub</h2>
        </Link>
        <span className="md:hidden">
          {toggle ? (
            <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} />
          ) : (
            <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
          )}
        </span>
        <ul
          className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-black bg-opacity-90 md:text-black top-16 bg-lime-300 md:bg-transparent w-full md:w-auto md:flex-row gap-5 absolute md:static ${
            toggle ? "left-0" : "-left-full"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-lime-400 underline underline-offset-4 font-bold " : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-lime-400 underline underline-offset-4 font-bold" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            {user?.photoURL ? (
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={user?.photoURL}
                title={user.displayName}
                alt=""
              />
            ) : (
              ""
            )}
          </li>
          <li>
            {user ? (
              <button
                onClick={logOut}
                className="bg-lime-300 px-4 py-2  text-white"
              >
                LogOut
              </button>
            ) : (
              <button className="bg-lime-300 px-4 py-2 rounded text-white">
                <Link to="/login">Login</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
