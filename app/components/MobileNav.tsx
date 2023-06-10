import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, EnterIcon } from '@radix-ui/react-icons';


type Props = {
    nav1: string,
    nav2: string,
    nav3: string,
    nav4: string,
    nav5: string,
    nav6: string,
    nav7: string
}

const MobileNav = ({ nav1, nav2, nav3, nav4, nav5, nav6, nav7 }: Props) => {
    return (
        <>
            <div className='absolute flex justify-center top-0 right-0 transition-all duration-75 ease-in-out backdrop-blur-lg w-screen h-screen z-[3] p-5'>
                <div className=' flex flex-col  w-full h-screen  bg-white rounded-md z-[4] bounce-in-right shadow-md p-5'>
                    <div id='loginLogo' className='flex items-center p-3'>
                        <span className='font-semibold text-red9'>Then</span>
                        <span className='text-slate11'>Pixel</span>
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8 ' href='/'>
                                <div className='text-slate10'>{nav1}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8 ' href='/dashboard'>
                                <div className='text-slate10'>{nav2}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8 ' href='/showcase'>
                                <div className='text-slate10'>{nav3}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8 ' href='/contact'>
                                <div className='text-slate10'>{nav4}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8' href='/contact'>
                                <div className='text-slate10'>{nav5}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3 my-8 ' href='/contact'>
                                <div className='text-slate10'>{nav6}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link className='flex justify-between items-center hover:bg-slate2 font-light border-dashed border-b-[1px] p-3  my-8' href='/contact'>
                                <div className='text-slate10'>{nav7}</div>
                                <EnterIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav