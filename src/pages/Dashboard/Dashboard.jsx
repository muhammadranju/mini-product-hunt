import React, { useState } from "react";

const Dashboard = () => {
  return (
    <>
      <main className="ml-0 md:ml-64 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold">Good morning!</h1>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-600 font-semibold">
                  Here's what's happening with your projects today
                </span>
              </div>
            </div>
            <div className="border-t"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-2 xl:col-span-3 bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700">
                    Your Tasks
                  </h2>
                </div>
                <div className="mt-3 flex space-x-4">
                  <div className="flex-1 bg-white shadow rounded-lg px-4 py-2">
                    <div className="text-sm font-medium text-gray-600">
                      Task 1
                    </div>
                    <div className="text-xs text-gray-500">
                      Due date: <span>24 March 2023</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white shadow rounded-lg px-4 py-2">
                    <div className="text-sm font-medium text-gray-600">
                      Task 2
                    </div>
                    <div className="text-xs text-gray-500">
                      Due date: <span>28 March 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-bold">Projects</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Ongoing projects and their details
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
