import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: false  // Changed to false since server doesn't support credentials with wildcard origin
});

// Add a request interceptor for handling requests
api.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = token;
        }
        
        // Log the request details
        console.log('Request:', {
            url: config.url,
            method: config.method,
            data: config.data,
            headers: config.headers
        });
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor for handling responses
api.interceptors.response.use(
    (response) => {
        console.log('Response:', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });
        return response;
    },
    (error) => {
        // Enhanced error logging
        const errorResponse = {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
            config: {
                url: error.config?.url,
                method: error.config?.method,
                data: error.config?.data
            }
        };
        console.error('Response Error:', errorResponse);

        // If the error is a network error, provide a more user-friendly message
        if (!error.response) {
            error.message = 'Network error occurred. Please check your connection.';
        }
        // If it's a 500 error, provide a more specific message
        else if (error.response.status === 500) {
            error.message = 'Server error occurred. Please try again later.';
        }

        return Promise.reject(error);
    }
);

export { api };
export default api;
