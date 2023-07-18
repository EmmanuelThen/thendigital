'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

type Props = {
    
}

const page = ({  }: Props) => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const supabase = createClientComponentClient();

    const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.updateUser({ password: `${password}` })

    }

    return (
        <form
            className='flex-1 flex flex-col w-full px-8 max-w-lg justify-center gap-2'
            onSubmit={handleUpdatePassword}
        >
            <label className="text-md" htmlFor="password">
                Enter new password
            </label>
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
                Re-enter new password
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
            <button
                className="bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white hover:cursor-pointer shadow-blackA9 shadow-[0_4px_7px]"
                disabled={!password}
            >
                {loading ? 'Update password' : <p className='scale-in-center'> Loading...</p>}
            </button>
        </form>
    )
}

export default page