import { setRoles, setUser, loginStart, loginSuccess, loginFailure } from '../reducers/clientReducer';
import api from '../../api/api';

// Login thunk action
export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await api.post('/login', credentials);
        const { user, token } = response.data;
        
        // Save token to localStorage if remember me is checked
        if (credentials.rememberMe) {
            localStorage.setItem('token', token);
        }
        
        // Update axios default headers
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Update redux store with success
        dispatch(loginSuccess(user));
        
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
        throw new Error(errorMessage);
    }
};

// Thunk action creator for fetching roles
export const fetchRoles = () => async (dispatch, getState) => {
    const { roles } = getState().client;
    // Only fetch if roles are not already loaded
    if (roles.length === 0) {
        try {
            const response = await api.get('/roles');
            dispatch(setRoles(response.data));
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    }
};

// Action creators for client state
export const updateUser = (user) => (dispatch) => {
    dispatch(setUser(user));
};

export const updateTheme = (theme) => (dispatch) => {
    dispatch(setTheme(theme));
};

export const updateLanguage = (language) => (dispatch) => {
    dispatch(setLanguage(language));
};
