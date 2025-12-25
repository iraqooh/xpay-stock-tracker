"use client"

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
        email: '',
        password: ''
    }, 
    mode: 'onBlur'
});

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log('Sign in', data)
    } catch (e) {
        console.error(e);
    }
  };
  
  return (
    <>
        <h1 className='form-title'>Welcome back</h1>
        <form className='space-y-5'>
            <InputField
                name="email"
                label="Email"
                placeholder="jsmith@example.com"
                register={register}
                error={errors.email}
                validation={{ 
                    required: 'Email is required', 
                    minLength: 2 ,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: 'Please enter a valid email address'
                }}
            />

            <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter a strong password"
                register={register}
                error={errors.password}
                validation={{ required: 'Password is required', minLength: 8 }}
            />

            <Button 
                type='submit' 
                disabled={isSubmitting} 
                className='lime-btn w-full mt-5'
            >
                {isSubmitting ? 'Signing you in' : 'Log In'}
            </Button>
            <FooterLink 
                text="Don't have an account?"
                linkText='Sign up here'
                href='/sign-up'
            />
        </form>
    </>
  )
}

export default SignIn