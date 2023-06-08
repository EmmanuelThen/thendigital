import React from 'react'
import { GlobeIcon } from '@radix-ui/react-icons'

type Props = {}

const GridAnimation = (props: Props) => {
    return (
        <div className='grid-container flex justify-center'>
            <div className="grid-wrapper flex flex-col items-center w-[540px] outline">
                <div className='flex'>
                    <GlobeIcon />
                </div>
                <div className='flex gap-10'>
                    <div>
                        <GlobeIcon />
                    </div>
                    <div className='flex'>
                        <GlobeIcon />
                        <GlobeIcon />
                    </div>
                </div>

                <div className='flex '>
                    <div className='flex ml-3'>
                        <GlobeIcon />
                        <GlobeIcon />
                        <GlobeIcon />
                    </div>
                    <div className='ml-4'>
                        <GlobeIcon />
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <GlobeIcon />
                    </div>
                    <div>
                        <GlobeIcon />
                    </div>
                </div>

                <div className='flex'>
                    <GlobeIcon />
                </div>
                <div className='flex'>
                    <GlobeIcon />
                </div>
                <div className='flex'>
                    <GlobeIcon />
                </div>

            </div>
        </div>
    )
}

export default GridAnimation