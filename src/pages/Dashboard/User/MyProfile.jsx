import { AuthContext } from "@/context/AuthProvider";
import useRole from "@/hooks/useRole";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, signOut } = useContext(AuthContext);
  const [role] = useRole();
  console.log(role);

  const handleSubscribe = () => {
    // Simulate subscription logic
    toast.success("Redirecting to payment page...");
    // After payment success
    setUser((prevState) => ({ ...prevState, isSubscribed: true }));
    toast.success("Subscription successful!");
  };

  const isSubscribed = role?.user?.subscription;
  return (
    <div className="ml-0 md:ml-64 py-16 h-screen overflow-auto pt-36 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-2xl rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-500"
          />
          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          {role?.role === "admin" || role?.role === "moderator" ? null : (
            <>
              {!isSubscribed ? (
                <button
                  onClick={handleSubscribe}
                  className="mt-6 w-full text-center px-5 py-3 text-base font-medium tracking-wide text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Subscribe for $9.99
                </button>
              ) : (
                <div className="mt-6 flex items-center gap-x-3">
                  <p className="text-green-600 font-semibold text-lg">
                    Membership Status:
                  </p>
                  <p className="text-white px-4 py-2 bg-green-600 rounded-full">
                    Verified
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
