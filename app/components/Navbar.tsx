'use client'
import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, GlobeIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

type Props = {
    title: string,
    children: string,
    href: string
}

const ListItem = ({ title, children, href }: Props) => {
    return (
        <>
            <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                    <Link href={`${href}`} className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'>
                        <h1 className='font-semibold mb-1 leading-[1.2] '>
                            {title}
                        </h1>
                        <p className='text-slate8 text-sm leading-[1.4]'>
                            {children}
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
                    <div className='cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <button type='button'>
                            {isMobileMenuOpen ? <Cross1Icon width={30} height={30} /> : <HamburgerMenuIcon width={30} height={30} />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <>
                        <div className='relative flex justify-center top-0 right-0 transition-all duration-75 ease-in-out backdrop-blur-lg w-screen'>
                            <div className='absolute flex flex-col items-center justify-around w-[95%] h-screen bg-slate11'>
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
                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto bg-slate1">
                            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                <ListItem title='Website Development' href='/about'>
                                    Everything from SPA to Static to e-commerce we do it all
                                </ListItem>
                                <ListItem title='Enterprise Development' href='/about'>
                                    Everything from SPA to Static to e-commerce we do it all
                                </ListItem>
                                <ListItem title='Utilities' href='/about'>
                                    Everything from SPA to Static to e-commerce we do it all
                                </ListItem>
                                <ListItem title='Software' href='/about'>
                                    Everything from SPA to Static to e-commerce we do it all
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
                                <ListItem title='LIC-tonsorial' href='https://lictonsorial.com'>
                                    Barbershop
                                </ListItem>
                                <ListItem title='ThenPixels' href=''>
                                    Barbershop
                                </ListItem>
                                <ListItem title='ThenCrypto' href=''>
                                    Barbershop
                                </ListItem>
                                <ListItem title='FitnessFit' href=''>
                                    Barbershop
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
                        <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-slate11" />
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