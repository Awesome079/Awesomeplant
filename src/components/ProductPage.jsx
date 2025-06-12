import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/productPage.css';

const products = [
  { id: 1, img: require("../components/productIMG/pix1.jpg"), title: 'Peace Lily', price: '$10', detail: 'Removes mold spores and purifies the air' },
  { id: 2, img: require("../components/productIMG/pix2.jpg"), title: 'Snake Plant', price: '$31', detail: 'Produces oxygen at night improving air quality' },
  { id: 3, img: require("../components/productIMG/pix3.jpg"), title: 'Spider Plant', price: '$12', detail: 'fibers formaldehyde and xylene from the air' },
  { id: 4, img: require("../components/productIMG/pix4.jpg"), title: 'Boston Fren', price: '$15', detail: 'beautiful smell both day and night' },
  { id: 5, img: require("../components/productIMG/pix5.jpg"), title: 'Rubber Plant', price: '$40', detail: 'Produces nice smell at night improving air quality' },
  { id: 6, img: require("../components/productIMG/pix6.jpg"), title: 'Alone Vera', price: '$101', detail: 'Brings awesome oxygen at night improving air quality' },
  { id: 7, img: require("../components/productIMG/pix7.jpg"), title: 'Peace Lily', price: '$102', detail: 'Removes mold spores and purifies the air' },
  { id: 8, img: require("../components/productIMG/pix8.jpg"), title: 'Snake Plant', price: '$352', detail: 'Produces oxygen at night improving air quality' },
  { id: 9, img: require("../components/productIMG/pix9.jpg"), title: 'Spider Plant', price: '$19', detail: 'fibers formaldehyde and xylene from the air' },
  { id: 10, img: require("../components/productIMG/pix10.jpg"), title: 'Boston Fren', price: '$11', detail: 'beautiful smell both day and night' },
  { id: 11, img: require("../components/productIMG/pix11.jpg"), title: 'Rubber Plant', price: '$70', detail: 'Produces nice smell at night improving air quality' },
  { id: 12, img: require("../components/productIMG/pix12.jpg"), title: 'Alone Vera', price: '$20', detail: 'Brings awesome oxygen at night improving air quality' },
];
const ProductPage = () => {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className='productPageMain'>
      <h1>Air Purifying Plants</h1>
      <section className='product-cont'>
        {products.map((product) => {
          const isAdded = cart.some((item) => item.id === product.id);

          return (
            <div className='productitem-Con' key={product.id}>
              <button className="sale-btn">SALE</button>
              <h3>{product.title}</h3>
              <img
                src={product.img}
                alt={product.title}
                onClick={() => navigate('/ShoppingPage', { state: { product } })}
                style={{ cursor: 'pointer' }}
              />
              <h4>{product.price}</h4>
              <p>{product.detail}</p>
              <button
                onClick={() => addToCart(product)}
                style={{ backgroundColor: isAdded ? 'gray' : 'green' }}
                disabled={isAdded}
              >
                {isAdded ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProductPage;
