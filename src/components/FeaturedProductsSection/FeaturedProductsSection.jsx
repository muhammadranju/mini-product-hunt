import { useEffect, useState } from "react";
import FeaturedProductsCard from "../Cards/FeaturedProductsCard";
import FeaturedCardSkeletons from "../Cards/FeaturedCardSkeletons";

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/featured/products`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setProducts(data.data);
      }
    };
    setLoading(false);
    fetchProducts();
  }, []);
  return (
    <section className="py-16 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Cards */}

          {loading ? (
            <>
              <FeaturedCardSkeletons />
              <FeaturedCardSkeletons />
              <FeaturedCardSkeletons />
              <FeaturedCardSkeletons />
            </>
          ) : (
            products
              ?.slice(0, 4)
              ?.map((product) => (
                <FeaturedProductsCard key={product._id} product={product} />
              ))
          )}
        </div>
        {products?.length === 0 && (
          <div className="flex justify-center items-center my-10">
            <p className="text-center flex text-xl font-semibold items-center justify-center text-gray-800 dark:text-gray-300">
              No featured products found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
