import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';
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
      <section className="w-[1440px] h-[770px] bg-[#FAFAFA] relative left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="w-[1124px] h-[824px] mx-auto pt-[80px] flex flex-col items-center">
          <div className="w-[607px] h-[62px] flex flex-col items-center gap-[10px] mb-[48px]">
            <h2 className="w-[187px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              EDITOR'S PICK
            </h2>
            <p className="w-[342px] h-[20px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          
          <div className="w-[1050px] h-[500px] flex gap-[30px]">
            {/* Men's Section - Large Image */}
            <div className="w-[510px] h-[500px] relative bg-white">
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
            <div className="w-[240px] h-[500px] relative bg-white">
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
            <div className="w-[240px] h-[500px] flex flex-col gap-[16px]">
              {/* Accessories Section */}
              <div className="w-[240px] h-[242px] relative bg-white">
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
              <div className="w-[240px] h-[242px] relative bg-white">
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
