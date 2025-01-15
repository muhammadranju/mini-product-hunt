import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Link to={`/product/${product?.slug}`}>
        <img
          className="w-full h-64 object-cover rounded-md mb-4"
          src={product?.productImage}
          alt={`Trending Product `}
        />
      </Link>
      <Link to={`/product/${product?.slug}`}>
        <h4 className="text-xl cursor-pointer font-semibold mb-2 capitalize">
          {product?.productName}
        </h4>
      </Link>
      <p className="text-slate-600 mb-4">
        {product?.description.length > 80
          ? product?.description.slice(0, 50) + "..."
          : product?.description}
      </p>
      <div className="flex items-center space-x-2 space-y-1 flex-wrap my-4">
        {product?.tags.map((tag) => (
          <div key={tag} className="badge badge-ghost">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-slate-800 text-slate-50 py-2 px-4 rounded-lg flex items-center space-x-2">
          <FaChevronUp className="mr-1" />
          Upvote {product?.upvotes}
        </button>
      </div>
    </div>
  );
};

export default Cards;
