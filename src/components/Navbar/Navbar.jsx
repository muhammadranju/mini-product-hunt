import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  return (
    <div className="shadow sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-white/70">
      <div className="navbar w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
          <details className="dropdown">
            <summary className="btn m-1 bg-transparent border-none hover:bg-transparent shadow-none">
              <div className="flex items-center justify-start space-x-1">
                <div
                  className="dropdown bg-white/70 rounded-full  border-2 tooltip tooltip-bottom"
                  data-tooltip-id="my-tooltip"
                >
                  <img
                    src={"https://avatars.githubusercontent.com/u/80270685?v=4"}
                    className="lg:w-12 w-14  rounded-full    p-1"
                    alt=""
                  />
                </div>
                <div className="text-start lg:flex flex-col hidden">
                  <p className="text-base ">{"User Name"}</p>
                  <span className="text-xs">My Account</span>
                </div>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] lg:-ml-10 -ml-12 w-44 p-2 shadow">
              <li className="text-lg ml-4">User Name</li>
              <li className="text-lg">
                {/* <IoIosLogOut className="text-xl font-bold" /> */}
                <Link to={"/dashboard/user/my-profile"}>Dashboard</Link>
              </li>
              <li>
                <button
                  //   onClick={}
                  className="btn mt-1 bg-red-600 text-white hover:bg-red-700 "
                >
                  Log Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
