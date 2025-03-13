import React from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import cart context
import navbarImg1 from "../components/productIMG/logo.jpg";
import navbarImg2 from "../components/productIMG/images.png";

const Navbar = () => {
  const { cart } = useCart(); // Get cart data

  // Calculate total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='navbarMain'>
      <div className='navbarMainlogo'>
        <Link to="/Home">
          <img src={navbarImg1} alt="Main Logo" />
        </Link>
      </div>

      <div className='navbarMain2'>
        <h2>Welcome to Awesome Nursery</h2>
        <h5>Where green meets serenity</h5>
      </div>

      <div className='navbarMain3'>
        <h2>Plants</h2>
      </div>       

      <div className='navbarMain4'>
        <Link to="/CartPage">
          <img src={navbarImg2} alt="Cart" />
        </Link>
        <p>{cartCount}</p> {/* Dynamic cart count */}
      </div>
    </div>
  );
}

export default Navbar;
