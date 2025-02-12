import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Search, ShoppingBag, User, Star, Heart 
} from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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
            <span className="text-2xl font-bold">Kemart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/pages" className="text-gray-700 hover:text-blue-600">Pages</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Login/Register */}
            <Link to="/login" className="hidden lg:flex items-center text-sm">
              <span className="text-blue-500">Login</span>
              <span className="mx-1 text-gray-400">/</span>
              <span>Register</span>
            </Link>

            {/* Search Icon */}
            <button className="p-1">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="p-1 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="p-1 relative hidden lg:block">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="py-4 space-y-4">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/shop" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Shop
              </Link>
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                About
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Blog
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Contact
              </Link>
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Login / Register
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
