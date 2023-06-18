import React from 'react'
import FeatureBulletPoint from './FeatureBulletPoint';

type Props = {
    icon: any,
    heading: string,
    desc: any
}


const TierFeatures = ({ icon, heading, desc }: Props) => {
    return (
        <div>
            <div className='mb-3'>
                {icon}
            </div>

            <div className='font-medium mb-5'>
                {heading}
            </div>

            <div className='text-slate10 leading-relaxed text-sm'>
                {desc}
            </div>


        </div>
    )
}

export default TierFeatures;