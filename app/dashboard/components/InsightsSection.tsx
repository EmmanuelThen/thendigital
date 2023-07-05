import { ChevronRightIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import ShinyText from '@/app/components/ShinyText'
import PopoverButton from '@/app/components/PopoverButton'
import LabelDemo from '@/app/components/Label'
import Checkedbox from '@/app/components/Checkedbox'
import LoadingState from '@/app/components/LoadingState'
import * as HoverCard from '@radix-ui/react-hover-card';
import HoverCards from '@/app/components/HoverCards'
import Link from 'next/link'
import InsightsSVG from './InsightsSVG'



type Props = {}

const InsightsSection = (props: Props) => {
    const [pageUrl, setPageUrl] = useState('');
    const [device, setDevice] = useState('');
    const [checked, setChecked] = useState([false, false]);
    const [isLoading, setIsLoading] = useState(false);
    const [dataArray, setDataArray] = useState([]);
    const [lcpPercentileWidth, setLcpPercentileWidth] = useState([]);
    const [clsPercentileWidth, setClsPercentileWidth] = useState([]);
    const [fidPercentileWidth, setFidPercentileWidth] = useState([]);
    const [errors, setErrors] = useState(null);
    // To fix issue where if I have an api error state rendered and I clicked on the checkbox it renders the last successful api instead of the current error message, because we currently had an error
    // So I set isApiSuccess to false on the error part of the try and catch.
    const [isApiSuccess, setIsApiSuccess] = useState(false);
    const [isEnoughDataOnSite, setIsEnoughDataOnSite] = useState(true);




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

    // Date formatter
    const timeAndDateFormatter = (timeStr: any) => {
        // Parse the time string into a Date object
        const dt = new Date(timeStr);

        // Convert to EST (Eastern Standard Time)
        const estOptions = { timeZone: 'America/New_York' };
        const estTimeStr = dt.toLocaleString('en-US', estOptions);

        return estTimeStr
    }

    // Function to set website score colors depending on score range
    function getScoreColor(score: any) {
        const percentage = score * 100;
        if (percentage >= 90) {
            return 'text-green-500';
        } else if (percentage >= 50 && percentage <= 89) {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    }


    // api call to pagespeed
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PAGESPEED_API_KEY;

    const getPageSpeedData = async () => {
        const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(pageUrl)}&category=performance&category=seo&category=best-practices&category=accessibility&strategy=${device}&key=${apiKey}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        try {
            setIsLoading(true);
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const data = await response.json();
            setDataArray([data]);
            setIsApiSuccess(true);
            // To update the percentileWidths to always be the most current state which is the current search url state, before it was keeping the prev state, so if i search something then do another search, the state would remain the first search state.
            if (data.loadingExperience.metrics) {
                setLcpPercentileWidth(prevLcpPercentileWidth => [
                    Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[0].proportion * 100),
                    Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[1].proportion * 100),
                    Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[2].proportion * 100)
                ]);
                setClsPercentileWidth(prevClsPercentileWidth => [
                    Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[0].proportion * 100),
                    Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[1].proportion * 100),
                    Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[2].proportion * 100)
                ]);
                setFidPercentileWidth(prevFidPercentileWidth => [
                    Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[0].proportion * 100),
                    Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[1].proportion * 100),
                    Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[2].proportion * 100)
                ]);
            } else {
                setLcpPercentileWidth([]);
                setClsPercentileWidth([]);
                setFidPercentileWidth([]);
                setIsEnoughDataOnSite(false);
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrors(error);
            setIsApiSuccess(false);
            setIsLoading(false);
        }
    };

    // To set error state back to null after getting one error search, before when we got 1 error search the state would stay as an error therefore rendering our error state incorrectly
    useEffect(() => {
        setErrors(null);
    }, [pageUrl, device]);

    // To refresh states on new site search
    useEffect(() => {
        setIsEnoughDataOnSite(true);
    }, [isEnoughDataOnSite])

    //console.log(lcpPercentileWidth);
    //console.log(clsPercentileWidth);
    //console.log(fidPercentileWidth);

    return (
        <div className='overflow-x-hidden p-5'>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text='Insights' />
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
            {/** Big Card */}
            <div className='flex justify-between border border-1 p-5 rounded-lg shadow-md'>
                <div className='flex flex-col'>
                    <h1 className='text-blue9 font-semibold mb-5 lg:mb-10 text-sm lg:text-base'>Pagespeed Insights</h1>
                    <div className='flex flex-col lg:flex-row w-full'>
                        <div className='flex justify-around lg:justify-between flex-col'>
                            <div className='flex justify-center mt-5 lg:mt-0'>
                                <LabelDemo
                                    label='Enter URL'
                                    defaultValue='https://www.url.com'
                                    buttonDisplay='hidden'
                                    onChange={(e) => setPageUrl(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-around mt-5'>
                                <Checkedbox
                                    label='Desktop'
                                    checked={checked[0]}
                                    onCheckedChange={() => {
                                        handleToggle(0);
                                        setDevice('desktop');
                                    }}
                                    id='c1'
                                    htmlFor='c1'
                                />
                                <Checkedbox
                                    label='Mobile'
                                    checked={checked[1]}
                                    onCheckedChange={() => {
                                        handleToggle(1);
                                        setDevice('mobile');
                                    }}
                                    id='c2'
                                    htmlFor='c2'
                                />
                            </div>

                            <div className='flex justify-center  lg:items-center'>
                                <button type='submit' onClick={getPageSpeedData} className='bg-blue9 text-white flex justify-center items-center font-semibold h-[35px] w-[300px]  mt-5  p-2 rounded-lg shadow-md'>
                                    Get scores
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-[340px]'>
                        <div className='flex justify-center  mt-5 gap-5 w-full'>
                            <div className='flex items-center'>
                                <div className='rounded-full h-3 w-[12px] bg-red-500 mr-2'></div>
                                <h1 className='font-light text-sm lg:text-base'>
                                    0-49
                                </h1>
                            </div>
                            <div className='flex items-center'>
                                <div className='rounded-full h-3 w-[12px] bg-yellow-500 mr-2'></div>
                                <h1 className='font-light text-sm lg:text-base'>
                                    50-89
                                </h1>
                            </div>
                            <div className='flex items-center'>
                                <div className='rounded-full h-3 w-[12px] bg-green-500 mr-2'></div>
                                <h1 className='font-light text-sm lg:text-base'>
                                    90-100
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='svg-container hidden md:block' id='svgIllustration'>
                    <InsightsSVG />
                </div>
            </div>
            <div>
                {isLoading ? (
                    <div className='flex flex-col justify-center items-center'>
                        <ShinyText text='Scanning...' />
                        <LoadingState />
                    </div>
                ) : (errors) ? (
                    // Error state
                    <div className='flex flex-col items-center text-lg text-center lg:text-4xl text-slate8 p-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-10 h-10 lg:w-20 lg:h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>

                        <p>Request failed. Please try again later.</p>
                    </div>
                ) : (isApiSuccess) ? (
                    <>
                        {dataArray.map((data, i) => (
                            <div className='mt-5 flex justify-center items-center flex-col gap-2' key={i}>
                                <div className='flex justify-between lg:items-start w-full'>
                                    <div>
                                        <h1 className='font-bold lg:font-semibold text-blue9 text-sm lg:text-base'>Showing results for:</h1>
                                        <p className='font-medium text-slate10 text-sm lg:text-3xl'>
                                            {data.id}
                                        </p>
                                    </div>
                                    <Link className='text-sm lg:text-base text-blue9 hover:underline' href='https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=lr' target='_blank'>
                                        How is this data calculated?
                                    </Link>
                                </div>
                                <div className='flex flex-col items-center gap-5 mt-5 text-center lg:flex-row justify-between w-full'>
                                    <h1 className='font-bold lg:font-semibold text-blue9 text-xl lg:text-4xl'>Scores:</h1>
                                    <div className='flex flex-col items-center hover:bg-slate2 hover:rounded-lg p-5'>
                                        <h1 className='text-sm lg:text-base font-semibold mb-5'>Performance</h1>
                                        <HoverCards
                                            cover={
                                                <p className={`font-semibold text-lg lg:text-xl ${getScoreColor(data.lighthouseResult.categories.performance.score)}`}>
                                                    {((data.lighthouseResult.categories.performance.score) * 100).toFixed(0)}
                                                </p>
                                            }
                                            content='hi'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center hover:bg-slate2 hover:rounded-lg p-5'>
                                        <h1 className='text-sm lg:text-base font-semibold mb-5'>SEO</h1>
                                        <HoverCards
                                            cover={
                                                <p className={`font-semibold text-lg lg:text-xl ${getScoreColor(data.lighthouseResult.categories.seo.score)}`}>
                                                    {((data.lighthouseResult.categories.seo.score) * 100).toFixed(0)}
                                                </p>
                                            }
                                            content='hi'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center hover:bg-slate2 hover:rounded-lg p-5'>
                                        <h1 className='text-sm lg:text-base font-semibold mb-5'>Best practices</h1>
                                        <HoverCards
                                            cover={
                                                <p className={`font-semibold text-lg lg:text-xl ${getScoreColor(data.lighthouseResult.categories['best-practices'].score)}`}>
                                                    {((data.lighthouseResult.categories['best-practices'].score) * 100).toFixed(0)}
                                                </p>
                                            }
                                        />
                                    </div>
                                    <div className='flex flex-col items-center hover:bg-slate2 hover:rounded-lg p-5'>
                                        <h1 className='text-sm lg:text-base font-semibold mb-5'>Accessibility</h1>
                                        <HoverCards
                                            cover={
                                                <p className={`font-semibold text-lg lg:text-xl ${getScoreColor(data.lighthouseResult.categories.accessibility.score)}`}>
                                                    {((data.lighthouseResult.categories.accessibility.score) * 100).toFixed(0)}
                                                </p>
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-end items-center gap-2 w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-4 h-4">

                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                    <p className='text-[10px] font-medium '>Captured at {timeAndDateFormatter(data.analysisUTCTimestamp)} EST</p>
                                </div>
                                {/** Core web vitals assesment section */}
                                {/** For edge case where if the site doesnt have enough speed data it will still show scores */}
                                {(isApiSuccess && isEnoughDataOnSite && lcpPercentileWidth.length === 3) ? (
                                    <div className='w-full'>
                                        <h1 className='flex justify-center font-bold lg:font-semibold text-blue9 text-xl lg:text-4xl py-10'>Core Web Vitals Assessment:</h1>
                                        <div className='flex flex-col items-center justify-between w-full mt-10'>
                                            <div className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full'>
                                                <h1 className='lg:w-[20%] font-bold lg:font-semibold text-lg lg:text-xl'>
                                                    Largest Contentful Paint (LCP)
                                                </h1>
                                                <div className='lg:w-[60%] flex flex-col items-center justify-center'>
                                                    <div className='text-blue9 font-bold text-xl'>
                                                        {((data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].percentile) / 1000).toFixed(1)}s
                                                    </div>
                                                    <div id='barWithDiffColorsAsWidthPercentage' className='flex w-[250px] md:w-[300px] lg:w-[400px] h-1 rounded-full'>
                                                        {lcpPercentileWidth.length > 0 &&
                                                            (<div className={` h-full bg-green-500`} style={{ width: `${lcpPercentileWidth[0]}%` }}></div>)
                                                        }
                                                        {lcpPercentileWidth.length > 0 &&
                                                            (<div className={` h-full bg-yellow-500`} style={{ width: `${lcpPercentileWidth[1]}%` }}></div>)
                                                        }
                                                        {lcpPercentileWidth.length > 0 &&
                                                            (<div className={` h-full bg-red-500`} style={{ width: `${lcpPercentileWidth[2]}%` }}></div>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className='lg:w-[20%]'>
                                                    <h1 className='font-bold lg:font-semibold text-slate9 text-sm lg:text-base'>Page load percentiles</h1>
                                                    <div className='flex flex-col'>
                                                        <div className='flex gap-4 '>
                                                            <div className='flex items-center gap-1'>
                                                                <p className='text-green-500 text-sm'>Good</p>
                                                                <p className='text-slate8 text-xs'>-less than 2.5s</p>
                                                            </div>
                                                            {Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[0].proportion * 100)}%
                                                        </div>
                                                        <div className='flex gap-4 '>
                                                            <div className='flex items-center gap-1'>
                                                                <p className='text-yellow-500 text-sm'>Needs improvement</p>
                                                                <p className='text-slate8 text-xs'>-2.5s - 4s</p>
                                                            </div>
                                                            {Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[1].proportion * 100)}%
                                                        </div>
                                                        <div className='flex gap-4 '>
                                                            <div className='flex items-center gap-1'>
                                                                <p className='text-red-500 text-sm'>Poor</p>
                                                                <p className='text-slate8 text-xs'>-greater than 4s</p>
                                                            </div>
                                                            {Math.round(data.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].distributions[2].proportion * 100)}%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full mt-20'>
                                            <h1 className='lg:w-[20%] font-bold lg:font-semibold text-lg lg:text-xl'>
                                                Cumulative Layout Shift Score (CLS)
                                            </h1>
                                            <div className='w-[60%] flex flex-col items-center justify-center'>
                                                <div className='text-blue9 font-bold text-xl'>
                                                    {data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].percentile}ms
                                                </div>
                                                <div id='barWithDiffColorsAsWidthPercentage' className='flex w-[250px] md:w-[300px] lg:w-[400px] h-1 rounded-full'>
                                                    {clsPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-green-500`} style={{ width: `${clsPercentileWidth[0]}%` }}></div>)
                                                    }
                                                    {clsPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-yellow-500`} style={{ width: `${clsPercentileWidth[1]}%` }}></div>)
                                                    }
                                                    {clsPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-red-500`} style={{ width: `${clsPercentileWidth[2]}%` }}></div>)
                                                    }
                                                </div>
                                            </div>
                                            <div className='lg:w-[20%]'>
                                                <h1 className='font-bold lg:font-semibold text-slate9 text-sm lg:text-base'>Page load percentiles</h1>
                                                <div className='flex flex-col'>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-green-500 text-sm'>Good</p>
                                                            <p className='text-slate8 text-xs'>-less than 2.5s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[0].proportion * 100)}%
                                                    </div>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-yellow-500 text-sm'>Needs improvement</p>
                                                            <p className='text-slate8 text-xs'>-2.5s - 4s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[1].proportion * 100)}%
                                                    </div>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1 '>
                                                            <p className='text-red-500 text-sm'>Poor</p>
                                                            <p className='text-slate8 text-xs'>-greater than 4s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].distributions[2].proportion * 100)}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full mt-20'>
                                            <h1 className='lg:w-[20%] font-bold lg:font-semibold text-lg lg:text-xl'>
                                                First Input Delay (FID)
                                            </h1>
                                            <div className='w-[60%] flex flex-col items-center justify-center'>
                                                <div className='text-blue9 font-bold text-xl'>
                                                    {data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].percentile}ms
                                                </div>
                                                <div id='barWithDiffColorsAsWidthPercentage' className='flex w-[250px] md:w-[300px] lg:w-[400px] h-1 rounded-full'>
                                                    {fidPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-green-500`} style={{ width: `${fidPercentileWidth[0]}%` }}></div>)
                                                    }
                                                    {fidPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-yellow-500`} style={{ width: `${fidPercentileWidth[1]}%` }}></div>)
                                                    }
                                                    {fidPercentileWidth.length > 0 &&
                                                        (<div className={` h-full bg-red-500`} style={{ width: `${fidPercentileWidth[2]}%` }}></div>)
                                                    }
                                                </div>
                                            </div>
                                            <div className='lg:w-[20%]'>
                                                <h1 className='font-bold lg:font-semibold text-slate9 text-sm lg:text-base'>Page load percentiles</h1>
                                                <div className='flex flex-col'>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-green-500 text-sm'>Good</p>
                                                            <p className='text-slate8 text-xs'>-less than 2.5s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[0].proportion * 100)}%
                                                    </div>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-yellow-500 text-sm'>Needs improvement</p>
                                                            <p className='text-slate8 text-xs'>-2.5s - 4s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[1].proportion * 100)}%
                                                    </div>
                                                    <div className='flex gap-4 '>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-red-500 text-sm'>Poor</p>
                                                            <p className='text-slate8 text-xs'>-greater than 4s</p>
                                                        </div>
                                                        {Math.round(data.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].distributions[2].proportion * 100)}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    (
                                        <div className='flex flex-col items-center text-center text-lg lg:text-4xl text-slate8 p-10'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-10 h-10 lg:w-20 lg:h-20">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                            Not enough sufficient real-world speed data to provide a core web vitals assesment.
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </>
                ) : (
                    <div className='flex flex-col items-center text-lg text-center lg:text-4xl text-slate8 p-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-10 h-10 lg:w-20 lg:h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        No search results
                    </div>
                )}
            </div>
            <div className='hidden {flex} flex-col gap-5 lg:gap-0 lg:justify-between lg:flex-row flex-wrap p-5'>
                {/** Card 1 */}
                <div className='flex items-center gap-10 border border-1 p-3 rounded-lg shadow-md lg:hover:shadow-xl w-[100%] lg:w-[20%]'>
                    <div className='border border-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
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
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">

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
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">

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
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">

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
        </div>
    )
}
export default InsightsSection;