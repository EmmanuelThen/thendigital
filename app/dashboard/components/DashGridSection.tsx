import React from 'react';
import DashCards from './DashCards';
import PopoverButton from '@/app/components/PopoverButton';
import ShinyText from '@/app/components/ShinyText';
import DashPixelCare from './DashPixelCare';
import DashProgress from './DashProgress';
import DashProgressBottom from './DashProgressBottom';
import DashSpeedTest from './DashSpeedTest';
import DashSpeedTestBottom from './DashSpeedTestBottom';
import DashHoverButton from './DropDownMenuButton';
import DropDownMenuButton from './DropDownMenuButton';
import DashOrderHistory from './DashOrderHistory';
import DashFileUpload from './DashFileUpload';


type Props = {}

const DashGridSection = (props: Props) => {
    return (
        <div id='dashCards' className='w-full'>
            <div className="flex items-center justify-between ml-2 ">
                <ShinyText text="Dashboard" />
                <div className='notificationBell relative'>
                    <div id='notificationDot' className='absolute h-[12px] w-[12px] bg-red9 rounded-full right-0 top-0' />
                    <PopoverButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    }
                    />
                </div>
            </div>

            <div id='cardGrid' className='flex flex-wrap justify-center gap-5 {w-[1275px]} overflow-y-scroll'>
                <div>
                    <DashCards
                        cardTitle='production tracker'
                        mainSection={<DashProgress />}
                        bgColor='bg-white'
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle={
                            <>
                                <div id='text_gradient'>PixelCare</div>
                            </>
                        }
                        mainSection={<DashPixelCare />}
                        bgColor='animate-backgroundShine bg-[linear-gradient(115deg,#ffffff,45%,#e6e6e6,55%,#ffffff)] bg-[length:250%_100%] bg-transparent'
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='Order History'
                        mainSection={<DashOrderHistory />}
                        bgColor='bg-white'
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='Contracts & Docs'
                        mainSection={<DashSpeedTest />}
                        bgColor='bg-white'
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='production tracker'
                        mainSection={<DashSpeedTest />}
                        bgColor='bg-white'
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='Technical Support'
                        mainSection={<DashFileUpload />}
                        bgColor='bg-white'
                    />
                </div>
            </div>

        </div>
    )
}

export default DashGridSection