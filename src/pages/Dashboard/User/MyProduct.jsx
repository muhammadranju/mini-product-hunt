import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's products from the database (mocked here)
    const fetchProducts = async () => {
      // Replace with actual API call
      const mockProducts = [
        {
          id: 1,
          name: "Product 1",
          votes: 12,
          status: "Pending",
        },
        {
          id: 2,
          name: "Product 2",
          votes: 8,
          status: "Accepted",
        },
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  const handleUpdate = (productId) => {
    navigate(`/dashboard/user/update-product/${productId}`);
  };

  const handleDelete = (productId) => {
    // Simulate deleting product from the database
    setProducts(products.filter((product) => product.id !== productId));
    toast.success("Product deleted successfully!");
    // Add actual API call to delete the product here
  };
  return (
    <div className="ml-0 md:ml-64 py-16 mt-5 h-screen overflow-auto bg-gray-50">
      <div className=" w-11/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          My Products
        </h2>

        {/* Table */}
        <div className="overflow-x-auto  rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Product Name
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Votes
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Status
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-gray-800">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 border-b text-center text-gray-700">
                    {product.votes}
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <span
                      className={`${
                        product.status === "Accepted"
                          ? "bg-green-200 text-green-800"
                          : product.status === "Rejected"
                          ? "bg-red-200 text-red-800"
                          : "bg-yellow-200 text-yellow-800"
                      } py-1 px-3 rounded-full text-sm`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                        onClick={() => handleUpdate(product.id)}
                      >
                        Update
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
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

export default MyProduct;
