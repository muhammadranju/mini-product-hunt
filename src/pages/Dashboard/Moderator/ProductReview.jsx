import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ProductReview = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products for review (mocked here)
    const fetchProducts = async () => {
      // Replace with actual API call
      const mockProducts = [
        { id: 1, name: "Product A", status: "Pending" },
        { id: 2, name: "Product B", status: "Accepted" },
        { id: 3, name: "Product C", status: "Pending" },
      ];
      // Sort products by status: Pending first
      const sortedProducts = mockProducts.sort((a, b) =>
        a.status === "Pending" ? -1 : 1
      );
      setProducts(sortedProducts);
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (productId) => {
    navigate(`/dashboard/moderator/product-details/${productId}`);
  };

  const handleMakeFeatured = (productId) => {
    // Update product to be featured (mock action)
    toast.success("Product marked as featured!");
    // Add actual API call here
  };

  const handleAccept = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: "Accepted" } : product
      )
    );
    toast.success("Product accepted!");
    // Add actual API call here
  };

  const handleReject = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: "Rejected" } : product
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
        <div className="overflow-x-auto  rounded-lg">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="">
              <tr>
                <th className="py-4 px-6 text-left text-lg font-medium">
                  Product Name
                </th>
                <th className="py-4 px-6 text-center text-lg font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-gray-800 font-medium">
                    {product.name}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                        onClick={() => handleViewDetails(product.id)}
                      >
                        View Details
                      </button>
                      <button
                        className="bg-yellow-500 text-white py-2 px-4 rounded-md text-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        onClick={() => handleMakeFeatured(product.id)}
                      >
                        Make Featured
                      </button>
                      <button
                        className={`bg-green-500 text-white py-2 px-4 rounded-md text-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition ${
                          product.status !== "Pending"
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => handleAccept(product.id)}
                        disabled={product.status !== "Pending"}
                      >
                        Accept
                      </button>
                      <button
                        className={`bg-red-500 text-white py-2 px-4 rounded-md text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition ${
                          product.status !== "Pending"
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => handleReject(product.id)}
                        disabled={product.status !== "Pending"}
                      >
                        Reject
                      </button>
                    </div>
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
