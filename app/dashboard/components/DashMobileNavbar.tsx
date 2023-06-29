'use client'
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon, ChevronRightIcon, EnterIcon } from '@radix-ui/react-icons';
import DashAvatar from './DashAvatar';
import Link from 'next/link';
import { useAvatar } from '@/context/AvatarContext';
import MobileNav from '@/app/components/MobileNav';

type Props = {}

const DashMobileNavbar = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { avatar, changeAvatar } = useAvatar();
    return (
        <>
            {/** Mobile screen dash-nav */}
            <div className='flex justify-between p-2 w-full' >
                <div>
                    <DashAvatar iconHeight='h-[35px]' iconWidth='w-[35px]' />
                </div>
                <div id='loginLogo' className='flex items-center'>
                    <span className='font-semibold text-blue9'>Then</span>
                    <span className='font-semibold text-red9'>Pixels</span>
                </div>
                <button
                    className="z-[100] rounded-full w-[35px] h-[35px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-slate2"
                    aria-label="Customise options"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </button>
                {isMobileMenuOpen && (
                    <>
                        <MobileNav
                            nav1='Home'
                            nav2='Dashboard'
                            nav3='What we do'
                            nav4='Showcase'
                            nav5='Membership'
                            nav6='Account'
                            nav7='Log out'
                        />
                    </>
                )}
            </div >
        </>
    )
}

export default DashMobileNavbar