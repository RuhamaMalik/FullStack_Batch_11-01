import React, { useEffect , useState } from 'react';
import ReactPaginate from 'react-paginate';
// import image11 from "../assets/11.jpg"
import { AddToWishlist , RemoveToWishlist} from '../components/WishlistAction';
// import { useUser } from '../context/UserContext';
import axios from 'axios';
import { getUser } from '../utils/auth';

const Products = () => {
  const [field, setField] = useState("")
  const [filterData, setFilterData] = useState([])
  // const { currentUser } = useUser();
  const currentUser = getUser()
  const [wishlist, setWishlist] = useState([]);
    const [products, setProducts] = useState([]);

      //**************************** */ get products**************************** */

     const fetchProducts = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`
          );
          setProducts(response.data.products.filter((p)=> p?.isActive !== false));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
    
    

  useEffect(() => {
    if (currentUser?.email) {
      const all = JSON.parse(localStorage.getItem('wishlist')) || {};
      const userWishlist = all[currentUser.email] || [];
      setWishlist(userWishlist.map(item => item.id));
    }
  }, []);

  // Check if item is in wishlist
  const isInWishlist = (id) => wishlist.includes(id);

  // Add item id to wishlist state
  const handleAdd = (id) => setWishlist(prev => [...prev, id]);

  // Remove item id from wishlist state
  const handleRemove = (id) => setWishlist(prev => prev.filter(pid => pid !== id));

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = field
    ? filterData.slice(itemOffset, endOffset)
    : products.slice(itemOffset, endOffset);
  const pageCount = field
    ? Math.ceil(filterData.length / itemsPerPage)
    : Math.ceil(products.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % (
      field ? filterData.length : products.length
    );
    setItemOffset(newOffset);
  };

  const searchHandle = (value) => {
    const lowerValue = value.toLowerCase();
    const searchData = products.filter((item) =>
      item.productName.toLowerCase().includes(lowerValue)
    );
    setFilterData(searchData);
    setItemOffset(0);

  };
  const handleClear = () => {
    setField("")
    setFilterData([])

  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center" >Our Products</h2>
        <div className="flex items-center max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search Your Desired Item"
            value={field}
            onChange={(e) => {
              setField(e.target.value);
              searchHandle(e.target.value);
            }}
            className="flex-1 h-10 rounded-l-2xl p-4 border border-gray-300 focus:outline-none"
          />
          {field && (
            <button
              onClick={handleClear}
              className="h-10 px-4 rounded-r-2xl bg-gray-200 hover:bg-gray-300 text-gray-600"
            >
              x
            </button>
          )}
        </div>
        {
          field ? (
            filterData.length === 0 ? (
              <h1>No data found</h1>
            ) : (
              filterData.map((index, item) => (
                <div key={index}> {item.name}</div>
              ))
            )
          ) : (
            products.map((index, item) => (
              <div key={index}> {item.name}</div>
            ))
          )
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((item, index) => {
            const id = index + itemOffset + 1;
            const product = { ...item, id };

            return (
              <div
                key={id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {item.discount}
                  </span>
                )}

                {/* Heart Icon Top-Right */}
                <div className="absolute top-3 right-3 z-10">
                  {isInWishlist(id) ? (
                    <RemoveToWishlist product={product} onRemove={() => handleRemove(item._id)} />
                  ) : (
                    <AddToWishlist product={product} onAdd={() => handleAdd(item._id)} />
                  )}
                </div>

                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-5">
                  <h1 className="font-semibold text-lg text-gray-800 pb-4">{item.name}</h1>
                  <h3 className="text-sm text-gray-600">{item.description}</h3>
                  <div className='flex justify-between pt-7'>
                    <button className='bg-black text-white w-30 h-10 rounded-xl'>Add to Cart</button>
                    <p className="text-gray-800 font-bold text-xl mt-2">${item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center cursor-pointer">
          <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="←"
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 border border-gray-300 rounded-md cursor-pointer"
            activeClassName="bg-black text-white"
            previousClassName="px-3 py-1 border border-gray-300 rounded-md"
            nextClassName="px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
