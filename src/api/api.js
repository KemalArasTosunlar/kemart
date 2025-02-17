import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 10000, // increase timeout to 10 seconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: false
});

// Add a request interceptor for handling requests
api.interceptors.request.use(
    (config) => {
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
        console.error('Response Error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
            config: error.config
        });
        return Promise.reject(error);
    }
);

export default api;
