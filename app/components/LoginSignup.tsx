'use client'
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import DashAvatar from '../dashboard/components/DashAvatar';
import DashFileUpload from '../dashboard/components/DashFileUpload';
import LabelDemo from './Label';

const LoginSignup = () => (
    <Tabs.Root
        className="flex flex-col w-[600px]"
        defaultValue="tab1"
    >
        <Tabs.List className="shrink-0 p-5 flex border-b border-mauve6" aria-label="Manage your account">
            <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                value="tab1"
            >
                Account
            </Tabs.Trigger>
            <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                value="tab2"
            >
                Avatar
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
            className="grow p-5 bg-slate6 rounded-b-md outline-none"
            value="tab1"
        >
            
            <div className='mb-10'>
                <LabelDemo label='First Name' defaultValue='First' />
            </div>
            <div>
                <LabelDemo label='Last Name' defaultValue='Last' />
            </div>
        </Tabs.Content>
        <Tabs.Content
            className="flex flex-col items-center grow p-5 bg-slate6 rounded-b-md outline-none"
            value="tab2"
        >
            
            <div>
                <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
            </div>
            {/*<div>
                <DashFileUpload />
            </div>*/}
            
        </Tabs.Content>
    </Tabs.Root>
);

export default LoginSignup;
