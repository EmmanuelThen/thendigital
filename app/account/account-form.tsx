'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '../database.types'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import Checkedbox from '../components/Checkedbox'

export default function AccountForm({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    const user = session?.user

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

            let { error } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-5 justify-between border border-1 p-10 shadow-lg rounded-lg">
            <div className='flex justify-center'>
                <h1 className='text-xl text-blue9 font-semibold mb-5'>
                    Account Information
                </h1>
            </div>
            <div>
                <label className='text-blue9 mb-10' htmlFor="email">Email</label>
                <input className='w-full rounded-lg p-2 border border-1 bg-slate4' id="email" type="text" value={session?.user.email} disabled />
            </div>
            <div>
                <label className='text-blue9 mb-10' htmlFor="fullName">Full Name</label>
                <input
                    className='w-full rounded-lg p-2 border border-1 bg-slate4'
                    id="fullName"
                    type="text"
                    value={fullname || ''}
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>
            <div>
                <label className='text-blue9 mb-10' htmlFor="username">Username</label>
                <input
                    className='w-full rounded-lg p-2 border border-1 bg-slate4'
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label className='text-blue9 mb-10' htmlFor="website">Website</label>
                <input
                    className='w-full rounded-lg p-2 border border-1 bg-slate4'
                    id="website"
                    type="url"
                    value={website || ''}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>
            <div>
                <Checkedbox
                    label='I have a website'
                />
            </div>

            <div>
                <button
                    className='bg-blue9 hover:bg-[#3fcf8e] hover w-full p-2 mt-10 rounded-md text-white'
                    onClick={() => updateProfile({ fullname, username, website, avatar_url })}
                    disabled={loading}
                >
                    <Link href='/dashboard'>
                        {loading ? 'Loading ...' : 'Update'}
                    </Link>
                </button>
            </div>

            {/*<div>
                <form action="/auth/signout" method="post">
                    <button className="button block" type="submit">
                        Sign out
                    </button>
                </form>
    </div>*/}
        </div>
    )
}