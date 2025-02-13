import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { title, price, salePrice, image, department } = product;

    return (
        <div className="group flex flex-col bg-white overflow-hidden">
            <div className="relative h-96 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                
                {/* Overlay buttons on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 rounded-full bg-white hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ShoppingCart className="w-6 h-6 text-gray-800" />
                    </button>
                    <button className="p-3 rounded-full bg-white hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Heart className="w-6 h-6 text-gray-800 hover:text-red-500" />
                    </button>
                </div>
            </div>
            
            <div className="p-4 flex flex-col items-center text-center">
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-gray-500 text-sm mb-2">{department}</p>
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through">${price}</span>
                    <span className="text-[#23856D]">${salePrice}</span>
                </div>
                <div className="flex gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
