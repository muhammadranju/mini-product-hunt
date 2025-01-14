import { AuthContext } from "@/context/AuthProvider";
import useRole from "@/hooks/useRole";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, signOut } = useContext(AuthContext);
  const [role] = useRole();
  // const [user, setUser] = useState({
  //   name: "John Doe",
  //   image: "https://via.placeholder.com/150",
  //   email: "john.doe@example.com",
  //   isSubscribed: false,
  //   subscriptionAmount: "$9.99",
  //   status: "Verified",
  // });
  const handleSubscribe = () => {
    // Simulate subscription logic
    toast.success("Redirecting to payment page...");
    // After payment success
    setUser((prevState) => ({ ...prevState, isSubscribed: true }));
    toast.success("Subscription successful!");
  };

  const isSubscribed = false;
  return (
    <div className="ml-0 md:ml-64 py-16  h-screen overflow-auto pt-36 bg-gray-50">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full shadow-md"
          />
          <h2 className="text-xl font-semibold mt-4">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
          {role?.role === "admin" || role?.role === "moderator" ? (
            ""
          ) : (
            <>
              {!isSubscribed ? (
                <button
                  onClick={handleSubscribe}
                  className="mt-6 text-center px-4 py-3 flex items-center justify-center text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-800 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                >
                  Subscribe for $9.99
                </button>
              ) : (
                <div className="mt-6 flex items-center gap-x-2">
                  <p className="text-green-600 font-semibold">
                    Membership Status:
                  </p>
                  <p className="text-gray-900 p-3 bg-green-500 rounded-lg ">
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
