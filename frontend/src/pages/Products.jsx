
import React, { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  //**************************** */ Dummy data for products**************************** */
  const dummyData = [
    {
      id: 1,
      name: "Garmin Watch 2024",
      price: "$100",
      category: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Ana Wallet On A String",
      price: "$39.99",
      category: "Accessories",
      image: "https://cdn.pixabay.com/photo/2022/02/11/09/21/leather-wallet-7006894_640.jpg"
    },
    {
      id: 3,
      name: "Aspiration T-shirt",
      price: "$40",
      category: "Clothing",
      image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg"
    },
    {
      id: 4,
      name: "Cora Cog All Black",
      price: "$99.99",
      category: "Watches",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Women T-shirt",
      price: "$84",
      category: "Clothing",
      image: "https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_640.png"
    },
    {
      id: 6,
      name: "Travel Bag",
      price: "$40",
      category: "Bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "V Watch",
      price: "$34.99",
      category: "Watches",
      image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "HP Laptop",
      price: "$75",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    }
  ];
 
  //**************************** */ Search filter **************************** */
  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  //**************************** */ Pagination logic for 4-page**************************** */
  const pageLimit = 4;
  const getPageNumbers = () => {
    const pages = [];
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    for (let i = start; i < start + pageLimit && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="p-4 sm:p-6 max-w-full w-full mx-0">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/*****************************  Search and Add Category **************************** */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:max-w-sm"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-red-700 transition-all">
          Add Category
        </button>
      </div>

      {/*****************************  Responsive Table **************************** */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full text-left text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-2 sm:px-4 border-b">Image</th>
              <th className="py-2 px-2 sm:px-4 border-b">Name</th>
              <th className="py-2 px-2 sm:px-4 border-b">Category</th>
              <th className="py-2 px-2 sm:px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-red-50 transition">
                <td className="py-2 px-2 sm:px-4 border-b">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded object-cover transition-all"
                  />
                </td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.name}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.category}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*****************************  Pagination **************************** */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded hover:bg-red-100 text-red-600"
          >
            &lt;
          </button>
        )}

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border rounded ${
              currentPage === page
                ? "bg-red-600 text-white"
                : "hover:bg-red-100 text-red-600"
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded hover:bg-red-100 text-red-600"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
