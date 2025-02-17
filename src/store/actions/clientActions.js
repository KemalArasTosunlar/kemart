import { setRoles } from '../reducers/clientReducer';
import api from '../../api/api';

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
