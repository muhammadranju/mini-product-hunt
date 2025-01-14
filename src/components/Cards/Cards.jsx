import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Link to={"/product/jhsd"}>
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={`https://images.newscientist.com/wp-content/uploads/2023/10/27110638/SEI_177661765.jpg`}
          alt={`Trending Product `}
        />
      </Link>
      <h4 className="text-xl font-semibold mb-2">Product</h4>
      <p className="text-slate-600 mb-4">Description of trending product...</p>
      <div className="flex items-center space-x-2 space-y-1 flex-wrap my-4">
        <div className="badge badge-ghost">ghost</div>
        <div className="badge badge-ghost">ghost</div>
        <div className="badge badge-ghost">ghost</div>
        <div className="badge badge-ghost">ghost</div>
        <div className="badge badge-ghost">ghost</div>
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

export default Cards;
