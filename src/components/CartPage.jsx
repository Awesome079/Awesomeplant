import React from 'react';
import { useCart } from '../context/CartContext';
import './css/cartPage.css';
import {Link} from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className='cartpageMain'>
      <h1>Total Cart Amount: ${totalAmount.toFixed(2)}</h1>

      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        cart.map((cartitem) => (
          <div className='cartpageItems' key={cartitem.id}>
            <h1>{cartitem.title}</h1>
            <img src={cartitem.img} alt={cartitem.title} />
            <h3>{cartitem.price}</h3>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(cartitem.id)}>-</button>
              <p>{cartitem.quantity}</p>
              <button onClick={() => increaseQuantity(cartitem.id)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(cartitem.id)}>Remove</button>

            
          </div>
              
          
        ))
      )}

        <div className='contShopping'>
            <Link to="/ProductPage">
                <button>Continue Shopping</button>
            </Link>
            
        </div>
    </div>
  );
};

export default CartPage;
