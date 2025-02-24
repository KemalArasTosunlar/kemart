import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from '../components/ui/table'
import { Checkbox } from '../components/ui/checkbox'
import { updateCartItem, removeFromCart } from '../store/actions/shoppingCartActions'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart)
  const dispatch = useDispatch()

  const handleQuantityChange = (productId, currentCount, change) => {
    const newCount = currentCount + change;
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  const handleCheckChange = (id, checked) => {
    dispatch(updateCartItem(id, { checked }))
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const calculateTotal = () => {
    return cart
      .filter(item => item.checked)
      .reduce((total, item) => total + (item.product.price * item.count), 0)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="flex gap-8">
        <div className="flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Select</TableHead>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="w-[150px]">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.product.id}>
                  <TableCell>
                    <Checkbox
                      checked={item.checked}
                      onCheckedChange={(checked) => handleCheckChange(item.product.id, checked)}
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.product.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.product.id, item.count, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.count}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.product.id, item.count, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.product.price * item.count).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleRemove(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} className="text-right font-medium">
                  Total (Selected Items):
                </TableCell>
                <TableCell className="text-right font-bold">
                  ${calculateTotal().toFixed(2)}
                </TableCell>
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="flex-shrink-0">
          <OrderSummary cart={cart} />
        </div>
      </div>

      {cart.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          Your shopping cart is empty
        </div>
      )}
    </div>
  )
}
