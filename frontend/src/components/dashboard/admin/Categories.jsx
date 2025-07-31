import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import CategoryDrawer from "../../drawer/CategoryDrawer";
import DeleteModal from "./modal/DeleteModal";
import Pagination from "../../Pagination";
import { getToken } from "../../../utils/auth";


const Categories = () => {
  let [openDrawer, setOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const token = getToken();

  //**************************** */ delete category**************************** */

  const handleDeleteModalOpen = (category) => {

    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/categories/${id}`,
        { headers: {
          Authorization: `Bearer ${token}`,
        }});

      setCategories(categories.filter((category) => category._id !== id))
      setIsModalOpen(false);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  //**************************** */ get categories**************************** */


  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories`
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //**************************** */ update status **************************** */


  const toggleStatus =async(id) => {
 try {
    const token = getToken();
    
    const updatedStatus = categories.find(c => c._id === id)?.isActive 
      ? false
      :true;

    const response = await axios.patch(
     `${import.meta.env.VITE_BACKEND_URL}/categories/${id}`,
      { isActive: updatedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // show changes in frontend

    const updatedCategories = categories.map(category =>
      category._id === id ? { ...category, isActive: updatedStatus } : category
    );
    setCategories(updatedCategories);

    console.log("Status updated successfully:", response.data.message);
  } catch (error) {
    console.error("Error updating status:", error.response?.data?.message || error.message);
  }
  };

    //**************************** */ update category **************************** */


  //**************************** */ Search filter **************************** */
  const filteredData = categories?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );



  //**************************** */ Pagination logic for 4-page**************************** */
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 sm:p-6 max-w-full w-full mx-0">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      {/*****************************  Search and Add Category **************************** */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:max-w-sm"
        />
        <button onClick={() => setOpenDrawer(true)} className="bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-red-700 transition-all">
          Add Category
        </button>
      </div>

      {/* drawer */}
      <CategoryDrawer
        isOpen={openDrawer}
        onClose={() =>{ setOpenDrawer(false); setSelectedCategory(null);setIsEditing(false)}}
        categories={categories}
        setCategories={setCategories}
        isEditing={isEditing}
        initialData={selectedCategory} />


      {/*****************************  Responsive Table **************************** */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full text-left text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-2 sm:px-4 border-b">Image</th>
              <th className="py-2 px-2 sm:px-4 border-b">Category</th>
              <th className="py-2 px-2 sm:px-4 border-b">Description</th>
              <th className="py-2 px-2 sm:px-4 border-b">product_count</th>
              <th className="py-2 px-2 sm:px-4 border-b">Status</th>
              <th className="py-2 px-2 sm:px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-red-50 transition">
                <td className="py-2 px-2 sm:px-4 border-b">
                  <img
                    src={import.meta.env.VITE_BACKEND_UPLOAD_URL + item.image}
                    alt="product"
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded object-cover transition-all"
                  />
                </td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.name}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.description}</td>
                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">{item.productCount}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => toggleStatus(item._id)}
                    className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm transition ${item.isActive ? "bg-green-500" : "bg-red-500"
                      }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </button>
                </td>

                <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-base">
                  <div className="flex gap-2">
                    {/* Update button */}
                    <button
                      onClick={() =>{ setIsEditing(true); setSelectedCategory(item); setOpenDrawer(true); }}
                      className="text-blue-500 hover:text-blue-700 transition"
                    >
                      <MdEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteModalOpen(item)}
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

      {/* Modal Call */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
        data={selectedCategory}
        title={"Category"}
      />

      {/*****************************  Pagination **************************** */}

      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
        uniqueKey="mypage-pagination"
      />

    </div>
  );
};



export default Categories
