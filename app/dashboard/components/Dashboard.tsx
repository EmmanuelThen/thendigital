'use client'
import React, { useState } from 'react'
import DashNavbar from './DashNavbar'
import DashGridSection from './DashGridSection'
import DashAvatar from './DashAvatar'
import Toggle from '@/app/components/Toggle'
import DialogButton from '@/app/components/DialogButton'
import InboxSection from './InboxSection'
import EliteInboxSection from './EliteInboxSection'
import AccountSection from './AccountSection'
import MobileFullDashboard from './MobileFullDashboard'
import InsightsSection from './InsightsSection'
import EditTabs from '@/app/components/EditTabs'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import AccountForm from '@/app/account/account-form'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../database.types'


type Props = {}

const Dashboard = (props: Props) => {
    const [value, setValue] = useState('dashboard');

    const handleDashboardClick = () => {
        setValue('dashboard');
    }
    const handleInboxClick = () => {
        setValue('inbox');
    }
    const handleInsightsClick = () => {
        setValue('insights');
    }
    const handleAccountClick = () => {
        setValue('account')
    }

    return (
        <div className='flex w-full max-h-screen overflow-y-auto' id='full-dash'>
            <div className='flex lg:h-screen'>
                <div className='lg:w-1/5'>
                    <div className='hidden lg:flex lg:flex-col items-center justify-between border-r-[1px] p-10 w-fit  h-screen'>
                        <div id='loginLogo' className='hidden lg:block'>
                            <span className='font-semibold text-blue9'>Then</span>
                            <span className='font-semibold text-red9'>Pixels</span>
                        </div>
                        <div id='loginName' className='hidden lg:flex lg:flex-col items-center font-semibold text-sm'>
                            <div id='loginAvatar' className='mb-5'>
                                <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
                            </div>
                            <p className='hidden lg:block'>client.name</p>
                            <div className='hidden lg:flex justify-center mt-3'>
                                <div className='px-1 rounded-md w-fit text-[9px]'>
                                    <DialogButton
                                        buttonText='Edit'
                                        dialogTitle='Edit Profile'
                                        dialogDesc='Make changes to your profile here. Click save when youre done.'
                                        content={<AccountForm  />}
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonDisplay=''
                                        myOwnButton=''
                                        myOwnButtonDisplay=''

                                    />
                                </div>
                            </div>
                        </div>

                        <div id='loginTabs' className='hidden lg:flex flex-col gap-8 '>

                            <button
                                value={value}
                                className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md'
                                onClick={handleDashboardClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                <p className='font-light  '>Dashboard</p>
                            </button>

                            <button
                                value={value}
                                className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '
                                onClick={handleInboxClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <p className='font-light '>Messages</p>
                            </button>

                            <button
                                value={value}
                                className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '
                                onClick={handleInsightsClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                                <p className='font-light' id='text_gradient'>Insights</p>
                            </button>

                            <button
                                value={value}
                                className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '
                                onClick={handleAccountClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                                <p className='font-light '>Account</p>
                            </button>

                        </div>
                        <div className='hidden lg:block'>
                            <form action="/auth/signout" method="post">
                                <button type='submit' className='hover:cursor-pointer bg-red9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                    Log out
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                </button>
                            </form>
                            {/*<DialogButton
                                onClickfunction=''
                                disabled=''
                                saveButton='Log out'
                                saveButtonColor='bg-red9'
                                buttonText={
                                    <div className='hover:cursor-pointer bg-red9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                        Log out
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                    </div>
                                }
                                dialogTitle='Log out'
                                dialogDesc={`Are you sure you want to log out?`}
                                saveButtonType='submit'
                            />*/}
                        </div>
                    </div>
                </div>
                <div className='lg:hidden w-[100vw] h-screen'>
                    <MobileFullDashboard />
                </div>
            </div>
            <section className='p-5 hidden lg:block flex-1 overflow-y-scroll' id='grid-section'>
                {(() => {
                    switch (value) {
                        case 'dashboard':
                            return <DashGridSection />;
                        case 'inbox':
                            return <InboxSection />;
                        case 'insights':
                            return <InsightsSection />
                        case 'account':
                            return <AccountSection />;
                        default:
                            return null; // Render nothing or fallback UI
                    }
                })()}
            </section>
        </div>
    )
}

export default Dashboard