import React from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
  },
  {
    id: 2,
    title: "Smart Watch Series 5",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    id: 3,
    title: "Professional Camera Kit",
    price: 799.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80"
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    price: 149.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
  },
];

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&q=80",
    title: "Summer Collection",
    subtitle: "Up to 50% off"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=600&q=80",
    title: "New Arrivals",
    subtitle: "Shop the latest trends"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&q=80",
    title: "Exclusive Deals",
    subtitle: "Limited time offers"
  }
];

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
      {/* Hero Slider - Full Width */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
            bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-70'
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full h-screen max-h-[800px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-full">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-wider">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                    {banner.subtitle}
                  </p>
                  <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md text-lg font-medium hover:bg-[#1890d8] transition-colors">
                    Start Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-white after:!text-3xl"></div>
          <div className="swiper-button-next !text-white after:!text-3xl"></div>
        </Swiper>
      </section>

      {/* Editor's Pick Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-3">EDITOR'S PICK</h2>
          <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Men's Section - Large Image */}
          <div className="col-span-1 lg:col-span-6 relative group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src={editorsPicks[0].image}
                alt="Men's Fashion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <button className="absolute left-7 bottom-7 bg-white px-10 py-3 text-sm font-bold hover:bg-gray-100 transition-colors">
              MEN
            </button>
          </div>

          {/* Women's Section - Medium Image */}
          <div className="col-span-1 lg:col-span-3 relative group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src={editorsPicks[1].image}
                alt="Women's Fashion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <button className="absolute left-7 bottom-7 bg-white px-10 py-3 text-sm font-bold hover:bg-gray-100 transition-colors">
              WOMEN
            </button>
          </div>

          {/* Right Column for Accessories and Kids */}
          <div className="col-span-1 lg:col-span-3 grid grid-rows-2 gap-4">
            {/* Accessories Section */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={editorsPicks[2].image}
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <button className="absolute left-7 bottom-7 bg-white px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Section */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={editorsPicks[3].image}
                  alt="Kids Fashion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <button className="absolute left-7 bottom-7 bg-white px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors">
                KIDS
              </button>
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

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Categories</h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
            View All <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Fashion', 'Home', 'Beauty'].map((category) => (
            <div key={category} className="relative rounded-lg overflow-hidden aspect-square">
              <img
                src={`https://source.unsplash.com/random/400x400?${category.toLowerCase()}`}
                alt={category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
            View All <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 -mx-4 px-4 py-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with our latest products and deals!</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
