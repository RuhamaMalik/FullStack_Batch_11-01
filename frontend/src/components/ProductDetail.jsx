import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/watch.webp",
    "/watch2.webp",
    "/watch3.webp",
    "/watch4.webp",
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Product Detail Section */}

      <div className="max-w-screen-xl bg-white flex flex-wrap justify-between mx-auto my-16">
        {/*  Images Slider */}

        <div className="relative max-w-[650px] w-full">
          <div className="relative">
            <img src={images[currentImage]} alt="product" className="w-full" />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/50 p-1 rounded-full hover:bg-[#dc3545]"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/50 p-1 rounded-full hover:bg-[#dc3545]"
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {images.map((src, index) => {
              return (
                <img
                  key={index}
                  src={src}
                  alt=""
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 object-cover cursor-pointer border-2 rounded ${
                    index === currentImage
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-[#1f2021] text-4xl font-bold">
            Ana Wallet On A Strap
          </h1>
          <h1 className="text-[#dc3545] text-2xl font-bold my-4">$39.99</h1>

          <div className="my-4">
            <h4 className="text-[#1f2021] font-bold mb-2">Size & Fit</h4>
            <ul className="text-[#6c757d] text-[0.9rem] space-y-1">
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-[#dc3545]" />
                Fit: Classic — follows your contours with a little room
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-[#dc3545]" />
                Length: Mid-calf
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-[#dc3545]" />
                Model is 5'9.5/176 wearing a size S
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h4 className="text-[#1f2021] font-bold mb-1">Materials & Care</h4>
            <ul className="text-[#6c757d] text-[0.9rem] space-y-1">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#dc3545]" />
                Content: 100% polyester
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#dc3545]" />
                Care: Machine wash
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#dc3545]" />
                Imported
              </li>
            </ul>
          </div>

          <p className=" flex items-center gap-2 font-bold text-[#28a745] my-4">
            {" "}
            <FaCheck /> In stock
          </p>

          {/* Quantity and Buttons */}

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center bg-slate-200 overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-xl text-[#1f2021]"
              >
                -
              </button>
              <button className="px-3 py-2 text-xl text-[#1f2021]">
                {quantity}
              </button>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-xl text-[#1f2021]"
              >
                +
              </button>
            </div>

            <div className="bg-[#dc3545] text-white px-10 py-2 font-semibold hover:bg-red-800 cursor-pointer">
              ADD TO CART
            </div>

            <div className="bg-[#007bff] text-white px-10 py-2 font-semibold hover:bg-blue-800 cursor-pointer">
              BUY IT NOW
            </div>
          </div>

          <div className="flex items-center gap-2 my-2">
            <span className="text-[#1f2021] font-medium">SKU:</span>
            <span className="text-[#6c757d] text-[0.9rem]">VELA_SKU_24</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <span className="text-[#1f2021] font-medium">Product type:</span>
            <span className="text-[#6c757d] text-[0.9rem]">Bags</span>
          </div>
          <div className="flex gap-2 my-2">
            <span className="text-[#1f2021] font-medium">Categories:</span>
            <span className="text-[#6c757d] text-[0.9rem]">
              Audio & Home, Deal, Home & Garden, Home page, SmartPhone & Ipad,
              Technologies
            </span>
          </div>
          <div className="flex gap-2 my-2">
            <span className="text-[#1f2021] font-medium">Tags:</span>
            <span className="text-[#6c757d] text-[0.9rem]">
              [COUNTDOWN]2021/03/28, Color_Black, Color_Green, Color_Orange,
              Color_White, Price_Under $50
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
