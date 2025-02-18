import { setRoles, setUser, loginStart, loginSuccess, loginFailure, logout } from '../reducers/clientReducer';
import api from '../../api/api';

// Verify token thunk action
export const verifyToken = () => async (dispatch) => {
    // Check both localStorage and sessionStorage for token
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (!token) {
        dispatch(logout());
        return;
    }

    try {
        // Set token in axios header for verification request
        api.defaults.headers.common['Authorization'] = token;
        
        const response = await api.get('/verify');
        const { user } = response.data;
        
        // Update redux store with user data
        dispatch(loginSuccess(user));
        
        // Renew token in storage and axios header
        if (localStorage.getItem('token')) {
            localStorage.setItem('token', response.data.token);
        } else {
            sessionStorage.setItem('token', response.data.token);
        }
        api.defaults.headers.common['Authorization'] = response.data.token;
        
        return user;
    } catch (error) {
        console.error('Token verification failed:', error);
        // Clear token from both storages and axios header
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        dispatch(logout());
    }
};

// Login thunk action
export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const loginData = {
            email: credentials.email,
            password: credentials.password
        };
        
        // Add more detailed error handling and logging
        console.log('Attempting login with:', { email: credentials.email });
        
        const response = await api.post('/login', loginData);
        console.log('Login response:', response.data);
        
        // Ensure we have the required data
        if (!response.data || !response.data.token) {
            throw new Error('Invalid response from server');
        }
        
        const { user, token } = response.data;
        
        // Store token based on remember me preference
        if (credentials.rememberMe) {
            localStorage.setItem('token', token);
            sessionStorage.removeItem('token'); // Clear session storage if exists
        } else {
            sessionStorage.setItem('token', token);
            localStorage.removeItem('token'); // Clear local storage if exists
        }
        
        // Update axios default headers without Bearer prefix
        api.defaults.headers.common['Authorization'] = token;
        
        // Update redux store with success
        dispatch(loginSuccess(user));
        
        return response.data;
    } catch (error) {
        console.error('Login Error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        let errorMessage;
        
        if (!error.response) {
            errorMessage = 'Network error. Please check your connection.';
        } else if (error.response.status === 500) {
            errorMessage = 'Server error. Please try again later.';
        } else if (error.response.status === 401) {
            errorMessage = 'Invalid email or password.';
        } else {
            errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message || 
                          'Login failed. Please try again.';
        }
        
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
