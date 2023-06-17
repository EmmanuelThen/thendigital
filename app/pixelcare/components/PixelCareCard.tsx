import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import ArrowButton from '@/app/components/ArrowButton';

type Props = {
    tier: string,
    price: string,
    frequency: string,
    ft1: string,
    ft2: string,
    ft3: string,
    ft4: string,
    buttonText: any

}

const PixelCareCard = ({tier, price, frequency, ft1, ft2, ft3, ft4, buttonText }: Props) => {
    return (
        <div className='p-10  bg-white shadow-lg w-[75%] transform transition-transform hover:scale-110 cursor-pointer' id='PixelCareCard'>
            <div id='TOP-HALF'>
                <h2 className='font-medium text-sm' id='text_gradient'>{tier}</h2>
                <div className='flex items-center justify-between'>
                    <p className='relative text-[32px]'>
                        <sup className='font-extrabold'>
                            $
                        </sup>
                        <span className='text-[45px] font-extrabold'>
                            {price}
                        </span>
                        <sub className='text-slate10 w-fit text-sm font-light tracking-tighter'>
                            /{frequency}
                        </sub>
                    </p>
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