import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryDropdown = ({ isOpen }) => {
  const categories = useSelector(state => state.product.categories);
  const fetchState = useSelector(state => state.product.fetchState);

  if (!isOpen) return null;

  // Loading state
  if (fetchState === 'FETCHING') {
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 p-4">
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (fetchState === 'FAILED' || !Array.isArray(categories)) {
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 p-4">
        <p className="text-red-500 text-sm">Failed to load categories</p>
      </div>
    );
  }

  // Empty state
  if (categories.length === 0) {
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 p-4">
        <p className="text-gray-500 text-sm">No categories available</p>
      </div>
    );
  }

  // Group categories by gender
  const categoriesByGender = categories.reduce((acc, category) => {
    if (!category) return acc;
    
    const gender = category.gender === 'k' ? 'Kadın' : 'Erkek';
    if (!acc[gender]) {
      acc[gender] = [];
    }
    
    // Only add categories with valid title
    if (category.title) {
      acc[gender].push(category);
    }
    
    return acc;
  }, {});

  return (
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 grid grid-cols-2 gap-4 p-4">
      {Object.entries(categoriesByGender).map(([gender, genderCategories]) => (
        <div key={gender} className="flex flex-col">
          <h3 className="font-bold capitalize">{gender}</h3>
          <ul className="space-y-2">
            {genderCategories.map(category => (
              <li key={category.id}>
                <Link 
                  to={`/shop/${gender.toLowerCase()}/${category.title.toLowerCase()}/${category.id}`}
                  className="text-gray-700 hover:text-blue-600 block py-1"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

CategoryDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default CategoryDropdown;