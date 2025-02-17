import {
    setCart,
    setPayment,
    setAddress
} from '../reducers/shoppingCartReducer';

// Action creators for shopping cart state
export const updateCart = (cart) => (dispatch) => {
    dispatch(setCart(cart));
};

export const addToCart = (product, count = 1) => (dispatch, getState) => {
    const currentCart = [...getState().shoppingCart.cart];
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
        existingItem.count += count;
    } else {
        currentCart.push({ count, product });
    }

    dispatch(setCart(currentCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    const currentCart = getState().shoppingCart.cart;
    const updatedCart = currentCart.filter(item => item.product.id !== productId);
    dispatch(setCart(updatedCart));
};

export const updateCartItemCount = (productId, count) => (dispatch, getState) => {
    const currentCart = [...getState().shoppingCart.cart];
    const item = currentCart.find(item => item.product.id === productId);
    
    if (item) {
        item.count = count;
        if (count <= 0) {
            dispatch(removeFromCart(productId));
        } else {
            dispatch(setCart(currentCart));
        }
    }
};

export const updatePayment = (payment) => (dispatch) => {
    dispatch(setPayment(payment));
};

export const updateAddress = (address) => (dispatch) => {
    dispatch(setAddress(address));
};

export const clearCart = () => (dispatch) => {
    dispatch(setCart([]));
    dispatch(setPayment({}));
    dispatch(setAddress({}));
};
