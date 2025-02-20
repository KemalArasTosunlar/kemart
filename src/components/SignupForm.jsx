import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import api from '../api/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { cn } from '../lib/utils';

const SignupForm = () => {
    const navigate = useNavigate();
    const [roles] = useState([
        { id: 'Customer', name: 'Müşteri' },
        { id: 'Store', name: 'Mağaza' },
        { id: 'Admin', name: 'Yönetici' }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
        defaultValues: {
            role_id: 'Customer'
        }
    });

    const selectedRole = watch('role_id');

    const handleApiError = (error) => {
        console.error('API Error:', error);
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
        
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id
        };

        if (data.role_id === 'Store') {
            formData.store = {
                name: data.store.name,
                phone: data.store.phone,
                tax_no: data.store.tax_no,
                bank_account: data.store.bank_account,
                address: data.store.address,
                city: data.store.city,
                district: data.store.district,
                postal_code: data.store.postal_code
            };
        }
        
        try {
            await api.post('/signup', formData);
            toast.success("Sign up successful! Please check your email to verify your account.");
            navigate(-1);
        } catch (err) {
            const errorMessage = handleApiError(err);
            setError(errorMessage);
            setIsSubmitting(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="mt-6 text-center text-3xl font-bold">
                    Create your account
                </h2>
                {error && (
                    <div className="mt-8 bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                        <div className="flex">
                            <p className="text-sm text-destructive whitespace-pre-line">
                                {error}
                            </p>
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-card p-8 shadow-sm rounded-lg">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            {...register('name', { 
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters'
                                }
                            })}
                            className={cn(
                                errors.name && "border-destructive"
                            )}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email', { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                            className={cn(
                                errors.email && "border-destructive"
                            )}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
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
                            className={cn(
                                errors.password && "border-destructive"
                            )}
                        />
                        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword', { 
                                required: 'Please confirm your password',
                                validate: value => value === watch('password') || 'Passwords do not match'
                            })}
                            className={cn(
                                errors.confirmPassword && "border-destructive"
                            )}
                        />
                        {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select 
                            value={selectedRole}
                            onValueChange={(value) => setValue('role_id', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue>
                                    {roles.find(role => role.id === selectedRole)?.name || "Select a role"}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {roles.map((role) => (
                                    <SelectItem key={role.id} value={role.id}>
                                        {role.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.role_id && <p className="text-sm text-destructive">{errors.role_id.message}</p>}
                    </div>

                    {selectedRole === 'Store' && (
                        <div className="space-y-6 border-t pt-6">
                            <div className="space-y-2">
                                <Label htmlFor="store.name">Store Name</Label>
                                <Input
                                    id="store.name"
                                    type="text"
                                    {...register('store.name', { 
                                        required: 'Store name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Store name must be at least 3 characters'
                                        }
                                    })}
                                    className={cn(
                                        errors.store?.name && "border-destructive"
                                    )}
                                />
                                {errors.store?.name && <p className="text-sm text-destructive">{errors.store.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="store.phone">Store Phone</Label>
                                <Input
                                    id="store.phone"
                                    type="tel"
                                    placeholder="+90XXXXXXXXXX"
                                    {...register('store.phone', { 
                                        required: 'Store phone is required',
                                        pattern: {
                                            value: /^(\+90|0)?[0-9]{10}$/,
                                            message: 'Must be a valid Turkish phone number'
                                        }
                                    })}
                                    className={cn(
                                        errors.store?.phone && "border-destructive"
                                    )}
                                />
                                {errors.store?.phone && <p className="text-sm text-destructive">{errors.store.phone.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="store.tax_no">Tax Number</Label>
                                <Input
                                    id="store.tax_no"
                                    placeholder="TXXXXVXXXXXX"
                                    {...register('store.tax_no', { 
                                        required: 'Tax number is required',
                                        pattern: {
                                            value: /^T[0-9]{4}V[0-9]{6}$/,
                                            message: 'Must match pattern TXXXXVXXXXXX'
                                        }
                                    })}
                                    className={cn(
                                        errors.store?.tax_no && "border-destructive"
                                    )}
                                />
                                {errors.store?.tax_no && <p className="text-sm text-destructive">{errors.store.tax_no.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="store.bank_account">Bank Account (IBAN)</Label>
                                <Input
                                    id="store.bank_account"
                                    placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
                                    {...register('store.bank_account', { 
                                        required: 'Bank account is required',
                                        pattern: {
                                            value: /^TR[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{2}$/,
                                            message: 'Must be a valid IBAN'
                                        }
                                    })}
                                    className={cn(
                                        errors.store?.bank_account && "border-destructive"
                                    )}
                                />
                                {errors.store?.bank_account && <p className="text-sm text-destructive">{errors.store.bank_account.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="store.address">Address</Label>
                                <Input
                                    id="store.address"
                                    type="text"
                                    {...register('store.address', { 
                                        required: 'Store address is required'
                                    })}
                                    className={cn(
                                        errors.store?.address && "border-destructive"
                                    )}
                                />
                                {errors.store?.address && <p className="text-sm text-destructive">{errors.store.address.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="store.city">City</Label>
                                    <Input
                                        id="store.city"
                                        type="text"
                                        {...register('store.city', { 
                                            required: 'City is required'
                                        })}
                                        className={cn(
                                            errors.store?.city && "border-destructive"
                                        )}
                                    />
                                    {errors.store?.city && <p className="text-sm text-destructive">{errors.store.city.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="store.district">District</Label>
                                    <Input
                                        id="store.district"
                                        type="text"
                                        {...register('store.district', { 
                                            required: 'District is required'
                                        })}
                                        className={cn(
                                            errors.store?.district && "border-destructive"
                                        )}
                                    />
                                    {errors.store?.district && <p className="text-sm text-destructive">{errors.store.district.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="store.postal_code">Postal Code</Label>
                                <Input
                                    id="store.postal_code"
                                    type="text"
                                    {...register('store.postal_code', { 
                                        required: 'Postal code is required',
                                        pattern: {
                                            value: /^[0-9]{5}$/,
                                            message: 'Must be a valid postal code (5 digits)'
                                        }
                                    })}
                                    className={cn(
                                        errors.store?.postal_code && "border-destructive"
                                    )}
                                />
                                {errors.store?.postal_code && <p className="text-sm text-destructive">{errors.store.postal_code.message}</p>}
                            </div>
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing up...
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
