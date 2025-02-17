import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25, // default product count on the page
    offset: 0, // default for pagination
    filter: '',
    fetchState: 'NOT_FETCHED' // one of "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProductList: (state, action) => {
            state.productList = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setFetchState: (state, action) => {
            state.fetchState = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {
    setCategories,
    setProductList,
    setTotal,
    setFetchState,
    setLimit,
    setOffset,
    setFilter
} = productSlice.actions;

export default productSlice.reducer;
