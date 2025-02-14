import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';



const editorsPicks = [
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

const bestsellerProducts = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800"
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800"
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800"
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800"
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800"
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800"
  }
];

const HomePage = () => {
  return (
    <div className="-mt-20 relative w-full">
      {/* Hero Banner Section */}
<section className="desktop-shop-header-1 w-full h-[852px] bg-[#FAFAFA] relative">
        {/* Background */}
        <div className="absolute w-screen h-[747px] left-0 top-0">
          {/* Hero Cover */}
          <div className="absolute inset-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Filter */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-[195px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-[30px]">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] mb-[30px]">
              NEW COLLECTION
            </h1>
            <p className="font-montserrat text-[20px] leading-[30px] tracking-[0.2px] max-w-[376px] mb-[30px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-[#2DC071] hover:bg-[#25A861] px-[40px] py-[15px] rounded-[5px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-left">
              SHOP NOW
            </button>
          </div>

          {/* Navigation Arrows */}
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

          {/* Carousel Indicators */}
          <div className="absolute bottom-[49px] left-1/2 -translate-x-1/2 flex gap-[1px] w-[126px] h-[10px]">
            <div className="w-[62px] h-[10px] bg-white"></div>
            <div className="w-[63px] h-[10px] bg-white opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="w-full max-w-[1440px] min-h-[770px] bg-[#FAFAFA] relative mx-auto overflow-hidden px-4">
        <div className="max-w-[1124px] mx-auto pt-[80px] flex flex-col items-center">
          <div className="max-w-[607px] flex flex-col items-center gap-[10px] mb-[48px]">
            <h2 className="w-[187px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              EDITOR'S PICK
            </h2>
            <p className="w-[342px] h-[20px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          
          <div className="w-full max-w-[1050px] flex flex-wrap lg:flex-nowrap gap-[30px] justify-center">
            {/* Men's Section - Large Image */}
            <div className="w-full lg:w-[510px] h-[500px] relative bg-white">
              <div className="absolute inset-0">
                <img 
                  src={editorsPicks[0].image}
                  alt="Men's Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
              </div>
              <div className="absolute left-[31px] bottom-[26px] h-[48px] w-[170px] bg-white flex items-center justify-center">
                <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                  MEN
                </span>
              </div>
            </div>

            {/* Women's Section - Medium Image */}
            <div className="w-full sm:w-[240px] h-[500px] relative bg-white">
              <div className="absolute inset-0">
                <img 
                  src={editorsPicks[1].image}
                  alt="Women's Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
              </div>
              <div className="absolute left-[21px] bottom-[18px] h-[48px] w-[136px] bg-white flex items-center justify-center">
                <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                  WOMEN
                </span>
              </div>
            </div>

            {/* Right Column for Accessories and Kids */}
            <div className="w-full sm:w-[240px] h-full sm:h-[500px] flex flex-col gap-[16px]">
              {/* Accessories Section */}
              <div className="w-full h-[242px] relative bg-white">
                <div className="absolute inset-0">
                  <img 
                    src={editorsPicks[2].image}
                    alt="Accessories"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
                </div>
                <div className="absolute left-[14px] bottom-[23px] h-[48px] w-[170px] bg-white flex items-center justify-center">
                  <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    ACCESSORIES
                  </span>
                </div>
              </div>

              {/* Kids Section */}
              <div className="w-full h-[242px] relative bg-white">
                <div className="absolute inset-0">
                  <img 
                    src={editorsPicks[3].image}
                    alt="Kids Fashion"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
                </div>
                <div className="absolute left-[18px] bottom-[18px] h-[48px] w-[80px] bg-white flex items-center justify-center">
                  <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    KIDS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Products Section */}
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

      {/* Neural Universe Section */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800" 
              alt="Neural Universe" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-wider text-gray-600">SUMMER 2020</span>
            <h2 className="text-5xl font-bold mt-4 mb-6 text-gray-900">Part of the Neural Universe</h2>
            <p className="text-lg mb-8 text-gray-600">We know how large objects will act, but things on a small scale.</p>
            <div className="flex items-center gap-4">
              <button className="bg-[#2DC071] hover:bg-[#25A861] px-8 py-3 rounded-md font-bold transition-colors text-white">
                BUY NOW
              </button>
              <button className="border-2 border-[#2DC071] hover:bg-[#2DC071]/10 px-8 py-3 rounded-md font-bold transition-colors text-[#2DC071]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#23A6F0] text-sm font-bold">Practice Advice</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-3">Featured Posts</h2>
          <p className="text-gray-600 mt-2">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Card 1 */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80" 
                alt="Colorful buildings" 
                className="w-full h-[300px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                NEW
              </span>
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

          {/* Post Card 2 */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80" 
                alt="Pink vintage car" 
                className="w-full h-[300px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                NEW
              </span>
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

          {/* Post Card 3 */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&q=80" 
                alt="Colorful umbrellas" 
                className="w-full h-[300px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                NEW
              </span>
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
        </div>
      </section>
    </div>
  );
};

export default HomePage;
