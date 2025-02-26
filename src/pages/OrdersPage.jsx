import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/actions/orderActions';
import { LoadingSpinner } from '../components/ui/loading-spinner';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner className="h-[400px]" />;
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 p-4 rounded text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <Card key={order.id}>
              <CardHeader>
                <CardTitle>Order #{order.id}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Shipping Address</h3>
                    <p>{order.address.street}</p>
                    <p>{order.address.city}, {order.address.zip}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Payment Method</h3>
                    <p>Card ending in {order.card.cardNumber.slice(-4)}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold">Products</h3>
                  <ul className="mt-2">
                    {order.products.map(product => (
                      <li key={product.product_id} className="flex justify-between py-2 border-b">
                        <div>
                          <p>{product.name}</p>
                          <p className="text-sm text-gray-500">{product.detail}</p>
                        </div>
                        <div>
                          <p>{product.count} x ${product.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <p className="font-semibold">Total: ${order.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
