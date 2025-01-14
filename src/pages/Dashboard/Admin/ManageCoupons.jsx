import React, { useState, useEffect } from "react";
import axios from "axios";
const ManageCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    expiryDate: "",
    description: "",
    discount: 0,
  });

  // Fetch existing coupons from the server
  const fetchCoupons = async () => {
    try {
      const response = await axios.get("/api/coupons"); // Replace with your actual API endpoint
      setCoupons(response.data);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    }
  };

  // Add new coupon
  const addCoupon = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/coupons", newCoupon); // Replace with your actual API endpoint
      setCoupons([...coupons, response.data]);
      setNewCoupon({ code: "", expiryDate: "", description: "", discount: 0 });
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  // Delete coupon
  const deleteCoupon = async (id) => {
    try {
      await axios.delete(`/api/coupons/${id}`); // Replace with your actual API endpoint
      setCoupons(coupons.filter((coupon) => coupon._id !== id));
    } catch (error) {
      console.error("Error deleting coupon:", error);
    }
  };

  // Edit coupon (for simplicity, we only update description and discount)
  const editCoupon = async (id, updatedCoupon) => {
    try {
      const response = await axios.put(`/api/coupons/${id}`, updatedCoupon); // Replace with your actual API endpoint
      setCoupons(
        coupons.map((coupon) => (coupon._id === id ? response.data : coupon))
      );
    } catch (error) {
      console.error("Error editing coupon:", error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);
  return (
    <div className="ml-0 md:ml-64 py-16 max-h-screen overflow-auto">
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-50 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Manage Coupons
        </h2>

        {/* Add Coupon Form */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Add New Coupon</h3>
          <form onSubmit={addCoupon} className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-2 border border-gray-300 rounded w-full"
              value={newCoupon?.code}
              onChange={(e) =>
                setNewCoupon({ ...newCoupon, code: e.target.value })
              }
              required
            />
            <input
              type="date"
              placeholder="Expiry Date"
              className="p-2 border border-gray-300 rounded w-full"
              value={newCoupon?.expiryDate}
              onChange={(e) =>
                setNewCoupon({ ...newCoupon, expiryDate: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Description"
              className="p-2 border border-gray-300 rounded w-full"
              value={newCoupon?.description}
              onChange={(e) =>
                setNewCoupon({ ...newCoupon, description: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Discount Amount"
              className="p-2 border border-gray-300 rounded w-full"
              value={newCoupon?.discount}
              onChange={(e) =>
                setNewCoupon({ ...newCoupon, discount: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Coupon
            </button>
          </form>
        </div>

        {/* Coupons Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">All Coupons</h3>
          {coupons?.length === 0 ? (
            <p>No coupons found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2">Coupon Code</th>
                    <th className="border p-2">Expiry Date</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Discount Amount</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons?.map((coupon) => (
                    <tr key={coupon._id}>
                      <td className="border p-2">{coupon.code}</td>
                      <td className="border p-2">
                        {new Date(coupon.expiryDate).toLocaleDateString()}
                      </td>
                      <td className="border p-2">{coupon.description}</td>
                      <td className="border p-2">{coupon.discount}%</td>
                      <td className="border p-2">
                        <button
                          onClick={() =>
                            editCoupon(coupon._id, {
                              ...coupon,
                              description: "Updated Description", // Example updated data
                              discount: coupon.discount + 5, // Example updated discount
                            })
                          }
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteCoupon(coupon._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
