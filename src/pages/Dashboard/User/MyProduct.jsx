import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch user's products from the database (mocked here)
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products?email=${user.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setProducts(data.data);
      }
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
                  Product Image
                </th>
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
                    <img
                      src={product.productImage}
                      className="w-12 h-12 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 border-b text-gray-800">
                    {product.productName}
                  </td>
                  <td className="py-3 px-4 border-b text-center text-gray-700">
                    {product.upvotes}
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <span
                      className={`${
                        product.status === "accepted"
                          ? "bg-green-200 text-green-800"
                          : product.status === "rejected"
                          ? "bg-red-200 text-red-800"
                          : "bg-yellow-200 text-yellow-800"
                      } py-1 px-3 rounded-full text-sm capitalize`}
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
