import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LuPin } from "react-icons/lu";
import { AuthContext } from "@/context/AuthProvider";
const ProductReview = () => {
  const [products, setProducts] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (productId) => {
    setOpenDropdown(openDropdown === productId ? null : productId);
  };
  const navigate = useNavigate();
  const { setLoading } = useContext(AuthContext);

  useEffect(() => {
    // Fetch all products for review (mocked here)
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products?all=true`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setProducts(data.data);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (productId) => {
    navigate(`/dashboard/moderator/product-details/${productId}`);
  };

  const handelUpdateStatus = async (productId, status, value) => {
    setLoading(true);
    const statusValue = {
      [status]: value, // Dynamically set the status key with its corresponding value
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Ensure Content-Type is JSON
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(statusValue), // Directly stringify the dynamic object
        }
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      setLoading(false);
      // Additional handling if needed
    } catch (error) {
      console.error("Failed to update status:", error);
      // Handle error (e.g., show a notification)
    }
  };

  const handleMakeFeatured = async (productId) => {
    try {
      const featured = true;
      handelUpdateStatus(productId, "featured", featured);
      toast.success("Product marked as featured!");
      // setLoading(false);
    } catch (error) {
      console.error("Error marking product as featured:", error);
      toast.error("Failed to mark product as featured. Please try again.");
    }
  };

  const handleRemoveFeatured = async (productId) => {
    try {
      const featured = false;
      handelUpdateStatus(productId, "featured", featured);

      toast.success("Product marked as featured!");
    } catch (error) {
      console.error("Error marking product as featured:", error);
      toast.error("Failed to mark product as featured. Please try again.");
    }
  };

  const handleAccept = (productId) => {
    handelUpdateStatus(productId, "status", "accepted");
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: "accepted" } : product
      )
    );
    toast.success("Product accepted!");
    // Add actual API call here
  };

  const handleReject = (productId) => {
    handelUpdateStatus(productId, "status", "pending");
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: "rejected" } : product
      )
    );
    toast.error("Product rejected!");
    // Add actual API call here
  };

  return (
    <div className="ml-0 md:ml-64 py-16 h-screen overflow-auto bg-gray-50">
      <div className="w-11/12 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Product Review Queue
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-lg font-medium">
                  Product Image
                </th>
                <th className="py-4 px-6 text-left text-lg font-medium">
                  Product Name
                </th>
                <th className="py-4 px-6 text-left text-lg font-medium">
                  Featured Status
                </th>
                <th className="py-4 px-6 text-left text-lg font-medium">
                  Status
                </th>

                <th className="py-4 px-6 text-center text-lg font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 relative"
                >
                  <td className="py-3 px-6 text-gray-800 font-medium">
                    <img
                      src={product.productImage}
                      className="w-12 h-12 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-6 text-gray-800 font-medium capitalize">
                    {product.productName}
                  </td>
                  <td
                    className={`py-3 px-6  relative font-bold ${
                      product.featured ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.featured ? "Featured" : "Not Featured"}
                  </td>
                  <td className="py-3 px-6 text-gray-800 font-medium capitalize">
                    {product.status}
                  </td>

                  <td className="py-3 px-6 text-center relative">
                    <button
                      onClick={() => toggleDropdown(product._id)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    >
                      Actions
                    </button>
                    {openDropdown === product._id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000]">
                        <ul className="py-1">
                          <li>
                            <Link
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                              to={`/product/${product.slug}`}
                            >
                              View Product
                            </Link>
                          </li>
                          {product.featured ? (
                            <li>
                              <button
                                onClick={() =>
                                  handleRemoveFeatured(product._id)
                                }
                                className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                              >
                                Remove Featured
                              </button>
                            </li>
                          ) : (
                            <li>
                              <button
                                onClick={() => handleMakeFeatured(product._id)}
                                className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                              >
                                Mark as Featured
                              </button>
                            </li>
                          )}
                          <li>
                            <button
                              onClick={() => handleAccept(product._id)}
                              disabled={product.status !== "pending"}
                              className={`w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100 transition ${
                                product.status !== "pending"
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              Accept
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleReject(product._id)}
                              disabled={product.status !== "pending"}
                              className={`w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100 transition ${
                                product.status !== "pending"
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              Reject
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
