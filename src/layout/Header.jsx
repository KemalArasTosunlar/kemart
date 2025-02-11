import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Search, ShoppingBag, User, Heart 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
            <Link to="/deals" className="text-gray-700 hover:text-blue-600">Deals</Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none ml-2 w-40"
              />
            </div>
            <Link to="/wishlist" className="p-2">
              <Heart className="w-6 h-6" />
            </Link>
            <Link to="/account" className="p-2">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="p-2 relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="py-4 space-y-4">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Home
              </Link>
              <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Products
              </Link>
              <Link to="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Categories
              </Link>
              <Link to="/deals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Deals
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header