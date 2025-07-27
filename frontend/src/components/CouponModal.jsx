import { useState } from "react";

const CouponModal = () => {
  const [isOpen, setIsOpen] = useState(true); // Change to false if you want it hidden initially

  const closeModal = () => setIsOpen(false);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative overflow-hidden">
          
          {/* Close button */}
          <button
            className="absolute top-3 right-5 text-2xl text-gray-700 hover:text-black"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Left image */}
          <div className="w-1/2 bg-red-600 flex items-center justify-center px-6 py-14">
            <img
              src="https://vela-develop.myshopify.com/cdn/shop/products/Image-1_590x.jpg?v=1606185603"
              alt="Product"
              className="h-64 object-contain"
            /> 
          </div>

          {/* Right content */}
          <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
            <p className="text-gray-500 text-sm mb-2">Join Dimita Newsletter Now!</p>
            <h2 className="text-2xl font-bold mb-4">
              GET 30% OFF <br /> COUPON
            </h2>
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 px-4 py-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white mt-3 py-4 font-semibold rounded hover:bg-red-700 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CouponModal;
