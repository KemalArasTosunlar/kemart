import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import ShopPageDesktop from "./pages/ShopPageDesktop"
import ContactPage from "./pages/ContactPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import TeamPage from "./pages/TeamPage"
import AboutUs from "./pages/AboutUs"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPageDesktop/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="product-detail" element={<ProductDetailPage/>}/>
        <Route path="team" element={<TeamPage/>}/>
        <Route path="about" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
