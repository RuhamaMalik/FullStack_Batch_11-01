import { Heart, ShoppingBag } from "lucide-react";
import React from "react";

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      name: "Gascon Watch 2021",
      price: "$150",
      originalPrice: null,
      image: "/product1.webp",
    },
    {
      id: 2,
      name: "Ageratum T-shirt",
      price: "$60.00",
      originalPrice: null,
      image: "/product2.webp",
    },
    {
      id: 3,
      name: "Cara Cig. All Black",
      price: "$99.99",
      originalPrice: "$298",
      image: "/product3.webp",
      saleTag: "-$198.01",
    },
    {
      id: 4,
      name: "Daley Tank",
      price: "$14.99",
      originalPrice: "$30",
      image: "/product4.webp",
      saleTag: "-$15.01",
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white shadow hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative">
        {product.saleTag && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold${
              product.saleTag === "SOLD OUT"
                ? "border-[#dc3545] text-white"
                : " text-[#dc3545] border border-[#dc3545]"
            }`}
          >
            {product.saleTag}
          </div>
        )}

        <div className="w-full h-56 sm:h-60 md:h-64 lg:h-72 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-2">
          <button
            onClick={() => toggleLike(product.id)}
            className="p-2 bg-white rounded-full hover:bg-[#dc3545] font-extralight transition-all duration-200"
          >
            <ShoppingBag
              className="text-[#94a4b2] hover:text-white"
            />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-[1rem] text-[#1f2021 cursor-pointer hover:text-[#dc3545] text-sm mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-[#94a4b2] line-through text-base">
              {product.originalPrice}
            </span>
          )}
          <span className="text-[#dc3545] font-semibold text-base">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-xl bg-white  mx-auto my-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[#1f2021] text-4xl font-bold uppercase">
          You may also like
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[1px] w-20 bg-[#6c757d]"></div>
          <img src="/title-bg-icon.png" />
          <div className="h-[1px] w-20 bg-[#6c757d]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
