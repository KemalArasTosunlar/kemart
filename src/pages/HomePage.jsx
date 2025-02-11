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

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Slider */}
      <section className="relative -mx-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="aspect-[21/9]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-full">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h2>
                    <p className="text-xl md:text-2xl">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Categories */}
      <section>
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
      <section>
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
}

export default HomePage