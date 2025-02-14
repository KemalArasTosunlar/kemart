import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import ShopPageDesktop from "./pages/ShopPageDesktop"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPageDesktop/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

