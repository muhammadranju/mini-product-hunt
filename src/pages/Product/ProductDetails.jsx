import { AuthContext } from "@/context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

const ProductDetails = ({ reviews }) => {
  const handleReviewSubmit = async (e) => {};
  const [product, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products/${id}`,
        {
          method: "GET",
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

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto  mb-10">
      <div className="min-h-screen py-10">
        <div className="w-11/12 max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          {/* Product Details Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {product?.productName}
            </h2>
            <img
              src={product?.productImage}
              alt={product?.productName}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="text-gray-700 text-lg mb-4">{product?.description}</p>
            <div className="flex items-center gap-4 mb-6">
              {/* <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm">
                {product?.tags.map}
              </span> */}
              <div className="flex items-center space-x-2 space-y-1 flex-wrap my-4">
                {product?.tags?.map((tag) => (
                  <div key={tag} className="badge badge-ghost text-sm">
                    {tag}
                  </div>
                ))}
              </div>

              <a
                href={product?.externalLink}
                target="_blank"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <LuExternalLink />
                <button> Visit Product</button>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg text-sm hover:bg-green-600 transition"
                onClick={() => handleUpvote(product?.id)}
              >
                Upvote ({product?.upvotes})
              </button>
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-lg text-sm hover:bg-red-600 transition"
                onClick={() => handleReport(product?.id)}
              >
                Report
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Reviews
            </h3>
            <div className="space-y-4">
              {reviews?.map((review) => (
                <div
                  key={review?.id}
                  className="p-4 bg-gray-50 rounded-lg shadow"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={review?.reviewerImage}
                      alt={review?.reviewerName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-gray-800 font-medium">
                        {review?.reviewerName}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {review?.rating} Stars
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review?.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Post Review Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Post a Review
            </h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-medium">
                    {user?.displayName}
                  </p>
                  <input
                    type="hidden"
                    value={user?.displayName}
                    name="reviewerName"
                  />
                  <input
                    type="hidden"
                    value={"userImage"}
                    name="reviewerImage"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Review Description
                </label>
                <textarea
                  name="reviewDescription"
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Rating
                </label>
                <select
                  name="rating"
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  required
                >
                  <option value="">Select a Rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
