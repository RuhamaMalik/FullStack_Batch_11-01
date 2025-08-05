import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { RemoveToWishlist } from '../components/WishlistAction';

const Wishlist = () => {
  const { currentUser } = useUser();
  const [items, setItems] = useState([]);

  const showsWishlist = () => {
    const allWishlists = JSON.parse(localStorage.getItem('wishlist')) || {};
    const userEmail = currentUser?.email;

    if (userEmail && allWishlists[userEmail]) {
      setItems(allWishlists[userEmail]);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    showsWishlist();

    // Listen to wishlist updates from other components
    const handleUpdate = () => showsWishlist();
    window.addEventListener('wishlistUpdated', handleUpdate);

    return () => window.removeEventListener('wishlistUpdated', handleUpdate);
  }, [currentUser]);

  return (
  <div className="p-6">
    <h1 className="text-2xl text-center font-semibold mb-6">My Wishlist</h1>

    {items.length === 0 ? (
      <p className="text-red-600 text-center text-xl font-semibold">No items in wishlist.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            <img src={item.images[0].url} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h1 className="font-semibold text-lg text-gray-800 pb-2">{item.name}</h1>
              <h3 className="text-sm text-gray-600">{item.description}</h3>
              <div className="flex justify-between pt-7">
                <button className="bg-black text-white w-30 h-10 rounded-xl hover:bg-gray-900 transition">
                  Add to Cart
                </button>
                <p className="text-gray-800 font-bold text-xl mt-2">${item.price}</p>
              </div>
              <div className="pt-4 text-right">
                <RemoveToWishlist product={item} onRemove={showsWishlist} />
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default Wishlist;
