'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types';
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useState, useRef } from 'react';


export default async function AuthForm() {
    const [captchaToken, setCaptchaToken] = useState()
    const captcha = useRef()

    const supabase = createClientComponentClient<Database>()

    /*const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
        options: { captchaToken },
    })*/




    return (
        <div className='p-5 md:p-0'>
            <div className='border border-1 rounded-lg shadow-lg  px-20 py-10'>
                <Auth
                    supabaseClient={supabase}
                    view='sign_in'
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: '#3B82F6',
                                    brandAccent: 'hsl(154 54.8% 45.1%)',
                                    brandButtonText: 'white',
                                    inputBackground: 'hsl(209 12.2% 93.2%)',


                                    // ..
                                },
                            },
                        }
                    }}
                    theme="default"
                    showLinks={true}
                    localization={{
                        variables: {
                            "sign_up": {
                                "email_label": "Email",
                                "password_label": "Create a Password",
                                "email_input_placeholder": "Enter email address",
                                "password_input_placeholder": "Enter password",
                                "button_label": "Sign up",
                                "loading_button_label": "Signing up ...",
                                "social_provider_text": "Sign in with {{provider}}",
                                "link_text": "Don't have an account? Sign up",
                                "confirmation_text": "Check your email for the confirmation link"
                            },
                            "sign_in": {
                                "email_label": "Email",
                                "password_label": "Password",
                                "email_input_placeholder": "Enter email address",
                                "password_input_placeholder": "Enter password",
                                "button_label": "Sign in",
                                "loading_button_label": "Signing in ...",
                                "social_provider_text": "Sign in with {{provider}}",
                                "link_text": "Already have an account? Sign in"
                            },
                            "magic_link": {
                                "email_input_label": "Email",
                                "email_input_placeholder": "Enter email address",
                                "button_label": "Send Magic Link",
                                "loading_button_label": "Sending Magic Link ...",
                                "link_text": "Send a magic link email",
                                "confirmation_text": "Check your email for the magic link"
                            },
                            "forgotten_password": {
                                "email_label": "Email",
                                "password_label": "Password",
                                "email_input_placeholder": "Enter email address",
                                "button_label": "Send reset password instructions",
                                "loading_button_label": "Sending reset instructions ...",
                                "link_text": "Forgot your password?",
                                "confirmation_text": "Check your email for the password reset link"
                            },
                            "update_password": {
                                "password_label": "New password",
                                "password_input_placeholder": "Your new password",
                                "button_label": "Update password",
                                "loading_button_label": "Updating password ...",
                                "confirmation_text": "Your password has been updated"
                            },
                            "verify_otp": {
                                "email_input_label": "Email address",
                                "email_input_placeholder": "Your email address",
                                "phone_input_label": "Phone number",
                                "phone_input_placeholder": "Your phone number",
                                "token_input_label": "Token",
                                "token_input_placeholder": "Your Otp token",
                                "button_label": "Verify token",
                                "loading_button_label": "Signing in ..."
                            }
                        }
                    }}
                    providers={['google', 'discord', 'github']}
                    redirectTo="http://localhost:3000/auth/callback"
                    socialLayout='horizontal'
                />
                <HCaptcha
                    sitekey='8fdc8164-b169-485e-8ed8-c9a8665bca0a'
                    ref={captcha}
                    onVerify={(token) => {
                        setCaptchaToken(token)
                    }}
                />

            </div>
        </div>
    )
}