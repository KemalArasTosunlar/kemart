import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';

const EditorsPick = () => {
  const categories = [
    {
      id: 1,
      category: "MEN",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    },
    {
      id: 2,
      category: "WOMEN",
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    },
    {
      id: 3,
      category: "ACCESSORIES",
      image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=800&q=80",
    },
    {
      id: 4,
      category: "KIDS",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80",
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">EDITOR'S PICK</h2>
        <p className="text-gray-600">Problems trying to resolve the conflict between</p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
        {categories.map((item, index) => (
          <div 
            key={item.id}
            className={`relative w-full ${
              index === 0 || index === 1 
                ? 'md:w-[calc(50%-1rem)]' 
                : 'md:w-[calc(25%-1.5rem)]'
            }`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block bg-white px-8 py-3 font-bold">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const bestsellerProducts = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "/api/placeholder/400/500"
  }
];

const HomePageMobile = () => {
  return (
    <div className="-mt-20 relative w-full">
      <section className="desktop-shop-header-1 w-full h-[852px] bg-[#FAFAFA] relative">
        <div className="absolute w-screen h-[747px] left-0 top-0">
          <div className="absolute inset-0" style={{backgroundImage: 'url(/api/placeholder/1920/747)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-[195px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-[30px]">SUMMER 2020</h5>
            <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] mb-[30px]">NEW COLLECTION</h1>
            <p className="font-montserrat text-[20px] leading-[30px] tracking-[0.2px] max-w-[376px] mb-[30px]">We know how large objects will act, but things on a small scale.</p>
            <button className="bg-[#2DC071] hover:bg-[#25A861] px-[40px] py-[15px] rounded-[5px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-left">SHOP NOW</button>
          </div>

          <button className="absolute left-[40px] top-1/2 -translate-y-1/2 w-[24px] h-[44px] text-white" aria-label="Previous slide">
            <svg width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6399 0.6375L22.9524 0L0.359863 22.5L22.9524 45L23.6399 44.3625L1.73486 22.5L23.6399 0.6375Z" fill="white"/>
            </svg>
          </button>
          <button className="absolute right-[40px] top-1/2 -translate-y-1/2 w-[24px] h-[44px] text-white" aria-label="Next slide">
            <svg width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.360137 44.3625L1.04764 45L23.6401 22.5L1.04764 0L0.360137 0.6375L22.2651 22.5L0.360137 44.3625Z" fill="white"/>
            </svg>
          </button>

          <div className="absolute bottom-[49px] left-1/2 -translate-x-1/2 flex gap-[1px] w-[126px] h-[10px]">
            <div className="w-[62px] h-[10px] bg-white"></div>
            <div className="w-[63px] h-[10px] bg-white opacity-50"></div>
          </div>
        </div>
      </section>

      <EditorsPick />

      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-gray-600 text-lg mb-2">Featured Products</h3>
            <h2 className="text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-600">Problems trying to resolve the conflict between</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <ProductSlider />

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[600px]">
            <img src="/api/placeholder/800/600" alt="Neural Universe" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-wider text-gray-600">SUMMER 2020</span>
            <h2 className="text-5xl font-bold mt-4 mb-6 text-gray-900">Part of the Neural Universe</h2>
            <p className="text-lg mb-8 text-gray-600">We know how large objects will act, but things on a small scale.</p>
            <div className="flex items-center gap-4">
              <button className="bg-[#2DC071] hover:bg-[#25A861] px-8 py-3 rounded-md font-bold transition-colors text-white">BUY NOW</button>
              <button className="border-2 border-[#2DC071] hover:bg-[#2DC071]/10 px-8 py-3 rounded-md font-bold transition-colors text-[#2DC071]">READ MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#23A6F0] text-sm font-bold">Practice Advice</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-3">Featured Posts</h2>
          <p className="text-gray-600 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg">
              <div className="relative">
                <img src="/api/placeholder/800/300" alt="Featured post" className="w-full h-[300px] object-cover"/>
                <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">NEW</span>
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-[#8EC2F2]">Google</span>
                  <span className="text-sm text-gray-600">Trending</span>
                  <span className="text-sm text-gray-600">New</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Loudest à la Madison #1 (L'integral)</h3>
                <p className="text-gray-600 mb-4">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-gray-600">22 April 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-gray-600">10 comments</span>
                  </div>
                </div>
                <button className="text-[#23A6F0] font-bold mt-4 flex items-center">
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageMobile;