import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import ArrowButton from '@/app/components/ArrowButton';

type Props = {
    tier: any,
    price: string,
    frequency: string,
    buttonText: any,
    bgColor: any

}

const PixelCareCard = ({ tier, price, frequency, buttonText, bgColor }: Props) => {
    return (
        <div className={`md:flex md:justify-center p-10 ${bgColor} shadow-lg w-[85%] md:w-[50%] lg:max-w-[600px] border border-1 rounded-lg transform transition-transform hover:scale-110 cursor-pointer`} id='PixelCareCard'>
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
            </div>

            <div id='BOTTOM-HALF' className='w-full'>
                <div className='flex justify-center mt-10'>
                    <ArrowButton buttonText={buttonText} href='/pixelcare' />
                </div>
            </div>

        </div>
    )
}

export default PixelCareCard