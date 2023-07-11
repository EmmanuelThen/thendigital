import React from 'react';
import AccountForm from './account-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../database.types'
import Navbar from '../components/Navbar';


type Props = {}

const page = async (props: Props) => {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center h-screen items-center'>
                <AccountForm
                    session={session}
                />
            </div>
        </>
    )
}

export default page