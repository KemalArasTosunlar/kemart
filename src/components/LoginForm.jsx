import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../store/actions/clientActions';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError('');
    try {
        console.log('Submitting login form with email:', data.email);
        const response = await dispatch(loginUser({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe
        }));
      
        if (response?.token) {
          const from = location.state?.from?.pathname || '/';
          navigate(from);
          toast.success('Successfully logged in!');
        } else {
          setApiError('Invalid response from server');
          toast.error('Login failed. Please try again.');
        }
    } catch (error) {
      console.error('Login submission error:', error);
      setApiError(error.message || 'Login failed. Please try again.');
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {apiError && (
          <div className="rounded-md bg-destructive/10 border-l-4 border-destructive p-4">
            <div className="flex">
              <p className="text-sm text-destructive">
                {apiError}
              </p>
            </div>
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                  },
                  validate: {
                      isEmail: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || 'Please enter a valid email address'
                  }
                })}
                className={cn(
                  errors.email && "border-destructive"
                )}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
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
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                {...register('rememberMe')}
                className="h-4 w-4 text-primary focus:ring-primary border-input rounded"
              />
              <Label htmlFor="remember-me" className="ml-2">
                Remember me
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;