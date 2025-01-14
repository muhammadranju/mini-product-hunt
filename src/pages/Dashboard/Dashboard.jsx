import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaProductHunt,
  FaRegThumbsUp,
  FaChartBar,
} from "react-icons/fa";
import { MdDashboard, MdRateReview } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

// Mock data for statistics (can be fetched from your server)
const statisticsData = {
  totalProducts: 1500,
  acceptedProducts: 1300,
  pendingProducts: 200,
  totalReviews: 2500,
  totalUsers: 500,
};
const Dashboard = () => {
  const [productStatus, setProductStatus] = useState("pending");

  useEffect(() => {
    // fetch data on page load (example: fetching statistics)
  }, []);
  return (
    <>
      <main className="ml-0 md:ml-64 py-16 max-h-screen overflow-auto">
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto py-10 px-5">
            {/* Dashboard Title */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-10 text-center">
              Welcome to Your Dashboard
            </h1>

            {/* Statistics Section */}
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg shadow-lg text-white">
                <div className="flex items-center">
                  <FaProductHunt className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Total Products</h3>
                    <p className="text-3xl font-bold">
                      {statisticsData.totalProducts}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg text-white">
                <div className="flex items-center">
                  <FaRegThumbsUp className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Accepted Products</h3>
                    <p className="text-3xl font-bold">
                      {statisticsData.acceptedProducts}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-400 to-teal-600 rounded-lg shadow-lg text-white">
                <div className="flex items-center">
                  <FaUsers className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Total Users</h3>
                    <p className="text-3xl font-bold">
                      {statisticsData.totalUsers}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Status Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Product Status
              </h2>
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                  <MdRateReview className="text-4xl text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Pending Products
                    </h3>
                    <p className="text-xl font-bold text-gray-800">
                      {statisticsData.pendingProducts}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AiOutlineFileText className="text-4xl text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Total Reviews
                    </h3>
                    <p className="text-xl font-bold text-gray-800">
                      {statisticsData.totalReviews}
                    </p>
                  </div>
                </div>
              </div>

              {/* Table for Product Reviews */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-3 px-6 text-left text-gray-600">
                        Product Name
                      </th>
                      <th className="py-3 px-6 text-left text-gray-600">
                        Review Count
                      </th>
                      <th className="py-3 px-6 text-left text-gray-600">
                        Status
                      </th>
                      <th className="py-3 px-6 text-left text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example Row */}
                    <tr>
                      <td className="py-3 px-6 text-gray-700">Product 1</td>
                      <td className="py-3 px-6 text-gray-700">150</td>
                      <td className="py-3 px-6 text-gray-700">
                        <span className="bg-yellow-400 text-white py-1 px-3 rounded-full">
                          Pending
                        </span>
                      </td>
                      <td className="py-3 px-6 text-gray-700">
                        <button className="text-blue-500 hover:text-blue-700">
                          View Details
                        </button>
                        <button className="ml-4 text-red-500 hover:text-red-700">
                          Reject
                        </button>
                        <button className="ml-4 text-green-500 hover:text-green-700">
                          Accept
                        </button>
                      </td>
                    </tr>

                    {/* Add more rows dynamically as needed */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer transition-all">
                <div className="flex items-center">
                  <MdDashboard className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Dashboard</h3>
                    <p className="text-sm">Go back to the Dashboard</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 cursor-pointer transition-all">
                <div className="flex items-center">
                  <FaChartBar className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">View Analytics</h3>
                    <p className="text-sm">Go to analytics page</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 cursor-pointer transition-all">
                <div className="flex items-center">
                  <MdRateReview className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Product Reviews</h3>
                    <p className="text-sm">Review and manage products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
