import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useUser } from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid'; 

// ADD TO WISHLIST
export const AddToWishlist = ({ product }) => {
  const { currentUser } = useUser();

  const handleAdd = () => {
    if (!currentUser || !currentUser.email) {
      alert('Please login first');
      return;
    }

    const allWishlists = JSON.parse(localStorage.getItem('wishlist')) || {};
    const userEmail = currentUser.email;
    const userWishlist = allWishlists[userEmail] || [];

    const productId = product.id || uuidv4();
    const exists = userWishlist.find(item => item.id === productId);

    if (!exists) {
      const productWithId = { ...product, id: productId }; 
      userWishlist.push(productWithId);
      allWishlists[userEmail] = userWishlist;
      localStorage.setItem('wishlist', JSON.stringify(allWishlists));
      window.dispatchEvent(new Event('wishlistUpdated'));

      alert('Product added to wishlist!');
    } else {
      alert('Product already exists in wishlist!');
    }
  };

  return (
    <FaRegHeart
      onClick={handleAdd}
      style={{ color: 'crimson', cursor: 'pointer', fontSize: '1.5rem' }}
      title="Add to wishlist"
    />
  );
};

// REMOVE FROM WISHLIST
export const RemoveToWishlist = ({ product, onRemove }) => {
  const { currentUser } = useUser();

  const handleRemove = () => {
    if (!currentUser || !currentUser.email) {
      alert('Please login first');
      return;
    }

    const allWishlists = JSON.parse(localStorage.getItem('wishlist')) || {};
    const userEmail = currentUser.email;
    const userWishlist = allWishlists[userEmail] || [];

    const updatedWishlist = userWishlist.filter(item => item.id !== product.id);
    allWishlists[userEmail] = updatedWishlist;
    localStorage.setItem('wishlist', JSON.stringify(allWishlists));
    window.dispatchEvent(new Event('wishlistUpdated'));


    alert('Product removed from wishlist!');
    if (onRemove) onRemove();
  };

  return (
    <FaHeart
      onClick={handleRemove}
      style={{ color: 'crimson', cursor: 'pointer', fontSize: '1.5rem' }}
      title="Remove from wishlist"
    />
  );
};
