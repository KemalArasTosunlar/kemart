import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

// Create logger middleware with options
const logger = createLogger({
    collapsed: true, // Collapse log groups by default
    diff: true, // Show state changes
    duration: true, // Show action duration
    timestamp: false // Don't show timestamps
});

// Configure store with reducers and middleware
const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        shoppingCart: shoppingCartReducer
    },
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

// Export selectors
export const selectClient = (state) => state.client;
export const selectProduct = (state) => state.product;
export const selectShoppingCart = (state) => state.shoppingCart;
