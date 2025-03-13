
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import './App.css';
import ShoppingPage from "./components/ShoppingPage";
import CartPage from "./components/CartPage";


function App() {
  // Helper component to conditionally render Navbar and Footer
  function Layout() {
    const location = useLocation();
   
    const hideNavbar = ['/Home'].includes(location.pathname);
    
    return (
      <>
        {!hideNavbar && <Navbar />}
        {/* {!hideSidebar && <Sidebar />} */}
        {/* {!hideHeader && <Header />} */}
        
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ShoppingPage" element={<ShoppingPage />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
        
        {/* {!hideFooter && <Footer />} */}
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