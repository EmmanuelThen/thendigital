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
import BillingHistoryTable from './BillingHistoryTable';

type Props = {}

const AccountSection = (props: Props) => {
    const [checked, setChecked] = useState([true, true, true, true]);

    const handleToggleAllButton = () => {
        const updatedChecked = checked.map(value => !value);
        setChecked(updatedChecked);
    };

    const handleToggle = (i: any) => {
        const updatedChecked = [...checked];
        updatedChecked[i] = !updatedChecked[i];
        setChecked(updatedChecked);
    };




    return (
        <div className=''>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Account" />
                </div>
                <div className='hidden lg:block notificationBell relative'>
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
                <Tabs.List className='flex lg:items-center lg:gap-20 lg:ml-2 shrink-0 justify-around p-5 w-full' aria-label="tabs">
                    <Tabs.Trigger value="tab1" className=' text-xs lg:text-base lg:uppercase lg:tracking-[5px] text-gray-500 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current hover:cursor-pointer'>
                        My Profile
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab2" className=' text-xs lg:text-base lg:uppercase lg:tracking-[5px] text-gray-500 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current hover:cursor-pointer'>
                        Membership & Billing
                    </Tabs.Trigger>

                    <Tabs.Trigger value="tab4" className=' text-xs lg:text-base lg:uppercase lg:tracking-[5px] text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state hover:cursor-pointer'>
                        Delete Account
                    </Tabs.Trigger>
                </Tabs.List>




                <Tabs.Content value="tab1">
                    <div className='flex flex-col gap-5 p-5 lg:p-10 {overflow-y-scroll}'>
                        {/** First Card */}
                        <div id='back-ground' className='flex justify-between items-center rounded-lg shadow-blackA9 shadow-[0_4px_7px]'>
                            <div className='flex'>
                                <div className=' p-5'>
                                    avatar
                                </div>
                                <div className='flex flex-col justify-center p-2 text-xs lg:text-base lg:p-5'>
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
                                            <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
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
                        <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-semibold'>Personal Information</h1>
                                <div className=''>
                                    <DialogButton
                                        onClickfunction=''
                                        disabled=''
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonText={
                                            <>
                                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
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
                            <div className='flex justify-between lg:w-[50%]'>
                                <div className='flex flex-col justify-between'>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-semibold mb-1'>First Name</h1>
                                        <p>clientFirst</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-semibold mb-1 '>Last Name</h1>
                                        <p>clientLast</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between '>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-semibold mb-1'>Email address</h1>
                                        <p>ClientEmail@gmail.com</p>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-semibold mb-1 '>Phone</h1>
                                        <p>718-123-1232</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** Third Card */}
                        <div id='back-ground' className='rounded-lg  shadow-blackA9 shadow-[0_4px_7px] p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-semibold text-xs lg:text-base'>Email Notifications</h1>
                                {/** Toggle all button */}
                                <button onClick={handleToggleAllButton} type='button' className='hover:cursor-pointer bg-blue9 hover:bg-blue9/80 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                    Toggle all
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                    </svg>

                                </button>
                            </div>
                            <div className='flex flex-col lg:flex lg:justify-between lg:w-[50%]'>
                                <div className=' flex flex-col  justify-between'>
                                    <div className='mb-3 lg:mb-0 lg:mr-5'>
                                        <Toggle
                                            label={
                                                <>
                                                    <div className='mb-2 text-xs lg:text-base'>
                                                        <h1 className='font-semibold'>Marketing </h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Monthly marketing emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={() => handleToggle(0)}
                                            checked={checked[0]}
                                        />
                                    </div>
                                    <div className='mb-3 lg:mb-0 lg:mr-5'>
                                        <Toggle
                                            label={
                                                <>
                                                    <div className='mb-2 text-xs lg:text-base'>
                                                        <h1 className='font-semibold'>Production</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Weekly production emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={() => handleToggle(1)}
                                            checked={checked[1]}
                                        />
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-between'>
                                    <div className='mb-3 lg:mb-0 lg:mr-5'>
                                        <Toggle
                                            label={
                                                <>
                                                    <div className='mb-2 text-xs lg:text-base'>
                                                        <h1 className='font-semibold'>Something</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Something emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={() => handleToggle(2)}
                                            checked={checked[2]}
                                        />
                                    </div>
                                    <div className='mb-3 lg:mb-0 lg:mr-5'>
                                        <Toggle
                                            label={
                                                <>
                                                    <div className='mb-2 text-xs lg:text-base'>
                                                        <h1 className='font-semibold'>Something</h1>
                                                        <p className='mt-1 text-[10px] text-slate8'>Something emails</p>
                                                    </div>
                                                </>
                                            }
                                            onCheckedChange={() => handleToggle(3)}
                                            checked={checked[3]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>

                {/** Billing Tab */}
                <Tabs.Content value="tab2">
                    <div className='flex flex-col gap-5 p-5 lg:p-10'>
                        {/** Card One Billing */}
                        <div id='back-ground' className='flex justify-between items-center rounded-lg shadow-blackA9 shadow-[0_4px_7px]'>
                            <div className='flex'>
                                <div className='p-5'>
                                    <div>
                                        <svg className='w-20 h-20 lg:w-[100px] lg:h-[100px]' viewBox="0 0 425 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="774" height="420" fill="none" />
                                            <g id="credit-card-svg" clip-path="url(#clip0_0_1)">
                                                <path id="bottom-section" d="M420 221.693V222.603C419.999 230.961 416.677 238.977 410.766 244.886C404.855 250.795 396.838 254.114 388.48 254.113H32.71C24.3533 254.112 16.3391 250.792 10.4301 244.883C4.52104 238.974 1.20102 230.96 1.20023 222.603V221.693H420Z" fill="#F2F2F2" />
                                                <path id="leafe" d="M75.6098 71.6929C49.8998 78.0429 26.8199 58.2629 22.79 39.9129L24.58 39.5929C46.25 34.8029 70.4399 50.2928 75.6098 71.6929Z" fill="hsl(206 100% 50.0%)" />
                                                <path id="chip-outline" d="M323.218 203.043C317.475 203.043 312.908 201.335 309.642 197.966C302.26 190.351 302.722 175.672 303.094 163.878C303.202 160.447 303.304 157.206 303.201 154.491L303.2 154.45C303.226 149.145 305.344 144.066 309.094 140.314C312.844 136.562 317.923 134.441 323.227 134.413H370.843C376.579 134.413 381.142 136.118 384.406 139.483C391.787 147.092 391.33 161.767 390.962 173.558C390.855 176.997 390.754 180.245 390.859 182.964C390.841 188.277 388.725 193.366 384.973 197.127C381.22 200.887 376.135 203.013 370.823 203.043H323.218ZM305.2 154.436C305.305 157.215 305.202 160.482 305.093 163.941C304.733 175.358 304.286 189.567 311.078 196.574C313.993 199.581 317.964 201.043 323.218 201.043H370.82C375.597 201.018 380.171 199.109 383.549 195.73C386.927 192.352 388.835 187.777 388.86 183C388.753 180.252 388.855 176.97 388.963 173.496C389.319 162.081 389.761 147.876 382.97 140.875C380.057 137.872 376.09 136.413 370.843 136.413H323.23C318.458 136.439 313.888 138.346 310.513 141.72C307.138 145.094 305.229 149.663 305.2 154.436Z" fill="#3F3D56" />
                                                <path id="leaf-outline" d="M65.0901 73.5331C56.7409 73.4825 48.5733 71.0903 41.5161 66.6284C31.1774 60.204 23.371 49.915 21.1434 39.7778L20.9202 38.7617L23.7141 38.2617C45.7073 33.4077 70.5829 49.0497 75.912 71.0981L76.1456 72.0649L75.1801 72.3036C71.8789 73.1206 68.4908 73.5335 65.0901 73.5331ZM23.3387 40.3608C25.7385 49.6601 33.0217 58.9951 42.5717 64.9297C51.8053 70.8389 62.995 72.8733 73.7176 70.5923C68.1421 50.0508 44.7951 35.6362 24.1264 40.2193L23.3387 40.3608Z" fill="#3F3D56" />
                                                <path id="pill" d="M37.3476 187.175C30.805 187.175 25.4896 184.248 22.369 178.907C20.6199 175.8 19.7005 172.294 19.6994 168.729C19.6983 165.163 20.6155 161.657 22.3627 158.549C25.5332 153.117 30.9753 150.17 37.6964 150.273H101.14C107.838 150.187 113.285 153.121 116.457 158.56C118.204 161.667 119.122 165.172 119.122 168.737C119.122 172.302 118.203 175.807 116.455 178.915C113.284 184.34 107.839 187.238 101.125 187.173H37.6802C37.569 187.174 37.4581 187.175 37.3476 187.175ZM37.3848 152.27C31.55 152.27 26.8369 154.851 24.09 159.557C22.516 162.357 21.6897 165.516 21.6908 168.728C21.6918 171.94 22.5201 175.098 24.096 177.897C26.8892 182.679 31.6989 185.267 37.6652 185.173H101.14C107.113 185.268 111.937 182.681 114.729 177.905C116.303 175.106 117.13 171.948 117.131 168.736C117.131 165.525 116.304 162.367 114.73 159.567C111.937 154.779 107.111 152.201 101.154 152.273H37.6754C37.5785 152.271 37.4811 152.27 37.3848 152.27Z" fill="#3F3D56" />
                                                <path id="chip-1" d="M339.5 158.193H319.5C318.174 158.193 316.902 157.666 315.964 156.728C315.027 155.791 314.5 154.519 314.5 153.193C314.5 151.867 315.027 150.595 315.964 149.657C316.902 148.72 318.174 148.193 319.5 148.193H339.5C340.826 148.193 342.098 148.72 343.035 149.657C343.973 150.595 344.5 151.867 344.5 153.193C344.5 154.519 343.973 155.791 343.035 156.728C342.098 157.666 340.826 158.193 339.5 158.193Z" fill="#FFD700" />
                                                <path id="chip-2" d="M339.5 174.193H319.5C318.174 174.193 316.902 173.666 315.964 172.728C315.027 171.791 314.5 170.519 314.5 169.193C314.5 167.867 315.027 166.595 315.964 165.657C316.902 164.72 318.174 164.193 319.5 164.193H339.5C340.826 164.193 342.098 164.72 343.035 165.657C343.973 166.595 344.5 167.867 344.5 169.193C344.5 170.519 343.973 171.791 343.035 172.728C342.098 173.666 340.826 174.193 339.5 174.193Z" fill="#FFD700" />
                                                <path id="chip-3" d="M339.5 190.193H319.5C318.174 190.193 316.902 189.666 315.964 188.728C315.027 187.791 314.5 186.519 314.5 185.193C314.5 183.867 315.027 182.595 315.964 181.657C316.902 180.72 318.174 180.193 319.5 180.193H339.5C340.826 180.193 342.098 180.72 343.035 181.657C343.973 182.595 344.5 183.867 344.5 185.193C344.5 186.519 343.973 187.791 343.035 188.728C342.098 189.666 340.826 190.193 339.5 190.193Z" fill="#FFD700" />
                                                <path id="chip-4" d="M374.5 158.193H354.5C353.174 158.193 351.902 157.666 350.964 156.728C350.027 155.791 349.5 154.519 349.5 153.193C349.5 151.867 350.027 150.595 350.964 149.657C351.902 148.72 353.174 148.193 354.5 148.193H374.5C375.826 148.193 377.098 148.72 378.035 149.657C378.973 150.595 379.5 151.867 379.5 153.193C379.5 154.519 378.973 155.791 378.035 156.728C377.098 157.666 375.826 158.193 374.5 158.193Z" fill="#FFD700" />
                                                <path id="chip-5" d="M374.5 174.193H354.5C353.174 174.193 351.902 173.666 350.964 172.728C350.027 171.791 349.5 170.519 349.5 169.193C349.5 167.867 350.027 166.595 350.964 165.657C351.902 164.72 353.174 164.193 354.5 164.193H374.5C375.826 164.193 377.098 164.72 378.035 165.657C378.973 166.595 379.5 167.867 379.5 169.193C379.5 170.519 378.973 171.791 378.035 172.728C377.098 173.666 375.826 174.193 374.5 174.193Z" fill="#FFD700" />
                                                <path id="chip-6" d="M374.5 190.193H354.5C353.174 190.193 351.902 189.666 350.964 188.728C350.027 187.791 349.5 186.519 349.5 185.193C349.5 183.867 350.027 182.595 350.964 181.657C351.902 180.72 353.174 180.193 354.5 180.193H374.5C375.826 180.193 377.098 180.72 378.035 181.657C378.973 182.595 379.5 183.867 379.5 185.193C379.5 186.519 378.973 187.791 378.035 188.728C377.098 189.666 375.826 190.193 374.5 190.193Z" fill="#FFD700" />
                                                <path id="line" d="M420 87.1338H1.2002V89.1338H420V87.1338Z" fill="#3F3D56" />
                                                <path id="card-shape" d="M387 254.693H33C24.2509 254.683 15.863 251.203 9.67639 245.016C3.48983 238.83 0.00988299 230.442 0 221.693V49.6928C0.00988299 40.9437 3.48983 32.5558 9.67639 26.3692C15.863 20.1827 24.2509 16.7027 33 16.6928H387C395.749 16.7027 404.137 20.1827 410.324 26.3692C416.51 32.5558 419.99 40.9437 420 49.6928V221.693C419.99 230.442 416.51 238.83 410.324 245.016C404.137 251.203 395.749 254.683 387 254.693ZM33 18.6928C24.7812 18.7022 16.9016 21.9713 11.09 27.7829C5.27839 33.5945 2.00934 41.474 2 49.6928V221.693C2.00934 229.912 5.27841 237.791 11.09 243.603C16.9016 249.414 24.7812 252.684 33 252.693H387C395.219 252.684 403.098 249.414 408.91 243.603C414.722 237.791 417.991 229.912 418 221.693V49.6928C417.991 41.474 414.722 33.5944 408.91 27.7828C403.098 21.9712 395.219 18.7022 387 18.6928H33Z" fill="#3F3D56" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_1">
                                                    <rect width="773.979" height="419.084" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center p-5 text-xs lg:text-base'>
                                    <h1 className='font-medium'>Visa ending in 1234</h1>
                                    <h2 className='text-slate10 font-light'>Exp. 06/13/25</h2>
                                    <h3 className='text-slate10'>Exp.</h3>
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
                                            <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
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
                        {/** Card Two Billing*/}
                        <div id='back-ground' className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] p-5'>
                            <div className='flex justify-between mb-10'>
                                <h1 className='text-blue9 font-semibold text-xs lg:text-base'>Membership Information</h1>
                                <div className=''>
                                    <DialogButton
                                        onClickfunction=''
                                        disabled=''
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonText={
                                            <>
                                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                                    Edit
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </div>
                                            </>
                                        }
                                        dialogTitle='Membership Information'
                                        dialogDesc={`Edit your personal information below.`}
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between text-xs lg:text-base lg:w-[50%]'>
                                <div className='flex flex-col justify-between'>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-semibold mb-1'>Plan</h1>
                                        <p className='mb-1' id='text_gradient'>PixelCare Tier</p>
                                        {/** Div with both buttons in them */}
                                        <div className='flex gap-3'>
                                            <DialogButton
                                                onClickfunction=''
                                                disabled=''
                                                saveButton='Purchase'
                                                saveButtonColor='bg-blue9'
                                                buttonText={
                                                    <>
                                                        <div className='text-xs hover:cursor-pointer bg-blue9 text-white inline-flex lg:h-[25px] items-center justify-center lg:gap-2 rounded-[4px] py-1 px-2 lg:px-[10px] font-medium leading-none focus:outline-none' >
                                                            Explore plans
                                                        </div>
                                                    </>
                                                }
                                                content={<SubTiers />}
                                                dialogTitle='Explore plans'
                                                dialogDesc={`Choose your plan`}
                                            />

                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-slate10 font-semibold mb-1'>Cancel membership</h1>
                                        <DialogButton
                                            onClickfunction=''
                                            disabled=''
                                            saveButton='Cancel membership'
                                            myOwnButton={
                                                <>
                                                    <div className='ml-[38px] hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-2 px-2 text-xs lg:text-base lg:py-0 lg:px-[10px] lg:h-[35px] font-medium leading-none focus:outline-none' >
                                                        Keep membership
                                                    </div>
                                                </>
                                            }
                                            saveButtonColor='bg-red9'
                                            buttonText={
                                                <>
                                                    <div className='hover:cursor-pointer bg-red9 text-white inline-flex lg:h-[25px] items-center justify-center gap-1 lg:gap-2 rounded-[4px] py-2 px-2 text-xs  lg:py-0 lg:px-[10px] font-medium leading-none focus:outline-none' >
                                                        Cancel membership
                                                    </div>
                                                </>
                                            }
                                            dialogTitle='Cancel Membership'
                                            dialogDesc={`We're sorry to see you go {client.name}! Stay with us and get 15% off for the next three months!`}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-wrap flex-col justify-between '>
                                    <div className='mb-10'>
                                        <h1 className='text-slate10 font-semibold mb-1'>Billing period</h1>
                                        <p className='mb-1' id='text_gradient'>Monthly <span className='text-[10px]'>/Renews Jun. 13, 2023</span></p>
                                        <DialogButton
                                            onClickfunction=''
                                            disabled=''
                                            saveButton='Save changes'
                                            saveButtonColor='bg-blue9'
                                            buttonText={
                                                <>
                                                    <div className='text-xs hover:cursor-pointer bg-slate8 text-white inline-flex lg:h-[25px] items-center justify-center lg:gap-2 rounded-[4px] py-1 px-2 lg:px-[10px] font-medium leading-none focus:outline-none' >
                                                        Change billing period
                                                    </div>
                                                </>
                                            }
                                            dialogTitle='Membership Information'
                                            dialogDesc={`Edit your personal information below.`}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/** Card Three Billing */}
                        <div id='back-ground' className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base lg:p-5'>
                            <div className='flex justify-between p-5 bg-slate5 lg:bg-transparent lg:p-0 lg:mb-10'>
                                <h1 className='text-blue9 font-semibold'>Billing History</h1>
                                <DialogButton
                                    onClickfunction=''
                                    disabled=''
                                    content=''
                                    saveButton='Save changes'
                                    saveButtonColor='bg-red9'
                                    buttonText={
                                        <>
                                            <div className='hover:cursor-pointer bg-red9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                                Clear all invoices
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </>
                                    }
                                    dialogTitle='Edit Profile'
                                    dialogDesc={`Edit your profile below.`}
                                />
                            </div>
                            <div className='flex justify-between w-full'>
                                <BillingHistoryTable />
                            </div>
                        </div>
                    </div>
                </Tabs.Content>


                <Tabs.Content value="tab4">Tab four content</Tabs.Content>
            </Tabs.Root>

        </div>
    )
}

export default AccountSection