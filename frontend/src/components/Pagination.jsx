import React, { useState, useEffect } from "react";

const Pagination = ({
  totalItems = 0,
  itemsPerPage = 4,
  pageLimit = 4,
  onPageChange = () => {},
  uniqueKey = "default",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    for (let i = start; i < start + pageLimit && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (totalPages === 0) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap" key={uniqueKey}>
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
          className={`px-3 py-1 border rounded ${currentPage === page
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
  );
};

export default Pagination;
