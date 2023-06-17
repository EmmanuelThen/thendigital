import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='flex'>
                <div className='absolute top-[150px] p-5 lg:p-20 lg:w-[50%]'>
                    <div className='flex md:justify-center text-[45px] md:text-[60px] md:text-center lg:text-left lg:text-[60px] font-semibold tracking-[-0.06em] lg:tracking-tight leading-[50px] lg:leading-[65px] lg:w-fit'>
                        <h1>Your vision, our<br></br> passion lets build<br></br> it together.</h1>
                    </div>
                    <p className='text-slate11 font-medium leading-[30px] mt-5 md:text-center lg:text-left'>
                        Transforming your ideas into digital realities. From concept to launch, we bring your vision to life.
                        At ThenDigital we build websites that leave a lasting impact on your audience. Let us help you stand out in a crowded digital world.
                    </p>
                    <div className='mt-5 flex gap-5 md:justify-center lg:justify-start'>
                        <button type='button' className='bg-red9 outline outline-red9 rounded-md p-2 text-slate2 shadow-[#262626]/40 shadow-[0px_8px_15px]'>
                            Get started
                        </button>
                        <button type='button' className='outline outline-1 outline-red9 rounded-md p-2 shadow-[#262626]/40 shadow-[0px_8px_15px]'>
                            Contact
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

