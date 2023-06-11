'use client'
import React, { useState } from 'react'
import DashAvatar from './DashAvatar'
import Toggle from '@/app/components/Toggle'
import DialogButton from '@/app/components/DialogButton'
import { EnvelopeClosedIcon, ExternalLinkIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import DashCards from './DashCards'
import DashProgress from './DashProgress'
import DashProgressBottom from './DashProgressBottom'
import ShinyText from '@/app/components/ShinyText'
import DashSpeedTest from './DashSpeedTest'
import DashSpeedTestBottom from './DashSpeedTestBottom'
import DashAccordion from './DashAccordion'
import DashFileUpload from './DashFileUpload'
import DashMobileNavbar from './DashMobileNavbar'
import PopoverButton from '@/app/components/PopoverButton'
import DashPixelCare from './DashPixelCare'
import EditTabs from '@/app/components/EditTabs'


const DashNavbar = () => {
    const [hasNewMessage, setHasNewMessage] = useState(false);

    return (
        <>
            <div className='hidden md:flex'>
                <div className='hidden md:flex md:flex-col items-center justify-between border-r-[1px] p-10 w-fit overflow-y-hidden h-screen'>
                    <div id='loginLogo' className='hidden md:block'>
                        <span className='font-semibold text-red9'>Then</span>
                        <span className='text-slate11'>Pixel</span>
                    </div>
                    <div id='loginName' className='hidden md:flex md:flex-col items-center font-semibold text-sm'>
                        <div id='loginAvatar' className='mb-5'>
                            <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
                        </div>
                        <p className='hidden md:block'>client.name</p>
                        <div className='hidden md:flex justify-center mt-3'>
                            <p className='px-1 rounded-md w-fit text-[9px]'>
                                <DialogButton
                                    buttonText='Edit'
                                    dialogTitle='Edit Profile'
                                    dialogDesc='Make changes to your profile here. Click save when youre done.'
                                    content={<EditTabs />}
                                    saveButton='Save changes'

                                />
                            </p>
                        </div>
                    </div>
                    <div id='loginTabs' className='hidden md:flex flex-col gap-8 '>
                        <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                            <p className='font-light  '>Dashboard</p>
                        </button>
                        <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                            <p className='font-light '>Inbox</p>
                        </button>
                        <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <p className='font-light '>Schedule</p>
                        </button>
                        <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className='font-light '>Settings</p>
                        </button>
                    </div>
                    <div className='hidden md:block'>
                        <Toggle />
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                {/** Mobile screen nav */}
                <div>
                    <DashMobileNavbar />
                </div>
                <div id='greeting' className='p-5'>
                    <div className=''>
                        <ShinyText text='Welcome Client Name' />
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-10 p-2'>
                    <DashAccordion
                        title1='production tracker'
                        title2='contracts & docs'
                        title3='card title'
                        title4='card title'
                        title5='{ pixelcare }'
                        title6='performance'
                    />
                    <div>
                        <h1 className='flex justify-center'><ShinyText text='Any Questions?' /></h1>
                        <div className='flex justify-center'>
                            <DashFileUpload />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashNavbar