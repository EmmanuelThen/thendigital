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


type Props = {}

const DashGridSection = (props: Props) => {
    return (
        <div id='dashCards' className='flex flex-col p-5 w-full overflow-y-hidden'>
            <div id='topBar-dashCards' className='flex justify-between items-center w-full mb-2'>
                <h1>
                    <ShinyText text='Welcome Client Name' />
                </h1>
                <div className='flex items-center gap-5 mr-2'>
                    <div className='notificationBell relative'>
                        <div id='notificationDot' className='absolute h-[12px] w-[12px] bg-red9 rounded-full right-0 top-0' />
                        <PopoverButton icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        }
                        />
                    </div>
                    {/*<div className='flex justify-center items-center'>
                        <DropDownMenuButton />
                    </div>*/}
                </div>
            </div>
            <div id='cardGrid' className='grid grid-cols-3 gap-5 w-full h-full'>
                <div>
                    <DashCards
                        cardTitle='production tracker'
                        mainSection={<DashProgress />}

                        bgColor=''
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

                        bgColor=''
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='production tracker'
                        mainSection={<DashSpeedTest />}

                        bgColor=''
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='production tracker'
                        mainSection={<DashSpeedTest />}

                        bgColor=''
                    />
                </div>
                <div>
                    <DashCards
                        cardTitle='website performance'
                        mainSection={<DashSpeedTest />}

                        bgColor=''
                    />
                </div>
            </div>
        </div>
    )
}

export default DashGridSection