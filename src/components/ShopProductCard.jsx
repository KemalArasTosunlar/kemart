import React from 'react';

const ShopProductCard = ({ image, title, category, oldPrice, newPrice }) => {
    const colorOptions = [
        { color: '#23A6F0' }, // primary-color
        { color: '#23856D' }, // secondary-color-1
        { color: '#E77C40' }, // alert-color
        { color: '#23856D' }  // secondary-color-1
    ];

    return (
        <div className="flex flex-col w-[239px] h-[488px] bg-white">
            {/* Product Image */}
            <div className="relative w-[239px] h-[300px]">
                <img 
                    src={image} 
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col items-center px-[25px] py-[25px] pb-[35px] gap-[10px]">
                {/* Title */}
                <h5 className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#252B42]">
                    {title}
                </h5>

                {/* Category */}
                <span className="font-montserrat font-bold text-sm leading-6 text-center tracking-[0.2px] text-[#737373]">
                    {category}
                </span>

                {/* Prices */}
                <div className="flex items-start px-[3px] py-[5px] gap-[5px]">
                    <span className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#BDBDBD]">
                        ${oldPrice}
                    </span>
                    <span className="font-montserrat font-bold text-base leading-6 text-center tracking-[0.1px] text-[#23856D]">
                        ${newPrice}
                    </span>
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-[6px]">
                    {colorOptions.map((option, index) => (
                        <div
                            key={index}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: option.color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopProductCard;
