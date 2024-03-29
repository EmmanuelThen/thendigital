
import React from 'react';
import Dashboard from './components/Dashboard';
import {
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


type Props = {}

const page = async (props: Props) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/signin` route.
    redirect('/signin')
  } 
  
  return (
    <div className='dark-light-mode'>
      <Dashboard />
    </div>
  )
}

export default page