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

  // Group categories by gender with null checks
  const categoriesByGender = categories.reduce((acc, category) => {
    if (!category) return acc;
    
    const gender = category.gender || 'Other';
    if (!acc[gender]) {
      acc[gender] = [];
    }
    
    // Only add categories with valid name and id
    if (category.name && (category.id || category._id)) {
      acc[gender].push(category);
    }
    
    return acc;
  }, {});

  // If no valid categories after filtering
  if (Object.keys(categoriesByGender).length === 0) {
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 p-4">
        <p className="text-gray-500 text-sm">No valid categories available</p>
      </div>
    );
  }

  return (
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
      {Object.entries(categoriesByGender).map(([gender, genderCategories]) => (
        <div key={gender} className="p-4 border-t first:border-t-0">
          <h3 className="font-bold capitalize">{gender}</h3>
          <ul className="space-y-2">
            {genderCategories.map(category => (
              <li key={category.id || category._id}>
                <Link 
                  to={`/shop/${gender.toLowerCase()}/${category.name.toLowerCase()}/${category.id || category._id}`}
                  className="text-gray-700 hover:text-blue-600 block py-1"
                >
                  {category.name}
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
