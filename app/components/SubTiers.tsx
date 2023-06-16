'use client'
import { CheckIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import ArrowButton from './ArrowButton'

type Props = {}

const SubTiers = (props: Props) => {


    return (
        <div className='flex justify-between gap-5'>
            {/** Card1 */}
            <div className='p-5 rounded-lg bg-white shadow-lg w-full border border-1 hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer'>
                <div id='TOP-HALF'>
                    <h2 className='text-red9 font-medium text-sm'>PixelCare</h2>
                    <div className='flex items-center justify-between'>
                        <p className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                199
                            </span>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </p>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-2 mt-10'>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Hosting services</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>1 feature update
                                <sub className='text-red9 w-fit text-[6px] font-light tracking-tighter'>
                                    /mo
                                </sub>
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-10'>
                        <ArrowButton buttonText='Learn more' href='/pixelcare' />
                    </div>
                </div>

            </div>

            {/** Card2 */}
            <div className='p-5 rounded-lg bg-white shadow-lg w-full border border-1 hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer'>
                <div id='TOP-HALF'>
                    <h2 className='text-red9 font-medium text-sm'>PixelCare +</h2>
                    <div className='flex items-center justify-between'>
                        <p className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                299
                            </span>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </p>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-2 mt-10'>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Hosting services</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Unlimited feature update
                                <sub className='text-red9 w-fit text-[6px] font-light tracking-tighter'>
                                    /mo
                                </sub>
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-10'>
                        <ArrowButton buttonText='Learn more' href='/pixelcare' />
                    </div>
                </div>
            </div>

            {/** Card 3 */}
            <div className='p-5 rounded-lg bg-white shadow-lg w-full border border-1 hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer'>
                <div id='TOP-HALF'>
                    <h2 className='text-red9 font-medium text-sm'>PixelCare Elite</h2>
                    <div className='flex items-center justify-between'>
                        <p className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                499
                            </span>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </p>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-2 mt-10'>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Hosting services</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Unlimited feature update
                                <sub className='text-red9 w-fit text-[6px] font-light tracking-tighter'>
                                    /mo
                                </sub>
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-red9'><CheckIcon /></div>
                            <p className='text-[10px] text-slate10'>Feature</p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-10'>
                        <ArrowButton buttonText='Learn more' href='/pixelcare' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubTiers