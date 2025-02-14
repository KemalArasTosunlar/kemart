import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import ShopProductCard from "../components/ShopProductCard";

const ProductDetailPage = () => {
    return (
        <div className="w-full">
            {/* Page Title with Breadcrumb */}
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-xl md:text-2xl font-bold font-montserrat text-[#252B42]">Shop</h1>
                    <div className="flex items-center gap-2">
                        <Link to="/" className="text-xs md:text-sm font-montserrat text-[#252B42] hover:text-[#23A6F0]">Home</Link>
                        <span className="text-xs md:text-sm font-montserrat text-[#BDBDBD]">{`>`}</span>
                        <span className="text-xs md:text-sm font-montserrat text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
            </div>

            {/* Product Details Section */}
            <div className="max-w-[1440px] mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Images */}
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full h-[400px] md:h-[600px] bg-[#F9F9F9] mb-4">
                            <img 
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" 
                                alt="Floating Phone" 
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl">&lt;</span>
                            </button>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl">&gt;</span>
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-[#F9F9F9]">
                                <img 
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" 
                                    alt="Thumbnail 1" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-24 h-24 bg-[#F9F9F9]">
                                <img 
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" 
                                    alt="Thumbnail 2" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-[40px] font-bold font-montserrat text-[#252B42] mb-4">Floating Phone</h2>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                                {[1,2,3,4].map((star) => (
                                    <span key={star} className="text-yellow-400">★</span>
                                ))}
                                <span className="text-gray-300">★</span>
                            </div>
                            <span className="text-[#737373] text-xs md:text-sm font-montserrat">10 Reviews</span>
                        </div>

                        {/* Price */}
                        <div className="text-2xl md:text-[40px] font-bold font-montserrat text-[#252B42] mb-4">
                            $1,139.33
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-[#737373] text-xs md:text-sm font-montserrat">Availability :</span>
                            <span className="text-[#23A6F0] text-xs md:text-sm font-montserrat">In Stock</span>
                        </div>

                        {/* Description */}
                        <p className="text-[#737373] mb-8 text-xs md:text-sm font-montserrat">
                            Met minim Mollie non desert Alamo est sit cliquey dolor 
                            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                            Excitation venial consequent sent nostrum met.
                        </p>

                        {/* Color Options */}
                        <div className="flex gap-2 mb-8">
                            <button className="w-8 h-8 rounded-full bg-[#23A6F0]"></button>
                            <button className="w-8 h-8 rounded-full bg-[#2DC071]"></button>
                            <button className="w-8 h-8 rounded-full bg-[#E77C40]"></button>
                            <button className="w-8 h-8 rounded-full bg-[#252B42]"></button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="flex-1 md:flex-none bg-[#23A6F0] text-white px-4 md:px-8 py-3 rounded text-sm md:text-base font-montserrat">
                                Select Options
                            </button>
                            <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center">
                                <Heart className="w-5 h-5 text-[#252B42]" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center">
                                <ShoppingCart className="w-5 h-5 text-[#252B42]" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center">
                                <Eye className="w-5 h-5 text-[#252B42]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs Section */}
            <div className="max-w-[1440px] mx-auto px-6 py-8 border-t">
                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 border-b overflow-x-auto">
                    <button className="px-4 py-2 text-[#737373] border-b-2 border-[#23A6F0] -mb-[2px] text-center whitespace-nowrap text-xs md:text-sm font-montserrat">
                        Description
                    </button>
                    <button className="px-4 py-2 text-[#737373] relative text-center whitespace-nowrap text-xs md:text-sm font-montserrat">
                        Additional Information
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#23856D] rounded-full"></span>
                    </button>
                    <button className="px-4 py-2 text-[#737373] flex items-center justify-center gap-2 whitespace-nowrap text-xs md:text-sm font-montserrat">
                        Reviews <span className="text-[#23856D] font-montserrat">(0)</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col items-center py-8">
                    <div className="w-full max-w-[1056px] flex flex-col items-center px-4 md:px-0 py-6 gap-[30px]">
                        <div className="flex flex-col md:flex-row items-start gap-[30px] w-full">
                            {/* Left Column - Image */}
                            <div className="w-full md:w-1/3">
                                <div className="w-full rounded-[9px] relative aspect-[337/392]">
                                    <img 
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" 
                                        alt="Product Detail" 
                                        className="w-full h-full rounded-[5.4px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Middle Column - Content */}
                            <div className="w-full md:w-1/3 flex flex-col gap-[30px]">
                                <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                                    the quick fox jumps over
                                </h3>
                                <p className="font-montserrat text-sm leading-5 tracking-[0.2px] text-[#737373]">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
                                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    <br/><br/>
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
                                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    <br/><br/>
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
                                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                </p>
                            </div>

                            {/* Right Column - Lists */}
                            <div className="w-full md:w-1/3 flex flex-col gap-[25px]">
                                {/* First List */}
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                                        the quick fox jumps over
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Second List */}
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                                        the quick fox jumps over
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-5">
                                            <span className="text-[#23A6F0]">▸</span>
                                            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                                the quick fox jumps over the lazy dog
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bestseller Products Section */}
            <div className="w-full">
                <div className="max-w-[1440px] mx-auto px-6 py-12">
                    <h2 className="font-montserrat font-bold text-2xl md:text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center mb-12">
                        BESTSELLER PRODUCTS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1578873375969-d60aad647bb9?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1578873375969-d60aad647bb9?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1578873375969-d60aad647bb9?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1578873375969-d60aad647bb9?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                        <ShopProductCard 
                            image="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"
                            title="Graphic Design"
                            category="English Department"
                            oldPrice="16.48"
                            newPrice="6.48"
                        />
                    </div>
                </div>
            </div>

            {/* Clients Section */}
            <div className="w-full bg-[#FAFAFA]">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="md:w-[1050px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-[50px] gap-8 md:gap-[30px]">
                            {/* Brand Logos */}
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/hooli.png" alt="Hooli" className="h-8 w-auto grayscale" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/lyft.png" alt="Lyft" className="h-8 w-auto grayscale" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/gemi.png" alt="Leaf" className="h-8 w-auto grayscale" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/stripe.png" alt="Stripe" className="h-8 w-auto grayscale" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/aws.png" alt="AWS" className="h-8 w-auto grayscale" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/reddit.png" alt="Reddit" className="h-8 w-auto grayscale" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
