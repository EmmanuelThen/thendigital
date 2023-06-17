import React from 'react'
import Navbar from '../components/Navbar';
import SubTiers from '../components/SubTiers';
import PixelCareCard from './components/PixelCareCard';
import TierFeatures from './components/TierFeatures';
import { GlobeIcon } from '@radix-ui/react-icons';

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full mx-[auto]'>
            <div className=''>
                <Navbar />
            </div>

            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="morph relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3EB489] to-[#67d0fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"

                    />
                </div>
            </div>

            <div className='  pb-[1.5em] leading-[50px] text-[30px] z-[10] '>
                <div className=' flex flex-col items-center justify-center font-light '>
                    <h1>Secure your investment</h1>
                    <h1>the correct way</h1>
                    <h1>Introducing <span id='text_gradient'>PixelCare.</span></h1>
                </div>
            </div>

            <div className='flex justify-center p-6'>
                <PixelCareCard
                    tier='PixelCare'
                    price='199'
                    frequency='month'
                    ft1='Hosting features'
                    ft2='1 feature update'
                    ft3='feature'
                    ft4='feature'
                    buttonText='Purchase'
                />
            </div>

            <div className=' flex flex-col gap-20 p-6'>
                <TierFeatures
                    icon={<GlobeIcon />}
                    heading='Hosting Maintenance & Optimization'
                />
                <TierFeatures
                    icon={<GlobeIcon />}
                    heading='Feature Enhancements & Updates'
                />
                <TierFeatures
                    icon={<GlobeIcon />}
                    heading='Featurefeaturefeaturefeaturefeat'
                />
                <TierFeatures
                    icon={<GlobeIcon />}
                    heading='Featurefeaturefeaturefeaturefeat'
                />
            </div>
        </div>
    )
}

export default page;