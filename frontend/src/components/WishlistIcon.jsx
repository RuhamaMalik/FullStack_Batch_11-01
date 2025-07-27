import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const WishlistIcon = () => {
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const allWishlists = JSON.parse(localStorage.getItem('wishlist')) || {};
      const userEmail = currentUser?.email;

      if (userEmail && allWishlists[userEmail]) {
        setCount(allWishlists[userEmail].length);
      } else {
        setCount(0);
      }
    };

    updateCount(); // initial count
    window.addEventListener('wishlistUpdated', updateCount);

    return () => window.removeEventListener('wishlistUpdated', updateCount);
  }, [currentUser]);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
      <span className="bg-red-500 text-white px-1 -top-2 ml-5 absolute rounded-xl text-xs">
        {count}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21s-8-6.5-8-11.5S7 3 12 8s8-5 8 1.5S12 21 12 21z"
        />
      </svg>
    </div>
  );
};

export default WishlistIcon;
