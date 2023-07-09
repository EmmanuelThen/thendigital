import React from 'react';
import AccountForm from './account-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../database.types'


type Props = {}

const page = async (props: Props) => {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return (
        <div>
            <AccountForm
                session={session}
            />
        </div>
    )
}

export default page