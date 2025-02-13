import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
    {
        id: 1,
        season: "SUMMER 2020",
        title: "Vita Classic Product",
        price: 16.48,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        description: "We know how large objects will act, We know how are objects will act, We know"
    },
    {
        id: 2,
        season: "SUMMER 2020",
        title: "Vita Summer Collection",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        description: "We know how large objects will act, We know how are objects will act, We know"
    }
];

const ProductSlider = () => {
    return (
        <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#2A8D5C] py-16">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.custom-swiper-next',
                    prevEl: '.custom-swiper-prev',
                }}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
                    bulletClass: 'swiper-pagination-bullet !bg-gray-400/50'
                }}
                className="relative"
            >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                {/* Left Content */}
                                <div className="w-full md:w-1/2 text-white">
                                    <span className="text-sm font-bold tracking-wider">{product.season}</span>
                                    <h2 className="text-5xl font-bold mt-4 mb-6">{product.title}</h2>
                                    <p className="text-lg mb-6 max-w-md">{product.description}</p>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                                        <button className="bg-[#2DC071] hover:bg-[#25A861] px-8 py-3 rounded-md font-bold transition-colors">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                {/* Right Image */}
                                <div className="w-full md:w-1/2">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-[500px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Navigation Arrows */}
            <button className="custom-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="custom-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
};

export default ProductSlider;
