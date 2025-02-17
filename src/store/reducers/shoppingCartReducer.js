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

export const { setCart, setPayment, setAddress } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
