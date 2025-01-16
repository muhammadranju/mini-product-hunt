import { useEffect, useState } from "react";
import FeaturedProductsCard from "../Cards/FeaturedProductsCard";

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products?featured=true`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setProducts(data.data);
      }
    };
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
          {products?.slice(0, 4)?.map((product) => (
            <FeaturedProductsCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
