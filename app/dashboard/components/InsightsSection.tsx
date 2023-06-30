import { ChevronRightIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import ShinyText from '@/app/components/ShinyText'
import PopoverButton from '@/app/components/PopoverButton'
import LabelDemo from '@/app/components/Label'
import Checkedbox from '@/app/components/Checkedbox'



type Props = {}

const InsightsSection = (props: Props) => {
    const [pageUrl, setPageUrl] = useState('');
    const [device, setDevice] = useState('');
    const [siteMetrics, setSiteMetrics] = useState();
    const [checked, setChecked] = useState([false, false]);

    const handleToggle = (i: any) => {
        const updatedChecked = [...checked];
        updatedChecked[i] = !updatedChecked[i];

        // To uncheck the previous box
        if (i === 0) {
            updatedChecked[1] = false;
        } else if (i === 1) {
            updatedChecked[0] = false;
        }

        setChecked(updatedChecked);
    };

    {/** Function to format trillions, billions, and millions */ }
    const numberFormatter = (num: any) => {
        if (num >= 1000000000000) {
            return (num / 1000000000000).toFixed(1) + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        return num
    };


    // api call to pagespeed
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PAGESPEED_API_KEY;

    const getPageSpeedData = async () => {
        const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(pageUrl)}&key=AIzaSyAvEmGN4eDmXitNAFLICd4ZCYUoJopzlng&strategy=${device}&category=performance`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const data = await response.json();
            console.log(data);
            setSiteMetrics(data.id);
            console.log(siteMetrics);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <span className='py-2 font-bold mt-5 tracking-[-0.06em] md:leading-[1.10] md:text-[55px] inline-flex animate-backgroundShine bg-[linear-gradient(110deg,red,45%,blue)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent'>
                        Insights
                    </span>
                </div>
                <div className='hidden lg:block notificationBell relative'>
                    <div id='notificationDot' className='absolute h-[12px] w-[12px] bg-red9 rounded-full right-0 top-0' />
                    <PopoverButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    }
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-0 lg:justify-between lg:flex-row flex-wrap p-5'>
                {/** Card 1 */}
                <div className='flex items-center gap-10 border border-1 p-3 rounded-lg shadow-md lg:hover:shadow-xl w-[100%] lg:w-[20%]'>
                    <div className='border border-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className='font-medium'>3.45K</h1>
                        <p className='text-slate8 text-xs'>Total views</p>
                    </div>
                </div>
                <div className='w-[50%] text-green9 text-xs text-semibold lg:hidden'>
                    Last updated 3:45pm
                </div>
                {/** Card 2 */}
                <div className='flex items-center gap-10 border border-1 p-3 rounded-lg shadow-md lg:hover:shadow-xl w-[100%] lg:w-[20%]'>
                    <div className='border border-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className='font-medium'>400 ms</h1>
                        <p className='text-slate8 text-xs'>Load speed</p>
                    </div>
                </div>
                <div className='w-[50%] text-green9 text-xs text-semibold lg:hidden'>
                    Last updated 3:45pm
                </div>
                {/** Card 3 */}
                <div className='flex items-center gap-10 border border-1 p-3 rounded-lg shadow-md lg:hover:shadow-xl w-[100%] lg:w-[20%]'>
                    <div className='border border-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                    </div>
                    <div>
                        <h1 className='font-medium'>Home</h1>
                        <p className='text-slate8 text-xs'>Most viewed</p>
                    </div>
                </div>
                <div className='w-[50%] text-green9 text-xs text-semibold lg:hidden'>
                    Last updated 3:45pm
                </div>
                {/** Card 4 */}
                <div className='flex items-center gap-10 border border-1 p-3 rounded-lg shadow-md lg:hover:shadow-xl w-[100%] lg:w-[20%]'>
                    <div className='border border-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                    <div>
                        <h1 className='font-medium'>11 min</h1>
                        <p className='text-slate8 text-xs'>Average time</p>
                    </div>
                </div>
                <div className='w-[50%] text-green9 text-xs text-semibold lg:hidden'>
                    Last updated 3:45pm
                </div>
            </div>
            {/** Big Card */}
            <div className='flex border border-1 p-3 rounded-lg shadow-md'>
                <form
                    action=""
                    className='flex justify-between w-full'
                >
                    <Checkedbox
                        label='Desktop'
                        checked={checked[0]}
                        onCheckedChange={() => {
                            handleToggle(0);
                            setDevice('desktop');
                        }}

                    />
                    <Checkedbox
                        label='Mobile'
                        checked={checked[1]}
                        onCheckedChange={() => {
                            handleToggle(1);
                            setDevice('mobile');
                        }}

                    />
                    <LabelDemo
                        label='Enter URL'
                        defaultValue='https://url.com'
                        buttonDisplay='hidden'
                        onChange={(e) => setPageUrl(e.target.value)}
                    />
                    <button type='submit' onClick={getPageSpeedData} className='border border-1 p-2 rounded-lg shadow-lg'>
                        Enter
                    </button>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default InsightsSection