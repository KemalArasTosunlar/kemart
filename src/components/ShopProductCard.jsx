import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { Button } from "../components/ui/button";
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader 
} from "../components/ui/card";
import { addToCart } from '../store/actions/shoppingCartActions';

const ShopProductCard = ({ image, name, description, oldPrice, newPrice, category, id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        const nameSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        navigate(`/shop/${category.gender}/${category.name}/${category.id}/${nameSlug}/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent card click when adding to cart
        dispatch(addToCart({
            id,
            name,
            price: newPrice,
            image,
            description
        }));
    };

    const colorOptions = [
        { color: '#23A6F0' }, // primary-color
        { color: '#23856D' }, // secondary-color-1
        { color: '#E77C40' }, // alert-color
        { color: '#23856D' }  // secondary-color-1
    ];

    return (
        <Card 
            className="w-[239px] h-[488px] bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300 border-none relative group"
            onClick={handleClick}
        >
            {/* Product Image */}
            <CardHeader className="p-0">
                <div className="relative w-[239px] h-[300px]">
                    <img 
                        src={image} 
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Add to Cart Button - Appears on Hover */}
                    <Button
                        variant="secondary"
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white text-black hover:bg-gray-100"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </Button>
                </div>
            </CardHeader>

            {/* Product Info */}
            <CardContent className="flex flex-col items-center px-[25px] py-[25px] gap-[10px]">
                {/* Title */}
                <h5 className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#252B42]">
                    {name}
                </h5>

                {/* Description */}
                <span className="font-montserrat font-bold text-sm leading-6 text-center tracking-[0.2px] text-[#737373] line-clamp-2">
                    {description}
                </span>

                {/* Prices */}
                <div className="flex items-start px-[3px] py-[5px] gap-[5px]">
                    <span className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#BDBDBD]">
                        ${oldPrice ? Number(oldPrice).toFixed(2) : "0.00"}
                    </span>
                    <span className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#23856D]">
                        ${typeof newPrice === 'number' ? newPrice.toFixed(2) : "0.00"}
                    </span>
                </div>
            </CardContent>

            {/* Color Options */}
            <CardFooter className="flex justify-center pt-0 pb-[35px]">
                <div className="flex items-center gap-[6px]">
                    {colorOptions.map((option, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className="w-4 h-4 rounded-full p-0 hover:bg-transparent"
                            style={{ backgroundColor: option.color }}
                            onClick={(e) => e.stopPropagation()} // Prevent card click when selecting color
                        />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ShopProductCard;
