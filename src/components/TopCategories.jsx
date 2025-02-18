import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopCategories = () => {
  const categories = useSelector(state => state.product.categories);
  const fetchState = useSelector(state => state.product.fetchState);

  // Loading state
  if (fetchState === 'FETCHING') {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (fetchState === 'FAILED' || !Array.isArray(categories)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="text-center text-gray-600">
          Unable to load categories. Please try again later.
        </div>
      </div>
    );
  }

  // Empty state
  if (categories.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="text-center text-gray-600">
          No categories available.
        </div>
      </div>
    );
  }

  // Get top 5 categories by rating
  const topCategories = [...categories]
    .filter(category => 
      category && 
      typeof category === 'object' && 
      'rating' in category &&
      'name' in category &&
      'gender' in category &&
      'id' in category
    )
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {topCategories.map(category => (
          <Link 
            key={category.id}
            to={`/shop/${category.gender?.toLowerCase()}/${category.name?.toLowerCase()}/${category.id}`}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={category.image || 'https://via.placeholder.com/300'} 
                alt={category.name || 'Category'}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{category.name || 'Unnamed Category'}</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm">{category.rating?.toFixed(1) || '0.0'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
