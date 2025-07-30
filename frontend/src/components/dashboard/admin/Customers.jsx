

import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { getToken } from "../../../utils/auth";
import { useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  //**************************** */ Dummy data for products**************************** */
  // const dummyData = [
  //   {
  //     id: 1,
  //     name: "Rayan Ahmed",
  //     email: "rayan.ahmed@example.com",
  //     contact: "+92 300 1234567",
  //     address: "Lahore, Pakistan",
  //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     name: "Mehak Ali",
  //     email: "mehak.ali@example.com",
  //     contact: "+92 345 7654321",
  //     address: "Karachi, Pakistan",
  //     image: "https://cdn.pixabay.com/photo/2022/02/11/09/21/leather-wallet-7006894_640.jpg",
  //     status: false
  //   },
  //   {
  //     id: 3,
  //     name: "Talha Bashir",
  //     email: "talha.bashir@example.com",
  //     contact: "+92 321 5566778",
  //     address: "Islamabad, Pakistan",
  //     image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg",
  //     status: true
  //   },
  //   {
  //     id: 4,
  //     name: "Sara Khan",
  //     email: "sara.khan@example.com",
  //     contact: "+92 333 1122334",
  //     address: "Rawalpindi, Pakistan",
  //     image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
  //     status: true
  //   },
  //   {
  //     id: 5,
  //     name: "Usman Tariq",
  //     email: "usman.tariq@example.com",
  //     contact: "+92 306 9988776",
  //     address: "Faisalabad, Pakistan",
  //     image: "https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_640.png",
  //     status: false
  //   },
  //   {
  //     id: 6,
  //     name: "Areeba Shah",
  //     email: "areeba.shah@example.com",
  //     contact: "+92 300 5552233",
  //     address: "Multan, Pakistan",
  //     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  //     status: true
  //   },
  //   {
  //     id: 7,
  //     name: "Zohaib Jamil",
  //     email: "zohaib.jamil@example.com",
  //     contact: "+92 307 3344556",
  //     address: "Quetta, Pakistan",
  //     image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop",
  //     status: true
  //   },
  //   {
  //     id: 8,
  //     name: "Hina Gul",
  //     email: "hina.gul@example.com",
  //     contact: "+92 336 6677889",
  //     address: "Peshawar, Pakistan",
  //     image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  //     status: false
  //   }
  // ];


  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = getToken();

      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
        
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.response?.data?.message || "Unauthorized or server error");
      }
    };

    fetchUsers();
  }, []);



  
const toggleStatus = async (userId) => {
  
  try {
    const token = getToken();

    
    const updatedStatus = users.find(u => u._id === userId)?.status === "active"
      ? "blocked"
      : "active";

    const response = await axios.put(
     `${import.meta.env.VITE_BACKEND_URL}/users/${userId}`,
      { status: updatedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // show changes in frontend

    const updatedUsers = users.map(user =>
      user._id === userId ? { ...user, status: updatedStatus } : user
    );
    setUsers(updatedUsers);

    console.log("Status updated successfully:", response.data.message);
  } catch (error) {
    console.error("Error updating status:", error.response?.data?.message || error.message);
  }
};

const handleDelete = async (userId) => {
  
  try {
    const token = getToken();
    const response = await axios.delete(
     `${import.meta.env.VITE_BACKEND_URL}/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const updatedUsers = users.filter(user =>
      user._id !== userId);

    setUsers(updatedUsers);

    console.log("User Deleted successfully:", response.data.message);
  } catch (error) {
    console.error("Error deleting user:", error.response?.data?.message || error.message);
  }
};


  //**************************** */ Search filter **************************** */
  const filteredData = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||  item.email.toLowerCase().includes(search.toLowerCase())
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
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      {/*****************************  Search and Add Category **************************** */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:max-w-sm"
        />
        {/* <button className="bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-red-700 transition-all">
          Add Customer
        </button> */}
      </div>

      {/*****************************  Responsive Table **************************** */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full text-left text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              {/* <th className="py-2 px-2 sm:px-4 border-b">Image</th> */}
              <th className="py-2 px-2 sm:px-4 border-b">Name</th>
              <th className="py-2 px-2 sm:px-4 border-b">Email</th>
              <th className="py-2 px-2 sm:px-4 border-b">Contact</th>
              <th className="py-2 px-2 sm:px-4 border-b">Address</th>
              <th className="py-2 px-2 sm:px-4 border-b">Status</th>
              <th className="py-2 px-2 sm:px-4 border-b">Actions</th>

            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-red-50 transition">
                {/* <td className="py-2 px-2 sm:px-4 border-b">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded object-cover transition-all"
                  />
                </td> */}
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.name|| "-"}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.email|| "-"}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.contact|| "-"}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.address || "-"}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => toggleStatus(item._id)}
                    className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm transition ${item.status === "active" ? "bg-green-500" : "bg-red-500"
                      }`}
                  >
                    {item.status === "active" ? "active" : "blocked"}
                  </button>
                </td>

                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">
                  <div className="flex gap-2">
                    {/* Update button */}
                    <button
                      onClick={() => handleEdit(rowData)}
                      className="text-blue-500 hover:text-blue-700 transition"
                    >
                      <MdEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </td>
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
    </div>
  );
};


export default Customers