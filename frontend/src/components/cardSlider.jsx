
import React from "react";
// npm i react-icons swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleRight , FaAngleLeft} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardsData = [
  {
    productName: "Gascon Watch 2021",
    price: "$150",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-8_590x.jpg?v=1606185928",
    discount: "20% OFF",
  },
  {
    productName: "Ana Wallet On A Strap",
    price: "$39.99",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-2_590x.jpg?v=1606185672",
    discount: null,
  },
  {
    productName: "Ageratum T-shirt",
    price: "$69",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-1_590x.jpg?v=1606185603",
    discount: "10% OFF",
  },
  {
    productName: "Cara Cig. All Black",
    price: "$99.99",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-4_590x.jpg?v=1606185762",
  },
  {
    productName: "Valmere T-Shirt",
    price: "$40",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-29_590x.jpg?v=1606186689",
    discount: "16% OFF",
  },
  {
    productName: "Bitsie Pumps",
    price: "$84",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/product-image-1_590x.jpg?v=1589557906",
    discount: "16% OFF",
  },
  {
    productName: "V Pumps",
    price: "$34.90",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/product-image-1_590x.jpg?v=1589557906",
    discount: "16% OFF",
  },
  {
    productName: "Testani Skirt",
    price: "$75",
    image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-27_590x.jpg?v=1606186679",
    discount: "16% OFF",
  },
];


const CardSlider = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate__animated animate__fadeIn">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4">
            <span className="gradient-text">New Arrivals</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mt-6 rounded-full"></div>
        </div>

        {/* Card Slider */}
        <div className="relative mb-24">
          {/* Custom navigation icons top right */}
          <div className="absolute top-0 right-0 z-20 flex gap-2 p-4">
            <button className="swiper-button-prev-custom bg-white shadow p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none">
              <FaAngleRight/>
            </button>
            <button className="swiper-button-next-custom bg-white shadow p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none">
              <FaAngleLeft/>
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
            style={{ paddingBottom: "3rem" }}
          >
            {cardsData.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="card w-80 mx-auto bg-white shadow-lg rounded-lg transition duration-300 hover:scale-105 relative">
                  {/* Discount badge top left */}
                  {card.discount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {card.discount}
                    </span>
                  )}
                  {/* Product image */}
                  <img
                    src={card.image}
                    alt={card.productName}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="font-bold text-lg mb-2 text-center">{card.productName}</h3>
                    <p className="text-blue-600 font-semibold text-xl">{card.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;