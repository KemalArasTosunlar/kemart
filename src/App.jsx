import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import ShopPageDesktop from "./pages/ShopPageDesktop"
import ContactPageDesktop from "./pages/ContactPageDesktop"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPageDesktop/>} />
        <Route path="contact" element={<ContactPageDesktop/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

