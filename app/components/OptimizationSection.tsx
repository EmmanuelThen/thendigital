'use client'
import React, { useEffect, useRef } from 'react';
import observer from '@/intersectionObserver';
import { hiddenElements } from '@/intersectionObserver';
import ShinyText from './ShinyText';
import OptimizationAnimation from './OptimizationAnimation';
import PathAnimation from './PathAnimation';


type Props = {}

const OptimizationFirst = (props: Props) => {
    const hiddenElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        hiddenElementsRef.current = document.querySelectorAll('.hiddenElement');

        if (hiddenElementsRef.current && observerRef.current) {
            hiddenElementsRef.current.forEach((e) => observerRef.current!.observe(e));
        }

        // Clean-up function
        return () => {
            if (hiddenElementsRef.current && observerRef.current) {
                hiddenElementsRef.current.forEach((e) => observerRef.current!.unobserve(e));
            }
        };
    }, []);


    return (
        <div>
            <div className='mt-10 hiddenElement p-5'>
                
                    <div className=' mt-[250px] md:text-center'>
                        <ShinyText text='Optimization comes first' />
                    </div>
                    <p className='hiddenElement mt-10 md:p-5 md:text-center'>
                        Web development principles are essential for ensuring that a website is functional, useable, secure, and meets the needs of its intended audience.
                        Here at ThenDigital, we promise to follow these web development principles to ensure that we create the best-optimized websites for our clients
                    </p>
                


                <div className='md:flex'>
                    <div>
                        <div className='md:flex md:flex-col md:w-[50%] mt-10'>
                            <div className='hiddenElement flex items-center gap-2 text-red9 font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                                <h2>
                                    Performance Optimization
                                </h2>
                            </div>
                            <p className='text-slate11'>
                                We optimize our websites to load quickly, ensuring that users have a seamless browsing experience.
                                This includes optimizing images, minimizing file sizes, and leveraging caching.
                            </p>
                        </div>
                        <div className='md:flex md:flex-col md:w-[50%] mt-10'>
                            <div className='hiddenElement flex items-center gap-2 text-red9 font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <h2>
                                    Search Engine Optimization
                                </h2>
                            </div>
                            <p className='text-slate11'>
                                We follow best practices for search engine optimization to ensure that our websites are easily discoverable by search engines.
                                This involves optimizing content, meta tags, and other elements to improve search engine rankings.
                            </p>
                        </div>
                        <div className='md:flex md:flex-col md:w-[50%] mt-10'>
                            <div className='hiddenElement flex items-center gap-2 text-red9 font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h2>
                                    Responsive Design
                                </h2>
                            </div>
                            <p className='text-slate11'>
                                We create websites that are optimized for multiple devices and screen sizes. This ensures that users have a consistent experience,
                                regardless of the device they are using to access the website.
                            </p>
                        </div>
                        <div className='md:flex md:flex-col md:w-[50%] mt-10'>
                            <div className='hiddenElement flex items-center gap-2 text-red9 font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <h2>
                                    Security
                                </h2>
                            </div>
                            <p className='text-slate11'>
                                We take measures to ensure that our websites are secure and protected against hacking, malware, and other online threats.
                                This includes implementing SSL certificates, using secure passwords, and following other best practices for web security.
                            </p>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OptimizationFirst