'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

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
        setLoading(true)
        e.preventDefault()
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        setLoading(false)
        router.push('/dashboard')
        router.refresh()
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
                    className="border border-1 p-20 flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
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
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-slate4 border mb-6"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="••••••••"
                    />
                    {view === 'sign-in' && (
                        <>
                            <button
                                className="bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white mb-6"
                                disabled={!email || !password}
                            >
                                {loading ? 'Sign In' : 'Loading...'}
                            </button>
                            <p className="text-sm text-center">
                                Don't have an account?
                                <button
                                    className="ml-1 hover:underline text-blue9 hover:opacity-80"
                                    onClick={() => setView('sign-up')}

                                >
                                    Sign up now
                                </button>
                            </p>
                        </>
                    )}
                    {view === 'sign-up' && (
                        <>
                            <button
                                className="bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white mb-6"
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
