import {
    setCategories,
    setProductList,
    setTotal,
    setFetchState,
    setLimit,
    setOffset,
    setFilter
} from '../reducers/productReducer';
import api from '../../api/api';

// Thunk action creator for fetching products
export const fetchProducts = () => async (dispatch) => {
    dispatch(setFetchState('FETCHING')); // Set loading state to FETCHING

    try {
        const response = await api.get('/products'); // Fetch products from the API
        const { total, products } = response.data; // Destructure total and products from the response
        dispatch(setProductList(products)); // Dispatch action to set products
        dispatch(setTotal(total)); // Dispatch action to set total
        dispatch(setFetchState('FETCHED')); // Set loading state to FETCHED
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setFetchState('FAILED')); // Set loading state to FAILED
    }
};

// Thunk action creator for fetching categories
export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await api.get('/categories');
        dispatch(setCategories(response.data));
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

// Action creators for product state
export const updateLimit = (limit) => (dispatch) => {
    dispatch(setLimit(limit));
};

export const updateOffset = (offset) => (dispatch) => {
    dispatch(setOffset(offset));
};

export const updateFilter = (filter) => (dispatch) => {
    dispatch(setFilter(filter));
};