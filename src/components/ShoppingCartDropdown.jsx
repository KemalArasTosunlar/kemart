import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { updateCartItem, removeFromCart } from '../store/actions/shoppingCartActions';

const ShoppingCartDropdown = ({ cart }) => {
  const dispatch = useDispatch();
  const cartItemsCount = cart.reduce((total, item) => total + item.count, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.count), 0);

  const handleQuantityChange = (productId, currentCount, change) => {
    const newCount = currentCount + change;
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  return (
    <div className="w-80 p-0">
      <div className="p-4">
        <div className="text-sm font-medium">Shopping Cart</div>
        <div className="text-xs text-muted-foreground">
          {cartItemsCount} items
        </div>
      </div>
      <Separator />
      <div className="max-h-80 overflow-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Your cart is empty
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {item.product.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ${item.product.price}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleQuantityChange(item.product.id, item.count, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm">{item.count}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleQuantityChange(item.product.id, item.count, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 ml-auto"
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <>
          <Separator />
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Total</span>
              <span className="text-sm font-medium">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <Button className="w-full" asChild>
              <Link to="/cart">View Cart</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;
