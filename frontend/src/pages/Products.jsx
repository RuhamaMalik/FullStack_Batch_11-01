import React, { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const pageWindow = 4;

  const dummyData = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    image: "https://via.placeholder.com/50",
    name: `Product ${i + 1}`,
    category: "Category A",
    price: `$${(10 + i).toFixed(2)}`
  }));

  // Filter and pagination logic
  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Page window calculation
  const currentWindowStart = Math.floor((currentPage - 1) / pageWindow) * pageWindow + 1;
  const currentWindowEnd = Math.min(currentWindowStart + pageWindow - 1, totalPages);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Search & Button */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
        />
        <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
          Add Category
        </button>
      </div>

      {/* Table */}
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
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">
                  <img src={item.image} alt="product" className="w-12 h-12" />
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 flex-wrap">
        {/* Prev Window */}
        {currentWindowStart > 1 && (
          <button
            onClick={() => goToPage(currentWindowStart - 1)}
            className="mx-1 px-3 py-1 border rounded hover:bg-gray-100 transition duration-200"
          >
            « Prev
          </button>
        )}

        {/* Page Numbers */}
        {Array.from(
          { length: currentWindowEnd - currentWindowStart + 1 },
          (_, i) => currentWindowStart + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`mx-1 px-3 py-1 border rounded transition duration-200 ${
              currentPage === page
                ? "bg-red-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Window */}
        {currentWindowEnd < totalPages && (
          <button
            onClick={() => goToPage(currentWindowEnd + 1)}
            className="mx-1 px-3 py-1 border rounded hover:bg-gray-100 transition duration-200"
          >
            Next »
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
