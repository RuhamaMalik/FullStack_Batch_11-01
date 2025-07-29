import React, { useState } from "react";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Garmin Watch 2024",
    price: "$100",
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Ana Wallet On A String",
    price: "$39.99",
    originalPrice: null,
    image:
      "https://cdn.pixabay.com/photo/2022/02/11/09/21/leather-wallet-7006894_640.jpg",
  },
  {
    id: 3,
    name: "Aspiration T-shirt",
    price: "$40",
    originalPrice: null,
    image:
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg",
  },
  {
    id: 4,
    name: "Cora Cog All Black",
    price: "$99.99",
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    saleTag: "-$138.00",
  },
  {
    id: 5,
    name: "women T-shirt",
    price: "$84",
    originalPrice: "$100",
    image:
      "https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_640.png",
    saleTag: "-$16",
  },
  {
    id: 6,
    name: "Travel Bag",
    price: "$40",
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    saleTag: "SOLD OUT",
  },
  {
    id: 7,
    name: "V Watch",
    price: "$34.99",
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Hp Laptop",
    price: "$75",
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  },
];
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TopProducts = () => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [activeTab, setActiveTab] = useState("new");
  const [shuffledProducts, setShuffledProducts] = useState(
    shuffleArray(products)
  );

  const toggleLike = (productId) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative">
        {product.saleTag && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
              product.saleTag === "SOLD OUT"
                ? "bg-red-600 text-white"
                : "bg-red-100 text-red-600 border border-red-200"
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

        <div className="absolute top-2 right-2">
          <button
            onClick={() => toggleLike(product.id)}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Heart
              className={`w-4 h-4 ${
                likedProducts.has(product.id)
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-800 text-sm mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {product.originalPrice}
            </span>
          )}
          <span className="text-red-600 font-semibold text-base">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
              TOP PRODUCTS
            </h1>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["bestselling", "featured", "new"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setShuffledProducts(shuffleArray(products));
                  }}
                  className={`px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-red-600 text-white rounded"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab === "bestselling"
                    ? "Best Selling"
                    : tab === "featured"
                    ? "Featured"
                    : "New Products"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {shuffledProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
