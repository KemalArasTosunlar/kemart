import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Heart,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Updated background color to #252B42 */}
      <div className="bg-[#252B42] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">michelle.rivera@example.com</span>
              </div>
            </div>
            
            {/* Promotion Text */}
            <div className="hidden lg:block">
              <span className="text-sm">Follow Us and get a chance to win 80% off</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm hidden lg:block">Follow Us :</span>
              <div className="flex space-x-3">
                <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                <Youtube className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
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
              <span className="text-2xl font-bold">BrandName</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  Shop
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <div className="p-4">
                      <h3 className="font-bold">Kadın</h3>
                      <ul className="space-y-2">
                        <li>Bags</li>
                        <li>Belts</li>
                        <li>Cosmetics</li>
                        <li>Hats</li>
                      </ul>
                    </div>
                    <div className="p-4 border-t">
                      <h3 className="font-bold">Erkek</h3>
                      <ul className="space-y-2">
                        <li>Bags</li>
                        <li>Belts</li>
                        <li>Hats</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
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
                <span className="text-blue-500">Register</span>
              </Link>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button className="p-1">
                  <Search className="w-5 h-5" />
                </button>
                <Link to="/cart" className="p-1 relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </span>
                </Link>
                <Link to="/wishlist" className="p-1 relative">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </span>
                </Link>
              </div>
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
                <Link to="/pages" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Pages
                </Link>
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Login / Register
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;