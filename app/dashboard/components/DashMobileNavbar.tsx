'use client'
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon, ChevronRightIcon } from '@radix-ui/react-icons';
import DashAvatar from './DashAvatar';
import Link from 'next/link';

type Props = {}

const DashMobileNavbar = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            {/** Mobile screen dash-nav */}
            <div className='flex justify-between p-2 w-full' >
                <div>
                    <DashAvatar iconHeight='h-[35px]' iconWidth='w-[35px]' />
                </div>
                <div id='loginLogo' className='flex items-center'>
                    <span className='font-semibold text-red9'>Then</span>
                    <span className='text-slate11'>Pixel</span>
                </div>
                <button
                    className="z-[100] rounded-full w-[35px] h-[35px] inline-flex items-center justify-center bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-slate2"
                    aria-label="Customise options"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </button>
                {isMobileMenuOpen && (
                    <>
                        <div className='absolute flex justify-center top-0 right-0 transition-all duration-75 ease-in-out backdrop-blur-lg w-screen h-screen z-[3] p-5'>
                            <div className=' flex flex-col  w-full h-screen  bg-white rounded-md z-[4] bounce-in-right shadow-md p-5'>
                                <div id='loginLogo' className='flex items-center p-3'>
                                    <span className='font-semibold text-red9'>Then</span>
                                    <span className='text-slate11'>Pixel</span>
                                </div>
                                <Link className='flex justify-between items-center text-slate10 hover:bg-slate2 font-light border-dashed border-b-[1px] p-3' href='/'>
                                    Home
                                    <ChevronRightIcon />
                                </Link>
                                <Link className='flex justify-between items-center text-slate10 hover:bg-slate2 font-light border-dashed border-b-[1px] p-3' href='/about'>
                                    Dashboard
                                    <ChevronRightIcon />
                                </Link>
                                <Link className='flex justify-between items-center text-slate10 hover:bg-slate2 font-light border-dashed border-b-[1px] p-3' href='/showcase'>
                                    Activity
                                    <ChevronRightIcon />
                                </Link>
                                <Link className='flex justify-between items-center text-slate10 hover:bg-slate2 font-light border-dashed border-b-[1px] p-3' href='/contact'>
                                    Settings
                                    <ChevronRightIcon />
                                </Link>
                                <Link className='flex justify-between items-center text-slate10 hover:bg-slate2 font-light border-dashed border-b-[1px] p-3' href='/contact'>
                                    Contract & Docs
                                    <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    )
}

export default DashMobileNavbar