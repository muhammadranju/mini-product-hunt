import Cards from "@/components/Cards/Cards";
import FeaturedProductsSection from "@/components/FeaturedProductsSection/FeaturedProductsSection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/products`,
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

  console.log(products);
  return (
    <>
      <section className="relative w-full h-96 bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center lg:w-full lg:px-0 px-2">
          <h2 className="text-4xl font-bold mb-4">
            Discover and Share Tech Products
          </h2>
          <p className="text-xl">
            Explore the best of Web Apps, AI tools, Software, Games, and more!
          </p>
        </div>
      </section>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        {/* Banner Section */}

        {/* Featured Products Section */}
        <FeaturedProductsSection></FeaturedProductsSection>

        {/* Trending Products Section */}
        <section className="py-16 ">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Trending Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Cards */}
              {products
                ?.slice(0, 6)

                .map((product) => (
                  <Cards product={product} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
              <Link to={"/products"}>
                <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Show All Products
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
