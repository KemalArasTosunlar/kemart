import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const SignupForm = () => {
    const navigate = useNavigate();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            role_id: 'Customer'
        }
    });

    const selectedRole = watch('role_id');

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get('/api/v1/roles');
                setRoles(response.data.data); // Updated to access correct data structure
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch roles');
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    const handleApiError = (error) => {
        if (!error.response) {
            return 'Network error. Please check your connection.';
        }

        const { status, data } = error.response;

        switch (status) {
            case 400:
                if (data.errors) {
                    return Object.values(data.errors).join('\n');
                }
                return data.message || 'Invalid form data. Please check your inputs.';
            case 409:
                return 'This email is already registered. Please use a different email.';
            case 422:
                return 'Missing or invalid fields. Please check your inputs.';
            default:
                return 'An unexpected error occurred. Please try again later.';
        }
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setError(null);
        
        try {
            await api.post('/api/v1/auth/register', data); // Updated to correct endpoint
            navigate(-1, { 
                state: { 
                    warning: "You need to click the link in the email to activate your account!" 
                }
            });
        } catch (err) {
            const errorMessage = handleApiError(err);
            setError(errorMessage);
            setIsSubmitting(false);
        }
    };

    if (loading) return <div className="flex justify-center p-4">Loading...</div>;

    return (
        <div className="max-w-md mx-auto">
            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 whitespace-pre-line">
                                {error}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-lg shadow">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        {...register('name', { 
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name must be at least 3 characters'
                            }
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register('password', { 
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            },
                            validate: {
                                hasNumber: value => /\d/.test(value) || 'Password must contain at least one number',
                                hasLower: value => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
                                hasUpper: value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                                hasSpecial: value => /[^A-Za-z0-9]/.test(value) || 'Password must contain at least one special character'
                            }
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword', { 
                            required: 'Please confirm your password',
                            validate: value => value === watch('password') || 'Passwords do not match'
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        {...register('role_id', { required: 'Role is required' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.role_id && <p className="mt-1 text-sm text-red-600">{errors.role_id.message}</p>}
                </div>

                {selectedRole === 'Store' && (
                    <div className="space-y-6 border-t pt-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Store Name</label>
                            <input
                                type="text"
                                {...register('store.name', { 
                                    required: 'Store name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Store name must be at least 3 characters'
                                    }
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.store?.name && <p className="mt-1 text-sm text-red-600">{errors.store.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                            <input
                                type="tel"
                                {...register('store.phone', { 
                                    required: 'Store phone is required',
                                    pattern: {
                                        value: /^(\+90|0)?[0-9]{10}$/,
                                        message: 'Must be a valid Turkish phone number'
                                    }
                                })}
                                placeholder="+90XXXXXXXXXX"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.store?.phone && <p className="mt-1 text-sm text-red-600">{errors.store.phone.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tax Number</label>
                            <input
                                type="text"
                                {...register('store.tax_no', { 
                                    required: 'Tax number is required',
                                    pattern: {
                                        value: /^T[0-9]{4}V[0-9]{6}$/,
                                        message: 'Must match pattern TXXXXVXXXXXX'
                                    }
                                })}
                                placeholder="TXXXXVXXXXXX"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.store?.tax_no && <p className="mt-1 text-sm text-red-600">{errors.store.tax_no.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Bank Account (IBAN)</label>
                            <input
                                type="text"
                                {...register('store.bank_account', { 
                                    required: 'Bank account is required',
                                    pattern: {
                                        value: /^TR[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{2}$/,
                                        message: 'Must be a valid IBAN'
                                    }
                                })}
                                placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.store?.bank_account && <p className="mt-1 text-sm text-red-600">{errors.store.bank_account.message}</p>}
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                        ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing up...
                        </>
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </form>
        </div>
    );
};

export default SignupForm;