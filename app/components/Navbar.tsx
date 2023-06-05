'use client'
import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, GlobeIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

type Props = {
    description: string,
    children: any,
    href: string
}

const ListItem = ({ description, children, href }: Props) => {
    return (
        <>
            <li>
                <NavigationMenu.Link asChild>
                    <Link href={`${href}`} className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'>
                        <h1 className='font-semibold mb-1 leading-[1.2] '>
                            {children}
                        </h1>
                        <p className='text-slate8 text-sm leading-[1.4]'>
                            {description}
                        </p>
                    </Link>
                </NavigationMenu.Link>
            </li>
        </>
    )
}


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (

        <>
            <div className='lg:hidden justify-between items-center'>
                <div className='flex justify-between p-2'>
                    <div>
                        <span className='font-semibold text-red9'>Then</span>
                        <span className='text-slate11'>Digital</span>
                    </div>
                    <div className='cursor-pointer z-[1]' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <button type='button'>
                            {isMobileMenuOpen ? <Cross1Icon width={30} height={30} /> : <HamburgerMenuIcon width={30} height={30} />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <>
                        <div className='relative flex justify-center top-0 right-0 transition-all duration-75 ease-in-out backdrop-blur-lg w-screen z-[3]'>
                            <div className='absolute flex flex-col items-center justify-around w-[95%] h-screen  bg-slate11 rounded-md z-[4] bounce-in-right'>
                                <Link className='text-red9 text-xl font-medium' href='/'>
                                    Home
                                </Link>
                                <Link className='text-red9 text-xl font-medium' href='/about'>
                                    What we do
                                </Link>
                                <Link className='text-red9 text-xl font-medium' href='/showcase'>
                                    Showcase
                                </Link>
                                <Link className='text-red9 text-xl font-medium' href='/contact'>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <NavigationMenu.Root className="hidden lg:flex relative z-[1] w-screen justify-between items-center py-3 px-10">
                <div>
                    <span className='font-semibold text-red9'>Then</span>
                    <span className='text-slate11'>Digital</span>
                </div>
                <NavigationMenu.List className="center  m-0 flex gap-20 list-none rounded-[6px] bg-white p-1 ">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-red9 hover:bg-red3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                            href='/'
                        >
                            <p>Home</p>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="text-red9 hover:bg-red3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            What we offer{' '}
                            <CaretDownIcon
                                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto bg-white z-[999]">
                            <ul className="one relative m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                <ListItem description='From SPA to static to e-commerce, we do it all no exceptions' href='/about'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                        Web Development
                                    </div>
                                </ListItem>
                                <ListItem description='Big business needs big software, all your business needs all in one place' href='/about'>
                                    <div className='flex items-enter gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                        </svg>
                                        Enterprise Development
                                    </div>
                                </ListItem>
                                <ListItem description='Small utilities and tools such as calculators and AI tools, for any need' href='/about'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>
                                        Utilities
                                    </div>
                                </ListItem>
                                <ListItem description='All types of software such as dashboards, admin software etc.' href='/about'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>
                                        Software
                                    </div>
                                </ListItem>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="text-red9 hover:bg-red3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            Showcase{' '}
                            <CaretDownIcon
                                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto bg-slate1">
                            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                                <ListItem description='Barbershop' href='https://lictonsorial.com'>
                                    <div className='flex items-center gap-1'>
                                        LIC-tonsorial
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='E-commerce' href=''>
                                    <div className='flex items-center gap-1'>
                                        ThenPixels
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='Fitness' href=''>
                                    <div className='flex items-center gap-1'>
                                        FitnessFit
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='description' href=''>
                                    <div className='flex items-center gap-1'>
                                        Other site
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='description' href=''>
                                    <div className='flex items-center gap-1'>
                                        Other site
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='' href='/showcase'>
                                    <button type='button' className='bg-red9 outline outline-red9 rounded-md p-2 text-slate2'>
                                        Full showcase
                                    </button>
                                </ListItem>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-red9 hover:bg-red3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/contact"
                        >
                            Contact
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-black" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>
                <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                    <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                </div>

                <div className='flex justify-between gap-2'>
                    <button className='text-slate11 px-2 py-1'>
                        Log in
                    </button>
                    <button className='text-slate2 bg-red9 outline outline-red9 rounded-md p-1 hover:opacity-80'>
                        Sign up
                    </button>
                </div>
            </NavigationMenu.Root>
        </>
    );
};

export default Navbar;