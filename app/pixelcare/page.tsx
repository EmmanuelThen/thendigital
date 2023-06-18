import React from 'react'
import Navbar from '../components/Navbar';
import SubTiers from '../components/SubTiers';
import PixelCareCard from './components/PixelCareCard';
import TierFeatures from './components/TierFeatures';
import { GlobeIcon } from '@radix-ui/react-icons';

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full mx-[auto]'>
            <div className=''>
                <Navbar />
            </div>

            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="morph relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3EB489] to-[#67d0fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"

                    />
                </div>
            </div>

            <div className='  pb-[1.5em] leading-[50px] md:leading-[80px] text-[30px] md:text-[55px] z-[10] '>
                <div className=' flex flex-col items-center justify-center font-light '>
                    <h1>Secure your investment</h1>
                    <h1>the correct way.</h1>
                    <h1>Introducing <span id='text_gradient'>PixelCare.</span></h1>
                </div>
            </div>

            <div className='flex flex-col gap-20'>
                <div>
                    <div className='flex justify-center p-6'>
                        <PixelCareCard
                            tier='PixelCare'
                            price='299'
                            frequency='month'
                            buttonText='Purchase'
                            bgColor=''
                        />
                    </div>
                    <div className=' flex flex-col md:items-center md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6'>
                        <TierFeatures
                            icon={<GlobeIcon />}
                            heading='Core Software Updates'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            }
                            heading='Theme/Template Updates'
                            desc=''
                        />
                        <TierFeatures
                            icon={<GlobeIcon />}
                            heading='Content Updates'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            }
                            heading='Technical Support'
                            desc=''
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-center p-6'>
                        <PixelCareCard
                            tier='PixelCare +'
                            price='499'
                            frequency='month'
                            buttonText='Purchase'
                            bgColor=''
                        />
                    </div>
                    <div className='font-medium text-3xl p-6'>
                        <h1 className=''>
                            All <span id='text_gradient'>PixelCare</span><br /> features, plus:
                        </h1>
                    </div>
                    <div className=' flex flex-col md:items-center md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6'>
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10" id='server_svg'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                                </svg>
                            }
                            heading='Hosting Maintenance & Optimization'
                            desc=''
                            
                        />
                        <TierFeatures
                            icon={<GlobeIcon />}
                            heading='Feature Enhancements & Updates'
                            desc=''
                        />
                        <TierFeatures
                            icon={<GlobeIcon />}
                            heading='Featurefeaturefeaturefeaturefeat'
                            desc=''
                        />
                        <TierFeatures
                            icon={<GlobeIcon />}
                            heading='Featurefeaturefeaturefeaturefeat'
                            desc=''
                        />
                    </div>
                </div>

                <div>
                    <div className='flex justify-center p-6'>
                        <PixelCareCard
                            tier='PixelCare Elite'
                            price='999'
                            frequency='month'
                            buttonText='Purchase'
                            bgColor='animate-backgroundShine bg-[linear-gradient(115deg,#ffffff,45%,#e6e6e6,55%,#ffffff)] bg-[length:250%_100%] bg-transparent'
                        />
                    </div>
                    <div className='font-medium text-3xl p-6'>
                        <h1>
                            All <span id='text_gradient'>PixelCare +</span> features, plus:
                        </h1>
                    </div>
                    <div className=' flex flex-col md:items-center md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6'>

                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            }
                            heading='E-commerce Optimization'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>

                            }
                            heading='Website Audits and Recommendations'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            }
                            heading='Advanced Content Updates'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            }
                            heading='Priority Support & Dedicated Account Manager'
                            desc=''
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358, 75%, 59%)" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            }
                            heading='Performance Optimization Monitoring'
                            desc='Optimize website speed to its fullest potential, utilizing advanced caching techniques, CDN integration, image optimization, and code-level optimizations.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;