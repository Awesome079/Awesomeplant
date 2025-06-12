import React, { useState } from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import navbarImg1 from "../components/productIMG/logo.jpg";
import navbarImg2 from "../components/productIMG/images.png";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbarMain'>
      <div className='navbarMainlogo'>
        <Link to="/home">
          <img src={navbarImg1} alt="Main Logo" />
        </Link>
      </div>

      {/* Hamburger icon (visible on small screens) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className='navbarMain2'>
        <h2>Welcome to Awesome Nursery</h2>
        <h5>Where green meets serenity</h5>
      </div>

      <div className={`navbarMain3 ${menuOpen ? 'show' : ''}`}>
        <h2>Plants</h2>
      </div>

      <div className={`navbarMain4 ${menuOpen ? 'show' : ''}`}>
        <Link to="/CartPage">
          <img src={navbarImg2} alt="Cart" />
        </Link>
        <p>{cartCount}</p>
      </div>
    </div>
  );
};

export default Navbar;
