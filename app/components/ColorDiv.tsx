import React from 'react'

type Props = {}

const ColorDiv = (props: Props) => {
    return (
        <>
            <div className='color-change-5x flex flex-col gap-10 opacity-50 h-[625px] w-full -skew-y-[12deg] z-[0] blur-[10px]'>
                <div className='flex flex-col'>
                    <div className='morph h-[20px] min-w-[200px] rounded-full z-[1]' />
                </div>
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div className='morph h-[20px] min-w-[20px] rounded-full z-[1]' />
                <div>
                    <div className='morph h-[20px] min-w-[200px] rounded-full z-[1]' />
                </div>
                <div>
                    <div className='morph h-[20px] min-w-[200px] rounded-full z-[1]' />
                </div>
                <div>
                    <div className='morph h-[20px] min-w-[200px] rounded-full z-[1]' />
                </div>
                <div>
                    <div className='morph h-[20px] min-w-[200px] rounded-full z-[1]' />
                </div>
            </div>
        </>
    )
}

export default ColorDiv