import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">({rating})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard