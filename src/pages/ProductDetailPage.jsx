import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import ShopProductCard from "../components/ShopProductCard";
import { Button } from "../components/ui/button";

const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const { currentProduct: product, fetchState } = useSelector(state => state.product);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProduct(productId));
        }
    }, [dispatch, productId]);

    if (fetchState === 'FETCHING') {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#23A6F0]"></div>
            </div>
        );
    }

    if (!product) {
        return null;
    }

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
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <Button 
                                variant="ghost"
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white hover:bg-white/90 rounded-full p-0 flex items-center justify-center"
                                aria-label="Previous slide"
                            >
                                <span className="text-2xl">&lt;</span>
                            </Button>
                            <Button 
                                variant="ghost"
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white hover:bg-white/90 rounded-full p-0 flex items-center justify-center"
                                aria-label="Next slide"
                            >
                                <span className="text-2xl">&gt;</span>
                            </Button>
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
                        <Button 
                            variant="link"
                            onClick={() => navigate(-1)}
                            className="mb-4 text-[#23A6F0] hover:text-[#1a7ab0] p-0 h-auto"
                        >
                            ← Back
                        </Button>
                        <h2 className="text-2xl md:text-[40px] font-bold font-montserrat text-[#252B42] mb-4">{product.name}</h2>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                                {[1,2,3,4].map((star) => (
                                    <span key={star} className="text-yellow-400">★</span>
                                ))}
                                <span className="text-gray-300">★</span>
                            </div>
                            <span className="text-[#737373] text-xs md:text-sm font-montserrat">{product.rating} Rating</span>
                        </div>

                        {/* Price */}
                        <div className="text-2xl md:text-[40px] font-bold font-montserrat text-[#252B42] mb-4">
                            ${product.price.toFixed(2)}
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-[#737373] text-xs md:text-sm font-montserrat">Availability :</span>
                            <span className="text-[#23A6F0] text-xs md:text-sm font-montserrat">
                                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#737373] mb-8 text-xs md:text-sm font-montserrat">
                            {product.description}
                        </p>

                        {/* Color Options */}
                        <div className="flex gap-2 mb-8">
                            <Button 
                                variant="ghost"
                                className="w-8 h-8 rounded-full bg-[#23A6F0] hover:bg-[#23A6F0] p-0"
                            />
                            <Button 
                                variant="ghost"
                                className="w-8 h-8 rounded-full bg-[#2DC071] hover:bg-[#2DC071] p-0"
                            />
                            <Button 
                                variant="ghost"
                                className="w-8 h-8 rounded-full bg-[#E77C40] hover:bg-[#E77C40] p-0"
                            />
                            <Button 
                                variant="ghost"
                                className="w-8 h-8 rounded-full bg-[#252B42] hover:bg-[#252B42] p-0"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button 
                                className="flex-1 md:flex-none bg-[#23A6F0] hover:bg-[#1a7ab0] text-white px-4 md:px-8 py-3 h-auto text-sm md:text-base font-montserrat"
                            >
                                Select Options
                            </Button>
                            <Button 
                                variant="outline"
                                className="w-10 h-10 rounded-full border border-[#E8E8E8] p-0 flex items-center justify-center hover:bg-[#E8E8E8]/10"
                            >
                                <Heart className="w-5 h-5 text-[#252B42]" />
                            </Button>
                            <Button 
                                variant="outline"
                                className="w-10 h-10 rounded-full border border-[#E8E8E8] p-0 flex items-center justify-center hover:bg-[#E8E8E8]/10"
                            >
                                <ShoppingCart className="w-5 h-5 text-[#252B42]" />
                            </Button>
                            <Button 
                                variant="outline"
                                className="w-10 h-10 rounded-full border border-[#E8E8E8] p-0 flex items-center justify-center hover:bg-[#E8E8E8]/10"
                            >
                                <Eye className="w-5 h-5 text-[#252B42]" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs Section */}
            <div className="max-w-[1440px] mx-auto px-6 py-8 border-t">
                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 border-b overflow-x-auto">
                    <Button 
                        variant="ghost"
                        className="px-4 py-2 text-[#737373] border-b-2 border-[#23A6F0] -mb-[2px] text-center whitespace-nowrap text-xs md:text-sm font-montserrat h-auto hover:bg-transparent"
                    >
                        Description
                    </Button>
                    <Button 
                        variant="ghost"
                        className="px-4 py-2 text-[#737373] relative text-center whitespace-nowrap text-xs md:text-sm font-montserrat h-auto hover:bg-transparent"
                    >
                        Additional Information
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#23856D] rounded-full"></span>
                    </Button>
                    <Button 
                        variant="ghost"
                        className="px-4 py-2 text-[#737373] flex items-center justify-center gap-2 whitespace-nowrap text-xs md:text-sm font-montserrat h-auto hover:bg-transparent"
                    >
                        Reviews <span className="text-[#23856D] font-montserrat">(0)</span>
                    </Button>
                </div>

                {/* Rest of the content remains unchanged */}
                {/* ... */}
            </div>

            {/* Bestseller Products Section */}
            <div className="w-full">
                <div className="max-w-[1440px] mx-auto px-6 py-12">
                    <h2 className="font-montserrat font-bold text-2xl md:text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center mb-12">
                        BESTSELLER PRODUCTS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                        {/* ShopProductCard components remain unchanged */}
                        {/* ... */}
                    </div>
                </div>
            </div>

            {/* Clients Section */}
            <div className="w-full bg-[#FAFAFA]">
                {/* Content remains unchanged */}
                {/* ... */}
            </div>
        </div>
    );
};

export default ProductDetailPage;