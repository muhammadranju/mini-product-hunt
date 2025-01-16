import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";

const CouponDisplay = ({ coupons }) => {
  //   const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    // Optional: Initialize any additional swiper features or customizations if needed
  }, []);

  return (
    <section className=" ">
      <div className="w-11/12 mx-auto py-10 ">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Limited Time Offers
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 3000, // Autoplay every 3 seconds
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {coupons?.map((coupon) => (
            <SwiperSlide key={coupon._id}>
              <div className="bg-white shadow-lg rounded-lg p-6 mb-5">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-gray-800">
                    COUPON CODE:{" "}
                    <span className="text-blue-600">{coupon.code}</span>
                  </div>
                  <div className="text-xl font-bold text-red-500">
                    {coupon.discount}% OFF
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Valid until:{" "}
                    <span className="text-green-600">
                      {new Date(coupon.expiryDate).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-gray-500 mt-2">{coupon.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CouponDisplay;
