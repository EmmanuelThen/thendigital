import React from 'react'
import FeatureBulletPoint from './FeatureBulletPoint';

type Props = {
    icon: any,
    heading: string,
}


const TierFeatures = ({ icon, heading }: Props) => {
    return (
        <div>
            <div className='mb-3'>
                {icon}
            </div>

            <div className='font-medium mb-5'>
                {heading}
            </div>

            <div className=''>
                <FeatureBulletPoint
                    points='Fast reliable hosting'
                />
                <FeatureBulletPoint
                    points='Fast reliable hosting'
                />
                <FeatureBulletPoint
                    points='Fast reliable hosting'
                />
                <FeatureBulletPoint
                    points='Fast reliable hosting'
                />
                <FeatureBulletPoint
                    points='Fast reliable hosting'
                />
            </div>


        </div>
    )
}

export default TierFeatures;