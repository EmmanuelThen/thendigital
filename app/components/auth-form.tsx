'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import ForgotPassword from '../signin/components/ForgotPassword'
import GoogleButton from './GoogleButton'
import DiscordButton from './DiscordButton'
import TwitterButton from './TwitterButton'

export default function Login() {
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [view, setView] = useState('sign-in')
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,

            },
        })
        setView('check-email')
    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setLoading(false);
        router.push('/dashboard');
        router.refresh();
    }

    const handleGoogleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        router.push('/dashboard');
        router.refresh();
    }

    const handleDiscordSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.signInWithOAuth({
            provider: 'discord'
        });
        router.push('/dashboard');
        router.refresh();
    }

    const handleTwitterSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.signInWithOAuth({
            provider: 'twitter'
        });
        router.push('/dashboard');
        router.refresh();
    }

    return (
        <div className="flex-1 flex flex-col w-full px-8 max-w-lg justify-center gap-2">
            {view === 'check-email' ? (
                <p className="text-center text-foreground">
                    Check <span className="font-bold">{email}</span> to continue signing
                    up
                </p>
            ) : (
                <form
                    id='shadow'
                    className="border border-1 px-20 py-12 rounded-lg shadow-lg flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
                    onSubmit={view === 'sign-in' ? handleSignIn : handleSignUp}
                >
                    <label className="text-md" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-slate4 border mb-6"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    {view === 'sign-up' ?
                        (
                            <>
                                <input
                                    className="rounded-md px-4 py-2 bg-slate4 border "
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                                    required
                                    placeholder="••••••••"
                                />
                                <div id='password-requirements' className='leading-snug text-[8px] md:text-[10px] text-blue9/60 ml-2 mb-6'>
                                    <p>At least 8 characters</p>
                                    <p>Mix of letters and numbers</p>
                                    <p>At least 1 special character</p>
                                    <p>At least 1 lowercase letter and 1 uppercase letter</p>
                                </div>
                                <label className="text-md" htmlFor="password">
                                    Re-enter Password
                                </label>
                                <input
                                    className="rounded-md px-4 py-2 bg-slate4 border mb-6"
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                                    required
                                    placeholder="••••••••"
                                />
                            </>

                        ) :
                        (
                            <input
                                className="rounded-md px-4 py-2 bg-slate4 border mb-6"
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="••••••••"
                                required
                            />

                        )}
                    {view === 'sign-in' && (
                        <>
                            <button
                                className="bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white hover:cursor-pointer"
                                disabled={!email || !password}
                            >
                                {loading ? 'Sign In' : <p className='scale-in-center'> Loading...</p>}
                            </button>
                            <div id='signup-terms' className=' flex justify-center mb-6'>
                                <div className='text-[10px] text-center '>
                                    <ForgotPassword />
                                </div>
                            </div>

                            <p className="text-sm text-center">
                                Don't have an account?
                                <button
                                    className="ml-1 hover:underline text-blue9 hover:opacity-80"
                                    onClick={() => setView('sign-up')}

                                >
                                    Sign up now
                                </button>
                            </p>
                            <div className='flex justify-center w-[300px] mt-10'>
                                <div className='flex items-center justify-center gap-8 w-full'>
                                    <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                                    <span className='text-xs  text-slate8'>Or</span>
                                    <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2' id='providers-buttons'>
                                <div>
                                    <GoogleButton />
                                </div>
                                <div>
                                    <DiscordButton />
                                </div>
                                <div>
                                    <TwitterButton />
                                </div>
                            </div>
                        </>
                    )}
                    {view === 'sign-up' && (
                        <>
                            <button
                                className="bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white mb-6 hover:cursor-pointer"
                                disabled={!email || !password}
                            >
                                Sign Up
                            </button>
                            <p className="text-sm text-center">
                                Already have an account?
                                <button
                                    className="ml-1 hover:underline text-blue9 hover:opacity-80"
                                    onClick={() => setView('sign-in')}
                                >
                                    Sign in now
                                </button>
                            </p>
                        </>
                    )}
                </form>
            )}
        </div>
    )
}
