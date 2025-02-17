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
export const fetchProducts = () => async (dispatch, getState) => {
    const { limit, offset, filter } = getState().product;
    
    dispatch(setFetchState('FETCHING'));
    
    try {
        const response = await api.get('/products', {
            params: { limit, offset, filter }
        });
        
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState('FETCHED'));
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setFetchState('FAILED'));
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
