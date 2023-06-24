import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/app/components/ShinyText';
import PopoverButton from '@/app/components/PopoverButton';
import DashAvatar from './DashAvatar';

type Props = {}

const AccountSection = (props: Props) => {
    return (
        <div>
            <div className=" flex items-center justify-between ml-2 w-[1275px] 2xl:w-[1685px] {4xl:w-[2209px]}">
                <ShinyText text="Account" />
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
            <Tabs.Root className='mt-10' defaultValue="tab1" orientation="vertical">
                <Tabs.List aria-label="tabs example">
                    <div className='flex items-center gap-20'>
                        <Tabs.Trigger value="tab1" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer'>
                            My Profile
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab2" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer'>
                            Billing
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab3" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer'>
                            PixelCare
                        </Tabs.Trigger>
                    </div>
                </Tabs.List>
                <Tabs.Content className='p-10' value="tab1">
                    <div className='flex rounded-lg border border-1 shadow-lg'>
                        <div className=' p-5'>
                            <DashAvatar
                            iconHeight='h-[60px]'
                            iconWidth='w-[60px]'
                            />
                        </div>
                        <div className='flex flex-col gap-3 p-5'>
                            <h1 className='font-medium'>Client Name</h1>
                            
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="tab2">Tab two content</Tabs.Content>
                <Tabs.Content value="tab3">Tab three content</Tabs.Content>
            </Tabs.Root>

        </div>
    )
}

export default AccountSection