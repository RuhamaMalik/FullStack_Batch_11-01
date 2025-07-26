import React, { useState } from "react";

//**********************/ Dummy products data **************************/////
const products = [
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

const Products = () => {
  //**************************   state for search input  ***********************************/
  const [search, setSearch] = useState("");

  //*********************************** current page number ***********************************/
  const [currentPage, setCurrentPage] = useState(1);

  //*********************************** ek page pe kitne items dikhane hain ***********************************/
  const itemsPerPage = 5;

  //*********************************** pagination window ***********************************/
  const pageWindow = 4;

  //**************************/ search filter: jo name match kare sirf wahi dikhao **********************/
  const filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  //***********************************/ total pages count (based on filteredData)***********************************/
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  //***********************************/ start index for current page ***********************************/
  const startIndex = (currentPage - 1) * itemsPerPage;

  //***********************************/ actual data slice for current page ***********************************/
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  //**************************/ kis window ke pages dikhaye ja rahe hain (1–4, 5–8, etc) *******************/
  const currentWindowStart = Math.floor((currentPage - 1) / pageWindow) * pageWindow + 1;
  const currentWindowEnd = Math.min(currentWindowStart + pageWindow - 1, totalPages);

  // ***********************************/ kisi page number pe jump karne ke liye ***********************************/
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      {/*********************************** Top heading ***********************************/}
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/*********************************** Search bar and Add Category button ***********************************/}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // har search pe page 1 
          }}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
        />
        <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
          Add Category
        </button>
      </div>

      {/*********************************** Table ***********************************/}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {/************************************ Table ke rows ***********************************/}
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition duration-150">
                <td className="py-2 px-4 border-b">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-12 h-12 rounded object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*********************************** Pagination ***********************************/}
      <div className="flex justify-center mt-6 flex-wrap">
        {/********************* Agar previous window hai to "« Prev" button dikhaye *****************************/}
        {currentWindowStart > 1 && (
          <button
            onClick={() => goToPage(currentWindowStart - 1)}
            className="mx-1 px-3 py-1 border rounded hover:bg-gray-100 transition"
          >
            « Prev
          </button>
        )}

        {/*********************************** Current window ke page buttons ***********************************/}
        {Array.from(
          { length: currentWindowEnd - currentWindowStart + 1 },
          (_, i) => currentWindowStart + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`mx-1 px-3 py-1 border rounded transition ${
              currentPage === page
                ? "bg-red-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/**************************** Next window ho to "Next »" button dikhaye ********************************/}
        {currentWindowEnd < totalPages && (
          <button
            onClick={() => goToPage(currentWindowEnd + 1)}
            className="mx-1 px-3 py-1 border rounded hover:bg-gray-100 transition"
          >
            Next »
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
