'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import PixelCareCard from './components/PixelCareCard';
import TierFeatures from './components/TierFeatures';
import supabase from '../supabase/supabase-client';

type Props = {}

const page = (props: Props) => {
    const [fetchError, setFetchError] = useState(null);
    const [tier, setTier] = useState(null);

    useEffect(() => {
        const fetchPixelCareTiers = async () => {
            const { data, error } = await supabase
                .from('product')
                .select() // To get all products just leave blank

            try {
                setTier(data)
                setFetchError(null);
            } catch (error) {
                console.log(error)
                setFetchError('Could not fetch the data')
            }
        }
        fetchPixelCareTiers();
    }, []);

    return (
        <div className='w-full mx-[auto]'>
            <nav>
                <Navbar />
            </nav>

            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="morph relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"

                    />
                </div>
            </div>

            <div className='mt-10  pb-[1.5em] leading-[50px] md:leading-[80px] text-[30px] md:text-[55px] z-[10] '>
                <div className=' flex flex-col items-center justify-center font-light '>
                    <h1 id='custom-text'>Secure your investment</h1>
                    <h1 id='custom-text'>the correct way.</h1>
                    <h1 id='custom-text'>Introducing <span id='text_gradient'>PixelCare.</span></h1>
                </div>
            </div>

            <div className='flex flex-col gap-20'>
                <div>
                    <div className='flex justify-center p-6'>
                        <PixelCareCard
                            tier='PixelCare'
                            price='199'
                            frequency='month'
                            buttonText='Purchase'
                            bgColor=''
                            point='Core software updates'
                            point1='Theme/Template updates'
                            point2='Content updates & enhancements'
                            point3='Technical support'
                            point4=''
                            point5=''
                            subTier='pixelcare'
                        />
                    </div>
                    <div className=' flex flex-col md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6 bg-slate2'>
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            }
                            heading='Core Software Updates'
                            desc={`Keep the website's core software, such as content management systems (CMS) or platform, up to date to improve security and compatibility.`}
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            }
                            heading='Theme/Template Updates'
                            desc={`Apply necessary updates to the website's theme or template to address any bugs, improve performance, or add new features.`}
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>
                            }
                            heading='Content Updates & Enhancements'
                            desc='One basic content update per month, such as text changes or image replacements, as requested by the client.'
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            }
                            heading='Technical Support'
                            desc='Provide basic technical support to assist with general inquiries, troubleshooting, or minor issues related to the website.'
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
                            point='Hosting maintenance & optimization'
                            point1='SEO Audits'
                            point2='Monthly reporting'
                            point3='Extended technical support'
                            point4=''
                            point5=''
                            subTier='pixelcare-plus'
                        />
                    </div>
                    <div className='font-medium text-3xl p-6'>
                        <h1 className=''>
                            All <span id='text_gradient'>PixelCare</span> features, plus:
                        </h1>
                    </div>
                    <div className=' flex flex-col md:items-center md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6 bg-slate2'>
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                                </svg>
                            }
                            heading='Hosting Maintenance & Optimization'
                            desc='Ensures your website is hosted on a reliable and high-performance server while optimizing its speed, 
                            security, and overall performance. Combining the benefits of professional web hosting with ongoing optimization techniques to deliver an exceptional user experience.'

                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            heading='Search Engine Optimization (SEO) Audits'
                            desc={`Perform SEO audits to identify areas for improvement and provide recommendations to enhance the website's search engine visibility.`}
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            }
                            heading='Monthly Reporting'
                            desc='Provide monthly reports on key website metrics, including uptime, security scans, performance, and maintenance activities performed.'
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            }
                            heading='Extended Technical Support'
                            desc='Provide more comprehensive technical support with faster response times and extended hours of availability.'
                        />
                    </div>
                </div>

                <div>
                    <div className='flex justify-center p-6'>
                        <PixelCareCard
                            tier='PixelCare Elite'
                            price='1,999'
                            frequency='month'
                            buttonText='Purchase'
                            point='E-commerce optimization'
                            point1='Website audits & recommendations'
                            point2='Advanced content updates & enhancements'
                            point3='Performance optimization monitoring'
                            point4='Custom Reporting and Insights'
                            point5='Priority support & dedicated account manager'
                            bgColor='animate-backgroundShine bg-[linear-gradient(115deg,#262626,45%,#e6e6e6,55%,#262626)] bg-[length:250%_100%] bg-transparent'
                            subTier='pixelcare-elite'
                        />
                    </div>
                    <div className='font-medium text-3xl p-6'>
                        <h1>
                            All <span id='text_gradient'>PixelCare +</span> features, plus:
                        </h1>
                    </div>
                    <div className=' flex flex-col md:items-center md:grid grid-cols-2 md:place-items-center gap-20 md:gap-10 p-6 bg-slate2'>

                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            }
                            heading='E-commerce Optimization'
                            desc={`Optimize the website's e-commerce functionality, including cart abandonment prevention, conversion rate optimization, and integration with analytics and marketing tools.`}
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>

                            }
                            heading='Website Audits & Recommendations'
                            desc={`Conduct regular audits of the website's performance, security, and SEO, providing detailed reports and recommendations for further improvements.`}
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            }
                            heading='Advanced Content Updates & Enhancements'
                            desc='Up to 5 more complex content updates, including the creation of new pages, implementation of custom functionality, or integration with third-party systems.'
                        />

                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
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

                            }
                            heading='Custom Reporting and Insights'
                            desc='Deliver customized reports with in-depth analysis of website performance, SEO rankings, user behavior, and conversion metrics, along with actionable insights and recommendations.'
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            }
                            heading='Performance Optimization Monitoring'
                            desc='Optimize website speed to its fullest potential, utilizing advanced caching techniques, CDN integration, image optimization, and code-level optimizations.'
                        />
                        <TierFeatures
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                            <stop offset="25%" stopColor="purple" />
                                            <stop offset="50%" stopColor="pink" />
                                            <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            }
                            heading='Priority Support & Dedicated Account Manager'
                            desc='Provide priority support with faster response times and assign a dedicated account manager to the client for personalized assistance and guidance.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;