import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // [{count: 1, product: {...}}, {count: 3, product: {...}}]
    payment: {},
    address: {}
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(item => item.product.id === product.id);
            
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.cart.push({
                    count: 1,
                    checked: true,
                    product
                });
            }
        },
        updateItemCount: (state, action) => {
            const { productId, count } = action.payload;
            const item = state.cart.find(item => item.product.id === productId);
            if (item) {
                item.count = count;
            }
        },
        toggleItemCheck: (state, action) => {
            const productId = action.payload;
            const item = state.cart.find(item => item.product.id === productId);
            if (item) {
                item.checked = !item.checked;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.product.id !== productId);
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setPayment: (state, action) => {
            state.payment = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        }
    }
});

export const { 
    addToCart,
    updateItemCount,
    toggleItemCheck,
    removeFromCart,
    setCart,
    setPayment,
    setAddress 
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
