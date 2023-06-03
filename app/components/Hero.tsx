import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='color-change-5x flex gap-10 opacity-50 h-[400px] -skew-y-12 z-[2]'>
                <div className='color-change h-5 w-5 rounded-full' />
                <div className='color-change h-5 w-5 rounded-full' />
                <div className='color-change h-5 w-5 rounded-full' />
                <div className='color-change h-5 w-5 rounded-full' />
                <div className='color-change h-5 w-5 rounded-full' />
                <div className='color-change h-5 w-5 rounded-full' />
            </div>

            <div className='absolute outline z-[3]'>
                <h1 className=''></h1>
            </div>
        </>
    )
}

export default Hero