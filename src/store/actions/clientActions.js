import { setRoles, setUser, loginStart, loginSuccess, loginFailure } from '../reducers/clientReducer';
import api from '../../api/api';

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
        
        // Handle remember me locally
        if (credentials.rememberMe) {
            localStorage.setItem('token', token);
        }
        
        // Update axios default headers
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
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
