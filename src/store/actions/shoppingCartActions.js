import {
    addToCart as addToCartAction,
    updateItemCount,
    toggleItemCheck,
    removeFromCart as removeFromCartAction,
    setCart,
    setPayment,
    setAddress
} from '../reducers/shoppingCartReducer';

// Action creators for shopping cart state
export const addToCart = (product) => (dispatch) => {
    dispatch(addToCartAction(product));
};

export const removeFromCart = (productId) => (dispatch) => {
    dispatch(removeFromCartAction(productId));
};

export const updateCartItemCount = (productId, count) => (dispatch) => {
    if (count <= 0) {
        dispatch(removeFromCartAction(productId));
    } else {
        dispatch(updateItemCount({ productId, count }));
    }
};

export const toggleCartItemCheck = (productId) => (dispatch) => {
    dispatch(toggleItemCheck(productId));
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
