import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthProvider";
import toast from "react-hot-toast";

const ManageCoupons = () => {
  // Ensure `coupons` is always an array
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    expiryDate: "",
    description: "",
    discount: 0,
  });

  const [updatedCoupon, setUpdatedCoupon] = useState({
    code: "",
    expiryDate: "",
    description: "",
    discount: 0,
  });

  const { setLoading } = useContext(AuthContext);
  // Fetch existing coupons from the server
  const fetchCoupons = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BackendURL}/api/admin/coupons`
      ); // Replace with your actual API endpoint

      if (Array.isArray(response.data.data)) {
        setCoupons(response.data.data);
      } else {
        console.error("Unexpected response format:", response.data);
        setCoupons([]); // Ensure `coupons` remains an array
      }
    } catch (error) {
      console.error("Error fetching coupons:", error);
      setCoupons([]); // Fallback to empty array on error
    }
  };

  // Add new coupon
  const addCoupon = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/admin/coupons`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify content type
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newCoupon), // Send JSON stringified body
        }
      );

      if (response.ok) {
        setLoading(false);
      }

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json(); // Parse JSON response
      setCoupons([...coupons, responseData]); // Update state with new coupon
      // setNewCoupon({ code: "", expiryDate: "", description: "", discount: 0 }); // Reset form

      console.log("Coupon added successfully:", responseData);
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  // Delete coupon
  const deleteCoupon = async (id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Do want to delete this coupon?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willModerator) => {
        if (willModerator) {
          await fetch(
            `${import.meta.env.VITE_BackendURL}/api/admin/coupons/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json", // Specify content type
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          swal("Coupon deleted!", {
            icon: "success",
          });
          setCoupons(coupons.filter((coupon) => coupon._id !== id));
          toast.success("Coupon deleted!");
        } else {
          swal("Coupon not deleted!", {
            icon: "error",
          });
        }
      });
    } catch (error) {
      console.error("Error deleting coupon:", error);
    }
  };

  // Edit coupon (for simplicity, we only update description and discount)
  const handleEditCoupon = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/admin/coupons/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json", // Specify content type
          },
        }
      );

      const data = await response.json();
      setUpdatedCoupon(data?.data);
      console.log(data);
      if (response.ok) {
        setLoading(false);
      }
      document.getElementById("editCoupon").showModal();
    } catch (error) {
      console.error("Error editing coupon:", error);
    }
  };

  const editCoupon = async (id, updatedCoupon) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/admin/coupons/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Specify content type
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedCoupon), // Send JSON stringified body
        }
      );

      if (response.ok) {
        setLoading(false);
      }

      document.getElementById("editCoupon").close();
    } catch (error) {
      console.error("Error editing coupon:", error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <div className="ml-0 md:ml-64 py-16 max-h-screen overflow-auto">
      <div className="w-11/12 mx-auto mt-10 p-6 bg-gray-50 shadow-lg rounded-lg">
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
              type="text"
              placeholder="Description"
              className="p-2 border border-gray-300 rounded w-full"
              value={newCoupon?.description}
              onChange={(e) =>
                setNewCoupon({ ...newCoupon, description: e.target.value })
              }
              required
            />
            <div className="flex flex-row justify-between gap-x-5 items-center gap-y-4">
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
            </div>
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
          {Array.isArray(coupons) && coupons?.length === 0 ? (
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
                  {Array?.isArray(coupons) &&
                    coupons?.map((coupon) => (
                      <tr key={coupon?._id}>
                        <td className="border p-2">{coupon?.code}</td>
                        <td className="border p-2">
                          {new Date(coupon?.expiryDate).toLocaleDateString()}
                        </td>
                        <td className="border p-2">{coupon?.description}</td>
                        <td className="border p-2">{coupon?.discount}%</td>
                        <td className="border p-2">
                          <button
                            // onClick={() =>
                            //   editCoupon(coupon?._id, {
                            //     ...coupon,
                            //     description: "Updated Description",
                            //     discount: coupon?.discount + 5,
                            //   })
                            // }
                            onClick={() => handleEditCoupon(coupon?._id)}
                            className="text-blue-500 hover:text-blue-700 mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCoupon(coupon?._id)}
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

      <dialog id="editCoupon" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update!</h3>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Coupon Code
            </label>
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-2 border border-gray-300 rounded w-full"
              value={updatedCoupon?.code}
              onChange={(e) =>
                setUpdatedCoupon({ ...updatedCoupon, code: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Description"
              className="p-2 border border-gray-300 rounded w-full"
              value={updatedCoupon?.description}
              onChange={(e) =>
                setUpdatedCoupon({
                  ...updatedCoupon,
                  description: e.target.value,
                })
              }
              required
            />
            <div className="flex flex-row justify-between gap-x-5 items-center gap-y-4">
              <input
                type="number"
                placeholder="Discount Amount"
                className="p-2 border border-gray-300 rounded w-full"
                value={updatedCoupon?.discount}
                onChange={(e) =>
                  setUpdatedCoupon({
                    ...updatedCoupon,
                    discount: e.target.value,
                  })
                }
                required
              />
              <input
                type="date"
                placeholder="Expiry Date"
                className="p-2 border border-gray-300 rounded w-full"
                value={updatedCoupon?.expiryDate}
                onChange={(e) =>
                  setUpdatedCoupon({
                    ...updatedCoupon,
                    expiryDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <button
              onClick={() => editCoupon(updatedCoupon._id, updatedCoupon)}
              type="submit"
              className="px-4 py-2 w-full bg-blue-600 text-white rounded"
            >
              Update Coupon
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageCoupons;
