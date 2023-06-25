import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/app/components/ShinyText';
import PopoverButton from '@/app/components/PopoverButton';
import DashAvatar from './DashAvatar';
import DialogButton from '@/app/components/DialogButton';
import Toggle from '@/app/components/Toggle';
import EditTabs from '@/app/components/EditTabs';
import DashPixelCare from './DashPixelCare';
import SubTiers from '@/app/components/SubTiers';
import AccountToggle from './AccountToggle';

type Props = {}

const AccountSection = (props: Props) => {
    const [defaultChecked, setDefaultChecked] = useState(true);
    const [checked, setChecked] = useState(true)

    const handleToggleAllButton = () => {
        setChecked(!checked);
        setDefaultChecked(checked);
    }
    
    const handleCheckedChange = (boolean) => {
        if (boolean) {
            setChecked(!checked);
        } else {
            setChecked(checked)
        }
    }
    const [onCheckedChange, setOnCheckedChange] = useState(handleCheckedChange);
    

    return (
        <div className=''>
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
                <Tabs.List className='flex items-center gap-20 ml-2' aria-label="tabs">
                    <Tabs.Trigger value="tab1" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state hover:cursor-pointer'>
                        My Profile
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab2" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state hover:cursor-pointer'>
                        Billing
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab3" className='text-2xl data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state hover:cursor-pointer'>
                        PixelCare
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab4" className='text-2xl text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state hover:cursor-pointer'>
                        Delete Account
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <div className='flex flex-col gap-5 p-10'>
                        {/** First Card */}
                        <div className='flex justify-between items-center rounded-lg border border-1 shadow-lg'>
                            <div className='flex'>
                                <div className=' p-5'>
                                    <DashAvatar
                                        iconHeight='h-[100px]'
                                        iconWidth='w-[100px]'
                                    />
                                </div>
                                <div className='flex flex-col justify-center p-5'>
                                    <h1 className='font-medium'>Client Name</h1>
                                    <h2 className='text-slate10 font-light'>Member</h2>
                                    <h3 id='text_gradient'>Pixelcare Tier</h3>{/** Only if they are a member */}
                                </div>
                            </div>
                            <div className='mr-5'>
                                <DialogButton
                                    onClickfunction=''
                                    disabled=''
                                    content={<EditTabs />}
                                    saveButton='Save changes'
                                    saveButtonColor='bg-blue9'
                                    buttonText={
                                        <>
                                            <div className='hover:cursor-pointer bg-blue9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                Edit
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </div>
                                        </>
                                    }
                                    dialogTitle='Edit Profile'
                                    dialogDesc={`Edit your profile below.`}
                                />
                            </div>
                        </div>
                        {/** Second Card */}
                        <div className='rounded-lg border border-1 shadow-lg p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-medium'>Personal Information</h1>
                                <div className=''>
                                    <DialogButton
                                        onClickfunction=''
                                        disabled=''
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonText={
                                            <>
                                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                    Edit
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </div>
                                            </>
                                        }
                                        dialogTitle='Personal Information'
                                        dialogDesc={`Edit your personal information below.`}
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between w-[50%]'>
                                <div className='flex flex-col justify-between'>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-medium mb-1'>First Name</h1>
                                        <p>clientFirst</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-medium mb-1 '>Last Name</h1>
                                        <p>clientLast</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between '>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-medium mb-1'>Email address</h1>
                                        <p>ClientEmail@gmail.com</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-medium mb-1 '>Phone</h1>
                                        <p>718-123-1232</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** Third Card */}
                        <div className='rounded-lg border border-1 shadow-lg p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-medium'>Email Notifications</h1>
                                {/** Toggle all button */}
                                <button onClick={handleToggleAllButton} type='button' className='hover:cursor-pointer bg-blue9 hover:bg-blue9/80 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                    Toggle all
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex justify-between w-[50%]'>
                                <div className='flex flex-col gap-10 justify-between'>
                                    <div className=''>
                                        <Toggle
                                            label={
                                                <>
                                                    <div>
                                                        <h1 className='font-medium'>Marketing emails</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Monthly marketing emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={onCheckedChange}
                                            checked={checked}
                                        />
                                    </div>
                                    <div className=''>
                                        <Toggle
                                            label={
                                                <>
                                                    <div>
                                                        <h1 className='font-medium'>Production emails</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Weekly production emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={onCheckedChange}
                                            checked={checked}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-10 justify-between'>
                                    <div className=''>
                                        <Toggle
                                            label={
                                                <>
                                                    <div>
                                                        <h1 className='font-medium'>Something emails</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Something emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={onCheckedChange}
                                            checked={checked}
                                        />
                                    </div>
                                    <div className=''>
                                        <Toggle
                                            label={
                                                <>
                                                    <div>
                                                        <h1 className='font-medium'>Something emails</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Something emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={onCheckedChange}
                                            checked={checked}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>

                {/** Billing Tab */}
                <Tabs.Content value="tab2">
                    <div className='flex flex-col gap-5 p-10'>
                        <div className='flex justify-between items-center rounded-lg border border-1 shadow-lg'>
                            <div className='flex'>
                                <div className=' p-5'>
                                    <div className='rounded-sm border border-1 p-10 px-20'>
                                        card
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center p-5'>
                                    <h1 className='font-medium'>Card on file</h1>
                                    <h2 className='text-slate10 font-light'>Exp.</h2>
                                    <h3 className='text-slate10'>Next billing date</h3>{/** Only if they are a member */}
                                </div>
                            </div>
                            <div className='mr-5'>
                                <DialogButton
                                    onClickfunction=''
                                    disabled=''
                                    content=''
                                    saveButton='Save changes'
                                    saveButtonColor='bg-blue9'
                                    buttonText={
                                        <>
                                            <div className='hover:cursor-pointer bg-blue9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                Edit
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </div>
                                        </>
                                    }
                                    dialogTitle='Edit Profile'
                                    dialogDesc={`Edit your profile below.`}
                                />
                            </div>
                        </div>
                        <div className='rounded-lg border border-1 shadow-lg p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-medium'>Personal Information</h1>
                                <div className=''>
                                    <DialogButton
                                        onClickfunction=''
                                        disabled=''
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonText={
                                            <>
                                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                    Edit
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </div>
                                            </>
                                        }
                                        dialogTitle='Personal Information'
                                        dialogDesc={`Edit your personal information below.`}
                                    />
                                </div>
                            </div>
                            {/** Third Card */}
                            <div className='flex justify-between w-[50%]'>
                                <div className='flex flex-col justify-between'>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-medium mb-1'>First Name</h1>
                                        <p>clientFirst</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-medium mb-1 '>Last Name</h1>
                                        <p>clientLast</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between '>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-medium mb-1'>Email address</h1>
                                        <p>ClientEmail@gmail.com</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-medium mb-1 '>Phone</h1>
                                        <p>718-123-1232</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>

                {/** PixelCare Tab */}
                <Tabs.Content value="tab3">
                    <SubTiers />
                </Tabs.Content>
                <Tabs.Content value="tab4">Tab four content</Tabs.Content>
            </Tabs.Root>

        </div>
    )
}

export default AccountSection