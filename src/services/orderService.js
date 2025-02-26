import api from '../api/api';



const createOrder = async (orderData) => {
  try {
    const response = await api.post('/order', orderData);


    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export default {
  createOrder
};
