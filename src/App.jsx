import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import ShopPageDesktop from "./pages/ShopPageDesktop"
import ContactPage from "./pages/ContactPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import TeamPage from "./pages/TeamPage"
import AboutUs from "./pages/AboutUs"
import SignupForm from "./components/SignupForm"
import LoginForm from "./components/LoginForm"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import CreateOrderPage from "./pages/CreateOrderPage"

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector(state => state.client);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Verify token on app load
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPageDesktop/>} />
        <Route path="shop/:gender/:categoryName/:categoryId" element={<ShopPageDesktop/>} />
        <Route path="shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<ProductDetailPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="team" element={<TeamPage/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="cart" element={<ShoppingCartPage/>}/>
        <Route
          path="create-order"
          element={
            <ProtectedRoute>
              <CreateOrderPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
