import React from 'react'
import FeatureBulletPoint from './FeatureBulletPoint';

type Props = {
    icon: any,
    heading: string,
    desc: any
}


const TierFeatures = ({ icon, heading, desc }: Props) => {
    return (
        <div className='h-full w-full md:py-5 md:px-20'>
            <div className='mb-3'>
                {icon}
            </div>

            <div className='font-medium mb-5 md:text-xl'>
                {heading}
            </div>

            <div className='text-slate10 leading-relaxed text-sm md:text-base '>
                {desc}
            </div>
        </div>
    )
}

export default TierFeatures;