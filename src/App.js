import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import './App.css';
import ShoppingPage from "./components/ShoppingPage";
import CartPage from "./components/CartPage";

function App() {
  function Layout() {
    const location = useLocation();
    const hideNavbar = ['/', '/CartPage'].includes(location.pathname);

    return (
      <>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ShoppingPage" element={<ShoppingPage />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </>
    );
  }

  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
