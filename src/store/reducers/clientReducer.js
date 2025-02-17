import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: 'light',
    language: 'en',
    isAuthenticated: false,
    loading: false,
    error: null
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem('token');
        }
    }
});

export const { 
    setUser, 
    setRoles, 
    setTheme, 
    setLanguage,
    loginStart,
    loginSuccess,
    loginFailure,
    logout
} = clientSlice.actions;
export default clientSlice.reducer;

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
