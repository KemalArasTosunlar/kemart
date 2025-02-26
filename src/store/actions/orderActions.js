import orderService from '../../services/orderService';

export const setSelectedAddress = (address) => ({
  type: 'SET_SELECTED_ADDRESS',
  payload: address
});

export const setSelectedCard = (card) => ({
  type: 'SET_SELECTED_CARD',
  payload: card
});

export const setCartItems = (items) => ({
  type: 'SET_CART_ITEMS',
  payload: items
});

export const fetchOrders = () => async (dispatch) => {
  dispatch({ type: 'FETCH_ORDERS_REQUEST' });

  try {
    const response = await orderService.getOrders();
    dispatch({
      type: 'FETCH_ORDERS_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_ORDERS_FAILURE',
      payload: error.message
    });
    throw error;
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({ type: 'CREATE_ORDER_REQUEST' });

  try {
    const payload = {
      address_id: orderData.address.id,
      order_date: new Date().toISOString(),
      card_no: orderData.card.cardNumber,
      card_name: orderData.card.cardHolderName,
      card_expire_month: orderData.card.expiryMonth,
      card_expire_year: orderData.card.expiryYear,
      card_ccv: orderData.card.cvv,
      price: orderData.cart.reduce((total, item) => total + (item.product.price * item.count), 0),
      products: orderData.cart.map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.variant || ''
      }))
    };

    const response = await orderService.createOrder(payload);
    dispatch({
      type: 'CREATE_ORDER_SUCCESS',
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: 'CREATE_ORDER_FAILURE',
      payload: error.message
    });
    throw error;
  }
};
