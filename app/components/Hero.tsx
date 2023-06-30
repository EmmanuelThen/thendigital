import React from 'react'
import ShinyText from './ShinyText';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='flex'>
                <div className='mt-[100px] top-[150px] p-5 lg:p-20 lg:w-[50%]'>
                    <div className='flex md:justify-center text-[45px] md:text-[60px] md:text-center lg:text-left lg:text-[60px] font-semibold tracking-[-0.06em] lg:tracking-tight leading-[50px] lg:leading-[65px] lg:w-fit'>
                        <ShinyText
                            text={
                                <h1>Your vision, our<br></br> passion lets build<br></br> it together.</h1>
                            }
                        />
                    </div>
                    <p className=' font-medium leading-[30px] mt-5 md:text-center lg:text-left'>
                        Transforming your ideas into digital realities. From concept to launch, we bring your vision to life.
                        At ThenDigital we build websites that leave a lasting impact on your audience. Let us help you stand out in a crowded digital world.
                    </p>
                    <div className='mt-5 flex gap-5 md:justify-center lg:justify-start'>
                        {/*<button type='button' className='bg-red9 outline outline-red9 rounded-md p-2 text-slate2 shadow-[#262626]/40 shadow-[0px_8px_15px]'>
                            Get started
                        </button>
                        <button type='button' className='outline outline-1 outline-red9 rounded-md p-2 shadow-[#262626]/40 shadow-[0px_8px_15px]'>
                            Contact
                        </button>*/}
                        <button className='arrow shadow-lg  rounded-full bg-slate6 border border-1 py-3 px-8 opacity-60 hover:opacity-100'>
                            <Link className='font-semibold inline-flex items-center animate-backgroundShine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-3xl text-transparent' href='signin'>
                                Get started
                                <span id='big-arrow'>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='w-10 h-10 text-slate10 font-semibold'
                                    >
                                        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        >
                                        </path>
                                    </svg>
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='hidden absolute right-0 top-[50%] bottom-[50%] lg:flex justify-center w-[50%]'>
                    <p>Image</p>
                </div>
            </div>

        </>
    )
}

export default Hero;

