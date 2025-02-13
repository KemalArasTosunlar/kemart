import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';

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

const HomePageMobile = () => {
  return (
    <div className="-mt-20 relative w-full">
      {/* Hero Banner Section */}
      <section className="mobile-shop-header-1 w-screen h-[532px] bg-[#FAFAFA] relative">
        {/* Background */}
        <div className="absolute w-screen h-[532px] left-0 top-0">
          {/* Hero Cover */}
          <div className="absolute inset-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Filter */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-[20px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-[30px]">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-[30px] leading-[40px] tracking-[0.2px] mb-[30px]">
              NEW COLLECTION
            </h1>
            <p className="font-montserrat text-[14px] leading-[20px] tracking-[0.2px] max-w-[200px] mb-[30px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-[#2DC071] hover:bg-[#25A861] px-[20px] py-[10px] rounded-[5px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-left">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="w-[414px] h-[770px] bg-[#FAFAFA] relative mx-auto overflow-hidden">
        <div className="w-[300px] h-[824px] mx-auto pt-[80px] flex flex-col items-center">
          <div className="w-[250px] h-[62px] flex flex-col items-center gap-[10px] mb-[48px]">
            <h2 className="w-[187px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              EDITOR'S PICK
            </h2>
            <p className="w-[250px] h-[20px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          
          <div className="w-[300px] h-[500px] flex gap-[30px] flex-wrap">
            {editorsPicks.map((pick) => (
              <div key={pick.id} className="w-[140px] h-[200px] relative bg-white">
                <img src={pick.image} alt={pick.category} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)] flex items-center justify-center">
                  <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
                    {pick.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections can be added here following the same structure */}
    </div>
  );
};

export default HomePageMobile;
