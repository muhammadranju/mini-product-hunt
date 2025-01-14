import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ReportedContents = () => {
  const [reportedProducts, setReportedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch reported products (mocked here)
    const fetchReportedProducts = async () => {
      // Replace with actual API call
      const mockReportedProducts = [
        { id: 1, name: "Reported Product A" },
        { id: 2, name: "Reported Product B" },
      ];
      setReportedProducts(mockReportedProducts);
    };

    fetchReportedProducts();
  }, []);

  const handleViewDetails = (productId) => {
    navigate(`/dashboard/moderator/product-details/${productId}`);
  };

  const handleDelete = (productId) => {
    setReportedProducts(
      reportedProducts.filter((product) => product.id !== productId)
    );
    toast.success("Product deleted successfully!");
    // Add actual API call here
  };
  return (
    <div className="ml-0 md:ml-64 py-16 h-screen overflow-auto bg-gray-50">
      <div className="w-11/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reported Contents
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    className="bg-gray-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-gray-700"
                    onClick={() => handleViewDetails(product.id)}
                  >
                    View Details
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
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

export default ReportedContents;
