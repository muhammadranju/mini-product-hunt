import Cards from "@/components/Cards/Cards";
import React from "react";

const Products = () => {
  return (
    <>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto my-20">
        <div className="max-w-[40%] mx-auto my-2">
          <label
            htmlFor="username"
            className="block text-lg font-semibold text-center text-gray-800 dark:text-gray-300"
          >
            Search Product
          </label>
          <input
            type="text"
            placeholder="Search your product with tags..."
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Products;
