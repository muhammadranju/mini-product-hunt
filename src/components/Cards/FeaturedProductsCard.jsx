import { AuthContext } from "@/context/AuthProvider";
import useRole from "@/hooks/useRole";
import React, { useContext } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const FeaturedProductsCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();
  const navigate = useNavigate();
  const handleUpvote = async (productId, ownerId) => {
    if (!user) {
      navigate("/auth/login");
      return;
    }
    if (role?.user?.email === ownerId) {
      alert("You cannot upvote your own product.");
      return;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Link to={`/product/${product?.slug}`}>
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={product?.productImage}
          alt={`Trending Product `}
        />
      </Link>
      <Link to={`/product/${product?.slug}`}>
        <h4 className="text-xl font-semibold mb-2 cursor-pointer capitalize">
          {product?.productName}
        </h4>
      </Link>
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
        <button
          disabled={role?.user?.email === product?.owner?.ownerEmail}
          onClick={() => handleUpvote(product?._id, product?.owner?.ownerEmail)}
          className={`bg-slate-800 text-slate-50 py-2 px-4 rounded-lg flex items-center space-x-2  ${
            user && role?.user?.email === product?.owner?.ownerEmail
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          <FaChevronUp className="mr-1" />
          Upvote 25
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
