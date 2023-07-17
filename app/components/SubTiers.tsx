'use client'
import { CheckIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import ArrowButton from './ArrowButton'
import FeatureBulletPoint from '../pixelcare/components/FeatureBulletPoint'

type Props = {}

const SubTiers = (props: Props) => {


    return (
        <div className='flex justify-between gap-5'>
            {/** Card1 */}
            <div id='back-ground' className='flex flex-col justify-between p-5 rounded-lg w-full  hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer focus:border-red9 shadow-blackA9 shadow-[0_4px_7px]' >
                <div id='custom-text'>
                    <h2 className=' font-medium text-sm' id='text_gradient'>PixelCare</h2>
                    <div className='flex items-center justify-between'>
                        <div className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                199
                            </span>
                            <sup className='font-extrabold'>
                                .99
                            </sup>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </div>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-10 '>
                        <FeatureBulletPoint
                            points='Core software updates'
                        />
                        <FeatureBulletPoint
                            points='Theme/Template updates'
                        />
                        <FeatureBulletPoint
                            points='Content updates & enhancements'
                        />
                        <FeatureBulletPoint
                            points='Technical support'
                        />
                    </div>

                    <div className='flex justify-center mt-10'>
                        <ArrowButton buttonText='Learn more' href='/pixelcare' />
                    </div>
                </div>

            </div>

            {/** Card2 */}
            <div id='back-ground' className='flex flex-col justify-between p-5 rounded-lg w-full  hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer focus:shadow-white shadow-blackA9 shadow-[0_4px_7px]' >
                <div id='custom-text'>
                    <h2 className='font-medium text-sm' id='text_gradient'>PixelCare +</h2>
                    <div className='flex items-center justify-between'>
                        <div className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                499
                            </span>
                            <sup className='font-extrabold'>
                                .99
                            </sup>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </div>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-[26px] '>
                        <FeatureBulletPoint
                            points='All PixelCare features'
                        />
                        <FeatureBulletPoint
                            points='Hosting maintenance & optimization'
                        />
                        <FeatureBulletPoint
                            points='SEO Audits'
                        />
                        <FeatureBulletPoint
                            points='Monthly reporting'
                        />
                        <FeatureBulletPoint
                            points='Extended technical support'
                        />
                    </div>

                    <div className='flex justify-center mt-10'>
                        <ArrowButton buttonText='Learn more' href='/pixelcare' />
                    </div>
                </div>
            </div>

            {/** Card 3 */}
            <div id='back-ground' className='flex flex-col justify-between p-5 rounded-lg w-full  hover:border-red9 transform transition-transform hover:scale-110 cursor-pointer focus:border-red9 shadow-blackA9 shadow-[0_4px_7px]' >
                <div id='custom-text'>
                    <h2 className='font-medium text-sm' id='text_gradient'>PixelCare Elite</h2>
                    <div className='flex items-center justify-between'>
                        <div className='relative text-[32px]'>
                            <sup className='font-extrabold'>
                                $
                            </sup>
                            <span className='text-[45px] font-extrabold'>
                                1,999
                            </span>
                            <sup className='font-extrabold'>
                                .99
                            </sup>
                            <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                                /month
                            </sub>
                        </div>
                    </div>
                    <div className='DESC'>
                        <p className='leading-tight text-xs font-light'>
                            Heres what you can expect
                        </p>
                    </div>
                </div>

                <div id='BOTTOM-HALF' className=''>
                    <div className='flex flex-col gap-2 mt-10'>
                        <FeatureBulletPoint
                            points='All PixelCare + features'
                        />
                        <FeatureBulletPoint
                            points='E-commerce optimization'
                        />
                        <FeatureBulletPoint
                            points='Website audits & recommendations'
                        />
                        <FeatureBulletPoint
                            points='Advanced content updates & enhancements'
                        />
                        <FeatureBulletPoint
                            points='Performance optimization monitoring'
                        />
                        <FeatureBulletPoint
                            points='Custom Reporting and Insights'
                        />
                        <FeatureBulletPoint
                            points='Priority support & dedicated account manager'
                        />
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