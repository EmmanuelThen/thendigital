'use client'
import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Label from '@radix-ui/react-label';
import DashAvatar from '../dashboard/components/DashAvatar';
import DashFileUpload from '../dashboard/components/DashFileUpload';
import { useAvatar } from '@/context/AvatarContext';


const EditTabs = () => {
    const { avatar, changeAvatar } = useAvatar();

    const handleAvatarChange = (e: any) => {
        const file = e.target.files[0];
        changeAvatar(URL.createObjectURL(file))
    }

    return (
        <Tabs.Root
            className="flex flex-col w-[600px]"
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 p-5 flex border-b border-mauve6" aria-label="Manage your account">
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab1"
                >
                    Account
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab2"
                >
                    Avatar
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
                className="grow p-5 rounded-b-md outline-none flex"
                value="tab1"
            >

                <div className='mb-10'>

                    <div className="flex flex-wrap items-center gap-[15px] px-5">
                        <Label.Root className="text-[15px] font-medium" htmlFor="firstName">
                            First name
                        </Label.Root>
                        <input
                            className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                            type="text"
                            id="firstName"
                            placeholder='Enter first name'

                        />
                    </div>

                </div>
                <div>

                    <div className="flex flex-wrap items-center gap-[15px] px-5">
                        <Label.Root className="text-[15px] font-medium" htmlFor="firstName">
                            Last name
                        </Label.Root>
                        <input
                            className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                            type="text"
                            id="firstName"
                            placeholder='Enter last name'

                        />
                    </div>

                </div>
            </Tabs.Content>
            <Tabs.Content
                className="flex flex-col items-center grow p-5 rounded-b-md outline-none"
                value="tab2"
            >

                <div>
                    <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
                </div>
                <div className='flex justify-centermt-5'>
                    <input type="file" onChange={handleAvatarChange} />
                </div>
                {/*<div>
                <DashFileUpload />
            </div>*/}

            </Tabs.Content>
        </Tabs.Root>
    )
};

export default EditTabs;
