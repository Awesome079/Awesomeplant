import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Use 'react-dom/client'
import App from './App';
import { CartProvider } from './context/CartContext';  // ✅ Ensure correct path

const root = ReactDOM.createRoot(document.getElementById('root'));  // ✅ Use createRoot
root.render(
  <React.StrictMode>
    <CartProvider>  
      <App />
    </CartProvider>
  </React.StrictMode>
);
