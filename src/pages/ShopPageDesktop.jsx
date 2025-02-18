import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/actions/productActions';
import ShopProductCard from '../components/ShopProductCard';

const ShopPageDesktop = () => {
    const dispatch = useDispatch();
    const { gender, categoryName, categoryId } = useParams();
    const categories = useSelector(state => state.product.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Get current category if we're on a category page
    const currentCategory = categoryId ? categories.find(cat => cat.id === parseInt(categoryId)) : null;

    const products = [
        {
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        },
        {
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&w=800&q=80",
            title: "Graphic Design",
            category: "English Department",
            oldPrice: "16.48",
            newPrice: "6.48"
        }
    ];

    return (
        <div className="w-full">
            {/* Shop Header Section */}
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-2xl font-bold text-[#252B42]">
                        {currentCategory ? currentCategory.title : 'Shop'}
                    </h1>
                    <div className="flex items-center gap-2">
                        <Link to="/" className="text-sm text-[#252B42]">Home</Link>
                        <span className="text-sm text-[#BDBDBD]">{`>`}</span>
                        <Link to="/shop" className="text-sm text-[#252B42]">Shop</Link>
                        {currentCategory && (
                            <>
                                <span className="text-sm text-[#BDBDBD]">{`>`}</span>
                                <span className="text-sm text-[#BDBDBD]">
                                    {gender === 'k' ? 'Kadın' : 'Erkek'} / {currentCategory.title}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Product Category Cards */}
                <div className="flex justify-center">
                    <div className="flex gap-4 overflow-x-auto pb-4 max-w-[1088px]">
                        {categories.filter(cat => !gender || cat.gender === gender).map((category) => (
                            <Link 
                                key={category.id} 
                                to={`/shop/${category.gender}/${category.title.toLowerCase()}/${category.id}`}
                                className="relative w-[205px] h-[223px] flex-none"
                            >
                                <div className="absolute inset-0">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${category.img})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/25" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                        <h5 className="font-bold text-base mb-2">
                                            {category.title}
                                        </h5>
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-sm">{category.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter Row Section */}
            <div className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="relative w-[1050px] h-[98px] mx-auto py-6">
                        <div className="flex justify-between items-center w-[1049px] h-[50px]">
                            {/* Showing Results */}
                            <div className="flex items-center px-[1px] gap-[15px] w-[168px] h-6">
                                <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                    Showing all 12 results
                                </span>
                            </div>

                            {/* Views */}
                            <div className="flex items-center px-[1px] gap-[15px] w-[177px] h-[46px]">
                                <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                    Views:
                                </span>
                                <div className="flex items-center gap-[15px]">
                                    <button className="flex items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zm-8 8h6v6H1V9zm8 0h6v6H9V9z" fill="#252B42"/>
                                        </svg>
                                    </button>
                                    <button className="flex items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 4h16v2H0V4zm0 6h16v2H0v-2z" fill="#737373"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Filter */}
                            <div className="flex items-center px-[1px] gap-[15px] w-[252px] h-[50px]">
                                <div className="relative w-[141px] h-[50px]">
                                    <select className="w-full h-[50px] px-[18px] bg-[#F9F9F9] border border-[#DDDDDD] rounded-[5px] font-montserrat text-sm text-[#737373] appearance-none">
                                        <option>Popularity</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Latest</option>
                                    </select>
                                </div>
                                <button className="flex items-center justify-center px-5 py-[10px] w-[94px] h-[50px] bg-[#23A6F0] rounded-[5px]">
                                    <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-white">
                                        Filter
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Cards Section */}
            <div className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col items-center py-12 gap-12">
                        {/* Product Grid */}
                        <div className="w-[1124px] flex flex-col gap-12">
                            {/* First Row */}
                            <div className="flex gap-[30px]">
                                {products.slice(0, 4).map((product, index) => (
                                    <ShopProductCard key={index} {...product} />
                                ))}
                            </div>
                            {/* Second Row */}
                            <div className="flex gap-[30px]">
                                {products.slice(4, 8).map((product, index) => (
                                    <ShopProductCard key={index + 4} {...product} />
                                ))}
                            </div>
                            {/* Third Row */}
                            <div className="flex gap-[30px]">
                                {products.slice(8, 12).map((product, index) => (
                                    <ShopProductCard key={index + 8} {...product} />
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex h-[74px] bg-white border border-[#BDBDBD] rounded-[6.73px] shadow-sm">
                            <button className="flex justify-center items-center w-[83px] h-full bg-[#F3F3F3] border-r border-[#BDBDBD] font-montserrat font-bold text-sm text-[#BDBDBD]">
                                First
                            </button>
                            <button className="flex justify-center items-center w-[46px] h-full border-r border-[#E9E9E9] font-montserrat font-bold text-sm text-[#23A6F0]">
                                1
                            </button>
                            <button className="flex justify-center items-center w-[49px] h-full bg-[#23A6F0] border-r border-[#E9E9E9] font-montserrat font-bold text-sm text-white">
                                2
                            </button>
                            <button className="flex justify-center items-center w-[49px] h-full border-r border-[#E9E9E9] font-montserrat font-bold text-sm text-[#23A6F0]">
                                3
                            </button>
                            <button className="flex justify-center items-center w-[85px] h-full border-l border-[#E8E8E8] font-montserrat font-bold text-sm text-[#23A6F0]">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients Section */}
            <div className="w-full bg-[#FAFAFA]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="relative w-[1050px] h-[175px] mx-auto">
                        <div className="flex justify-center items-center py-[50px] gap-[30px] w-[1054px] h-[175px]">
                            {/* Brand Logos */}
                            <div className="flex items-center">
                            <img src="src/images/ShopLogos/hooli.png" alt="Hooli" className="h-8 w-auto" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/lyft.png" alt="Lyft" className="h-8 w-auto" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/gemi.png" alt="Leaf" className="h-8 w-auto" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/stripe.png" alt="Stripe" className="h-8 w-auto" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/aws.png" alt="AWS" className="h-8 w-auto" />
                            </div>
                            <div className="flex items-center">
                                <img src="src/images/ShopLogos/reddit.png" alt="Reddit" className="h-8 w-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPageDesktop;
