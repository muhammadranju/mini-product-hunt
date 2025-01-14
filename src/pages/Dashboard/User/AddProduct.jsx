import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext); // Assume user info comes from context
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [externalLink, setExternalLink] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productImage || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const productData = {
      productName,
      productImage, // You would typically handle the image upload separately
      description,
      ownerName: user.name,
      ownerImage: user.image,
      ownerEmail: user.email,
      tags,
      externalLink,
      createdAt: new Date(),
    };

    // Simulate saving to database
    try {
      // Replace with actual API call to save product data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Product added successfully!");
      navigate("/dashboard/user/my-product");
    } catch (error) {
      toast.error("Failed to add product.");
    }
  };
  return (
    <div className="ml-0 md:ml-64 py-16 mt-5 h-screen overflow-auto bg-gray-50">
      <div className="w-11/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Product Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="text"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Product Image"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Description"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <TagsInput
              value={tags}
              onChange={setTags}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeHolder="Tags"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              External Link
            </label>
            <input
              type="url"
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="External Link"
            />
          </div>

          <div className="flex flex-row justify-between  gap-x-5 items-center gap-y-4">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Owner Name
              </label>
              <input
                type="text"
                value={user.displayName}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                disabled
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Owner Email
              </label>
              <input
                type="email"
                value={user.email}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                disabled
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center px-4 py-3 flex items-center justify-center text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-800 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
