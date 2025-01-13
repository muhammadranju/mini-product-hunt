import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ toggleSidebar }) => {
  return (
    <header className="fixed right-0 top-0 left-0 bg-yellow-50 py-3 px-4 h-16 z-10">
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
        <div className="text-lg font-bold">
          <Link to="/" className="flex items-center">
            Product Hunt
          </Link>
        </div>
        <div>
          <button
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
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
