import React from 'react'
import DashMobileNavbar from './DashMobileNavbar'
import DashAccordion from './DashAccordion'
import ShinyText from '@/app/components/ShinyText'
import DashFileUpload from './DashFileUpload'
import * as Tabs from '@radix-ui/react-tabs';
import InboxSection from './InboxSection'
import MobileInboxSection from './MobileInboxSection'
import AccountSection from './AccountSection'
import MobileAccountSection from './MobileAccountSection'
type Props = {}

const MobileFullDashboard = (props: Props) => {
    return (
        <>
            <div className=''>
                <DashMobileNavbar />
            </div>
            <Tabs.Root defaultValue="tab1" orientation="vertical">
                <Tabs.List aria-label="tabs example" className='flex justify-between p-5 mt-5'>
                    <Tabs.Trigger value="tab1" className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'>Dashboard</Tabs.Trigger>
                    <Tabs.Trigger value="tab2" className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'>Messages</Tabs.Trigger>
                    <Tabs.Trigger value="tab3" className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'>Three</Tabs.Trigger>
                    <Tabs.Trigger value="tab4" className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'>Account</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <div>
                        {/** Mobile screen nav */}
                        <div id='greeting' className='p-5'>
                            <div className='text-center'>
                                <ShinyText text='Dashboard' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-10 p-2'>
                            <DashAccordion
                                title1='production tracker'
                                title2='PixelCare'
                                title3='order history'
                                title4='contracts & docs'
                                title5='Messages'
                                title6='performance'
                            />
                            <div>
                                <h1 className='flex justify-center'><ShinyText text='Any Questions?' /></h1>
                                <div className='flex justify-center'>
                                    <DashFileUpload />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="tab2">
                    <MobileInboxSection />
                </Tabs.Content>
                <Tabs.Content value="tab3">
                    Tab 3 content
                </Tabs.Content>
                <Tabs.Content value="tab4">
                    <MobileAccountSection />
                </Tabs.Content>
            </Tabs.Root>
        </>
    )
}

export default MobileFullDashboard