import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineAdminPanelSettings,
  MdRateReview,
  MdReport,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { RiCoupon3Line } from "react-icons/ri";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-64 transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <h1 className="text-xl font-bold leading-none">
              <span className="text-yellow-700">Task Manager</span> App
            </h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <MdDashboard className="mr-2 text-lg" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/user/my-profile"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <FaRegUser className="mr-2 text-lg" />
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/user/add-product"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <IoMdAddCircle className="mr-2 text-lg" />
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/user/my-product"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <AiOutlineProduct className="mr-2 text-lg" />
                  My Product
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/moderator/product-review"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <MdRateReview className="mr-2 text-lg" />
                  Product Review
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/moderator/reported-contents"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <MdReport className="mr-2 text-lg" />
                  Reported Contents
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admin/statistics"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <FcStatistics className="mr-2 text-lg" />
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admin/manage-users"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <MdOutlineAdminPanelSettings className="mr-2 text-lg" />
                  Manage Users
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admin/manage-coupons"
                  className="flex items-center py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-yellow-100"
                >
                  <RiCoupon3Line Settings className="mr-2 text-lg" />
                  Manage Coupons
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button>{" "}
          <span className="font-bold text-sm ml-2">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
