import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CategoryDropdown = () => {
  const categories = [
    'All Categories',
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
    'Toys',
    'Health & Beauty',
    'Automotive',
    'Pet Supplies'
  ];

  return (
    <div className="relative group">
      <Button variant="outline" className="flex items-center gap-2">
        <span>Categories</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
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
      </Button>

      {/* Dropdown menu */}
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
