import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts, updateOffset } from '../store/actions/productActions';
import ShopProductCard from '../components/ShopProductCard';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const ShopPageDesktop = () => {
    const dispatch = useDispatch();
    const { gender, categoryName, categoryId } = useParams();
    const categories = useSelector(state => state.product.categories);
    const { productList: products, total, fetchState, limit } = useSelector(state => state.product);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts({ category: categoryId, sort, filter }));
    }, [dispatch, categoryId, sort, filter, currentPage]);

    const currentCategory = categoryId ? categories.find(cat => cat.id === parseInt(categoryId)) : null;
    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (page) => {
        const newOffset = (page - 1) * limit;
        setCurrentPage(page);
        dispatch(updateOffset(newOffset));
        dispatch(fetchProducts({ category: categoryId, sort, filter }));
    };

    const handleSortChange = (value) => {
        setSort(value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const generatePagination = (currentPage, totalPages) => {
        let pages = [];
        
        // Always show first page
        pages.push(1);
        
        if (currentPage > 3) {
            pages.push('ellipsis');
        }
        
        // Add pages around current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        
        if (currentPage < totalPages - 2) {
            pages.push('ellipsis');
        }
        
        // Always show last page
        if (totalPages > 1) {
            pages.push(totalPages);
        }
        
        return pages;
    };

    if (fetchState === 'FETCHING') {
        return <div>Loading...</div>;
    }

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
                                    Showing {((currentPage - 1) * limit) + 1}-{Math.min(currentPage * limit, total)} of {total} results
                                </span>
                            </div>

                            {/* Views */}
                            <div className="flex items-center px-[1px] gap-[15px] w-[177px] h-[46px]">
                                <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                                    Views:
                                </span>
                                <div className="flex items-center gap-[15px]">
                                    <Button 
                                        variant="outline"
                                        className="flex items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px]"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zm-8 8h6v6H1V9zm8 0h6v6H9V9z" fill="#252B42"/>
                                        </svg>
                                    </Button>
                                    <Button 
                                        variant="outline"
                                        className="flex items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px]"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 4h16v2H0V4zm0 6h16v2H0v-2z" fill="#737373"/>
                                        </svg>
                                    </Button>
                                </div>
                            </div>

                            {/* Filter and Sort Section */}
                            <div className="flex items-center space-x-4">
                                {/* Sort Dropdown */}
                                <Select value={sort} onValueChange={handleSortChange}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Sort By" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price:asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price:desc">Price: High to Low</SelectItem>
                                        <SelectItem value="rating:asc">Rating: Low to High</SelectItem>
                                        <SelectItem value="rating:desc">Rating: High to Low</SelectItem>
                                    </SelectContent>
                                </Select>

                                {/* Search Input and Filter Button */}
                                <div className="flex">
                                    <div className="relative">
                                        <Input 
                                            type="text" 
                                            placeholder="Search products..." 
                                            className="w-[300px] pl-10"
                                            value={filter}
                                            onChange={handleFilterChange}
                                        />
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <Button 
                                        onClick={() => dispatch(fetchProducts({ category: categoryId, sort, filter }))}
                                        className="bg-[#23A6F0] hover:bg-[#1a7ab0] text-white"
                                    >
                                        Filter
                                    </Button>
                                </div>
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
                        <div className="w-[1124px] grid grid-cols-4 gap-8">
                            {products.map((product) => (
                                <ShopProductCard
                                    key={product.id}
                                    id={product.id}
                                    image={product.images[0].url}
                                    name={product.name}
                                    description={product.description}
                                    oldPrice={product.price * 1.2}
                                    newPrice={product.price}
                                    category={{
                                        id: product.category_id,
                                        name: categoryName,
                                        gender: gender
                                    }}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious 
                                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                                    />
                                </PaginationItem>
                                
                                {generatePagination(currentPage, totalPages).map((page, i) => (
                                    <PaginationItem key={i}>
                                        {page === 'ellipsis' ? (
                                            <PaginationEllipsis />
                                        ) : (
                                            <PaginationLink
                                                isActive={page === currentPage}
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </PaginationLink>
                                        )}
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext 
                                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
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