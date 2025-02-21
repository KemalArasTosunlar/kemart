import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import md5 from 'md5';
import {
  Menu,
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
import { fetchCategories } from '../store/actions/productActions';
import CategoryDropdown from '../components/CategoryDropdown';
import ShoppingCartDropdown from '../components/ShoppingCartDropdown';
import { Container } from "../components/ui/container";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector(state => state.client.user);
  const cart = useSelector(state => state.shoppingCart.cart);
  const cartItemsCount = cart.reduce((total, item) => total + item.count, 0);
  const gravatarUrl = user?.email ? `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase().trim())}?d=mp` : null;

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/pages', label: 'Pages' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white py-2">
        <Container>
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:text-white/80 p-0 h-auto">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">(225) 555-0118</span>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white/80 p-0 h-auto">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">kemart@example.com</span>
              </Button>
            </div>
            
            {/* Promotion Text */}
            <div className="hidden lg:block">
              <span className="text-sm">Follow Us and get a chance to win 80% off</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm hidden lg:block">Follow Us :</span>
              <div className="flex space-x-3">
                {[Instagram, Youtube, Facebook, Twitter].map((Icon, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:text-white/80 p-0 h-auto"
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-lg font-medium text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {!user && (
                    <>
                      <Link to="/login" className="text-lg font-medium text-blue-600 hover:text-blue-700">
                        Login
                      </Link>
                      <Link to="/signup" className="text-lg font-medium text-blue-600 hover:text-blue-700">
                        Register
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">Kemart</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    {item.path === '/shop' ? (
                      <div 
                        className="relative group"
                      >
                        <Link to="/shop">
                          <NavigationMenuLink
                            className={`px-4 py-2 text-sm font-medium flex items-center gap-1 ${
                              location.pathname === item.path
                                ? 'text-blue-600'
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                          >
                            Shop
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </NavigationMenuLink>
                        </Link>
                        <div className="absolute top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                          <CategoryDropdown isOpen={true} />
                        </div>
                      </div>
                    ) : (
                      <Link to={item.path}>
                        <NavigationMenuLink
                          className={`px-4 py-2 text-sm font-medium ${
                            location.pathname === item.path
                              ? 'text-blue-600'
                              : 'text-gray-700 hover:text-blue-600'
                          }`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* User Profile / Login */}
              {user ? (
                <div className="hidden lg:flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={gravatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
              ) : (
                <div className="hidden lg:flex items-center space-x-3">
                  <Button variant="link" asChild>
                    <Link to="/login" className="text-blue-500 hover:text-blue-600">
                      Login
                    </Link>
                  </Button>
                  <span className="text-gray-400">/</span>
                  <Button variant="link" asChild>
                    <Link to="/signup" className="text-blue-500 hover:text-blue-600">
                      Register
                    </Link>
                  </Button>
                </div>
              )}

              {/* Action Icons */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Search className="w-5 h-5" />
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingBag className="w-5 h-5" />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {cartItemsCount}
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ShoppingCartDropdown cart={cart} />
                  </PopoverContent>
                </Popover>
                <Button variant="ghost" size="icon" className="relative" asChild>
                  <Link to="/wishlist">
                    <Heart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      1
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
