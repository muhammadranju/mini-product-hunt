import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users (mocked here)
    const fetchUsers = async () => {
      // Replace with actual API call
      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const handleMakeModerator = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: "Moderator" } : user
      )
    );
    toast.success("User promoted to Moderator!");
    // Add actual API call here
  };

  const handleMakeAdmin = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: "Admin" } : user
      )
    );
    toast.success("User promoted to Admin!");
    // Add actual API call here
  };
  return (
    <div className="ml-0 md:ml-64 py-16 h-screen overflow-auto bg-gray-50">
      <div className="w-11/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Manage Users
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User Name</th>
              <th className="py-2 px-4 border-b">User Email</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    className={`bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-700 ${
                      user.role === "Moderator" &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => handleMakeModerator(user.id)}
                    disabled={user.role === "Moderator"}
                  >
                    Make Moderator
                  </button>
                  <button
                    className={`bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700 ${
                      user.role === "Admin" && "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => handleMakeAdmin(user.id)}
                    disabled={user.role === "Admin"}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
