import React from 'react'
import ShinyText from './ShinyText';
import Link from 'next/link';
import HeroSVG from './HeroSVG';

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='flex'>
                <div className='mt-[100px] top-[150px] p-5 lg:p-20 lg:w-[50%]'>
                    <div className='flex md:justify-center text-[45px] md:text-[60px] md:text-center lg:text-left lg:text-[60px] font-semibold tracking-[-0.06em] lg:tracking-tight leading-[50px] lg:leading-[65px] lg:w-fit'>
                        <ShinyText
                            text={
                                <h1 className='text-[45px] lg:text-[70px]'>
                                    Your vision, our<br></br> passion lets build<br></br> it together.
                                </h1>
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
                        <button className='shadow-lg rounded-lg bg-blue9 py-3 w-[153px] lg:w-[230px] px-8 hover:bg-[#3fcf8e]'>
                            <Link className='font-semibold inline-flex items-center animate-backgroundShine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-md lg:text-3xl text-transparent' href='signin'>
                                Get started  
                            </Link>
                        </button>
                        <button className='shadow-lg rounded-lg bg-red9 py-3 w-[153px] lg:w-[230px] px-8 hover:bg-[#3fcf8e]'>
                            <Link className='font-semibold inline-flex items-center animate-backgroundShine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-md lg:text-3xl text-transparent' href='signin'>
                                Pricing  
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='hidden absolute right-0 top-[50%] bottom-[50%] lg:flex justify-center items-center w-[50%]'>
                    <HeroSVG />
                </div>
            </div>

        </>
    )
}

export default Hero;

