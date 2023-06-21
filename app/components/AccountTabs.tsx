'use client'
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface AccountInterface {
    firstTab: string
    secondTab: string
    firstTabContent: any
    secondTabContent: any
}

const AccountTabs = ({ firstTab, secondTab, firstTabContent, secondTabContent }: AccountInterface) => {

    return (
        <Tabs.Root
            className="rounded-lg border border-1 flex flex-col md:w-[500px] md:h-[700px] shadow-lg"
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab1"
                >
                    {firstTab}
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab2"
                >
                    {secondTab}
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
                className="flex flex-col items-center justify-center  grow p-5 bg-white rounded-b-md outline-none "
                value="tab1"
            >
                <div className='mb-[150px]'>logo</div>
                {firstTabContent}
            </Tabs.Content>
            <Tabs.Content
                className="flex flex-col items-center justify-center grow p-5 bg-white rounded-b-md outline-none "
                value="tab2"
            >
                
                {secondTabContent}
            </Tabs.Content>
        </Tabs.Root>
    )
};

export default AccountTabs;
