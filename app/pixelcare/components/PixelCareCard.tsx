import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import ArrowButton from '@/app/components/ArrowButton';
import FeatureBulletPoint from './FeatureBulletPoint';
import PurchaseButton from '@/app/components/PurchaseButton';

type Props = {
    tier: any,
    price: string,
    frequency: string,
    buttonText: any,
    bgColor: any,
    point: any,
    point1: any,
    point2: any,
    point3: any,
    point4: any,
    point5: any,

}

const PixelCareCard = ({ tier, price, frequency, buttonText, bgColor , point, point1, point2, point3, point4, point5 }: Props) => {
    return (
        <div className={`md:flex md:justify-center md:flex-col p-10 lg:py-20 ${bgColor} shadow-lg w-[85%] md:w-[50%] lg:w-[400px] lg:max-w-[600px] transform transition-transform hover:scale-110 cursor-pointer`} id='PCcard'>
            <div className='flex flex-col items-center' id='TOP-HALF'>
                <h2 className='font-medium text-sm' id='text_gradient'>{tier}</h2>
                <div className='flex items-center justify-between'>
                    <h1 className='relative text-[32px]'>
                        <sup className='font-extrabold'>
                            $
                        </sup>
                        <span className='text-[45px] font-extrabold'>
                            {price}
                        </span>
                        <sup className='font-extrabold'>
                            .99
                        </sup>
                        <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                            /{frequency}
                        </sub>
                    </h1>
                </div>
                <div className='DESC'>
                    <p className='leading-tight text-xs font-light'>
                        *Terms apply
                    </p>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                    <FeatureBulletPoint points={point} />
                    <FeatureBulletPoint points={point1} />
                    <FeatureBulletPoint points={point2} />
                    <FeatureBulletPoint points={point3} />
                    <FeatureBulletPoint points={point4} />
                    <FeatureBulletPoint points={point5} />
                </div>
            </div>

            <div id='BOTTOM-HALF' className='w-full'>
                <div className='flex justify-center mt-10'>
                    <PurchaseButton />
                </div>
            </div>

        </div>
    )
}

export default PixelCareCard