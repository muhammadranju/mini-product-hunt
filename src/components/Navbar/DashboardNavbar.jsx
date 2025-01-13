import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const DashboardNavbar = ({ toggleSidebar }) => {
  return (
    <header className="fixed right-0 top-0 left-0 bg-white shadow py-4 px-4 h-20 z-10">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-yellow-600 focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
            />
          </svg>
        </button>
        <div className="text-lg font-bold pb-5 ">
          <NavLink
            to={"/"}
            className="btn btn-ghost text-xl flex items-center hover:bg-transparent bg-transparent"
          >
            <span className="text-blue-600 font-bold text-4xl">
              <FaProductHunt />
            </span>{" "}
            <span className="text-slate-800 font-bold text-3xl -ml-2">
              hunt
            </span>
          </NavLink>
        </div>
        <div>
          {/* <button
            type="button"
            className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"
          >
            <span className="text-sm">This week</span>
            <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button> */}
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
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] lg:-ml-10 -ml-12 lg:w-44 p-2 shadow">
              <li className="text-lg font-semibold ml-4 text-slate-800">
                User Name
              </li>
              <li className="text-lg text-slate-800">
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
    </header>
  );
};

export default DashboardNavbar;
