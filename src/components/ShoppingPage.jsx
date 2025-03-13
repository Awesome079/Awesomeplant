import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/shoppingPage.css';

const ShoppingPage = () => {
  const { addToCart, removeFromCart, cart } = useCart();
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <h2>No product selected.</h2>;
  }

  const isAdded = cart.some((item) => item.id === product.id);

  return (
    <div className='shoppingPage'>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <h3>{product.price}</h3>
      <p>{product.detail}</p>

      <div className='shoppingbtn'>
        {isAdded ? (
          <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
