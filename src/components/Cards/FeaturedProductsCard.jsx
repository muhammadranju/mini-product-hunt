import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProductsCard = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Link to={`/product/${product?.slug}`}>
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={product?.productImage}
          alt={`Trending Product `}
        />
      </Link>
      <h4 className="text-xl font-semibold mb-2 capitalize">
        {product?.productName}
      </h4>
      <p className="text-slate-600 mb-4">
        {product?.description.length > 80
          ? product?.description.slice(0, 50) + "..."
          : product?.description}
      </p>
      <div className="flex items-center space-x-2 space-y-1 flex-wrap my-4">
        {product?.tags.slice(0, 2).map((tag) => (
          <div key={tag} className="badge badge-ghost text-xs">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-slate-800 text-slate-50 py-2 px-4 rounded-lg flex items-center space-x-2">
          <FaChevronUp className="mr-1" />
          Upvote 25
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
