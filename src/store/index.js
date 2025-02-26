import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import { addressReducer } from './reducers/addressReducer';
import authReducer from './reducers/authReducer';
import { cardReducer } from './reducers/cardReducer';
import orderReducer from './reducers/orderReducer';

// Create logger middleware with options
const logger = createLogger({
    collapsed: true, // Collapse log groups by default
    diff: true, // Show state changes
    duration: true, // Show action duration
    timestamp: false // Don't show timestamps
});

// Combine reducers into a rootReducer
const rootReducer = {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    address: addressReducer,
    auth: authReducer,
    card: cardReducer,
    order: orderReducer
};

// Configure store with rootReducer and middleware
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(thunk)
            .concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

// Export store instance
export default store;

// Export action creators
export * from './actions/clientActions';
export * from './actions/productActions';
export * from './actions/shoppingCartActions';
export * from './actions/cardActions';

// Export selectors
export const selectClient = (state) => state.client;
export const selectProduct = (state) => state.product;
export const selectShoppingCart = (state) => state.shoppingCart;
export const selectAddress = (state) => state.address;
export const selectAuth = (state) => state.auth;
export const selectCard = (state) => state.card;
