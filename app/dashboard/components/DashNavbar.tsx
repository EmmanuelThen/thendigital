import React from 'react'
import DashAvatar from './DashAvatar'
import Toggle from '@/app/components/Toggle'
import DialogButton from '@/app/components/DialogButton'
import { ExternalLinkIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import DashCards from './DashCards'
import DashProgress from './DashProgress'
import DashProgressBottom from './DashProgressBottom'
import ShinyText from '@/app/components/ShinyText'
import DashSpeedTest from './DashSpeedTest'
import DashSpeedTestBottom from './DashSpeedTestBottom'
import DashAccordion from './DashAccordion'
import DashFileUpload from './DashFileUpload'
import DashMobileNavbar from './DashMobileNavbar'


type Props = {}

const DashNavbar = (props: Props) => {
    return (
        <div className='itWasOriginallyFlex'>
            <div className='hidden md:flex md:flex-col items-center justify-between border-r-[1px] p-10 w-fit overflow-y-hidden h-screen'>

                <div id='loginLogo' className='hidden md:block'>
                    <span className='font-semibold text-red9'>Then</span>
                    <span className='text-slate11'>Pixel</span>
                </div>


                <div id='loginName' className='hidden md:flex md:flex-col items-center font-semibold text-sm'>
                    <div id='loginAvatar' className='mb-5'>
                        <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
                    </div>
                    <p className='hidden md:block'>Client Name</p>
                    <div className='hidden md:flex justify-center mt-3'>
                        <p className='px-1 rounded-md w-fit text-[9px]'>
                            <DialogButton />
                        </p>
                    </div>
                </div>

                <div id='loginTabs' className='hidden md:flex flex-col gap-8 '>
                    <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                        <p className='font-light  '>Dashboard</p>
                    </button>
                    <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <p className='font-light '>Activity</p>
                    </button>
                    <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <p className='font-light '>Schedule</p>
                    </button>
                    <button className='p-2 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className='font-light '>Settings</p>
                    </button>
                </div>

                <div className='hidden md:block'>
                    <Toggle />
                </div>

            </div>

            <div id='dashCards' className='hidden {/*flex*/} flex-col p-10 w-full'>

                <div id='topBar-dashCards' className='flex justify-between items-center w-full'>
                    <h1>
                        <ShinyText text='Welcome Client Name' />
                    </h1>
                    <div className='flex items-center gap-5'>
                        <button type='button'>
                            Membership
                        </button>
                        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                            </path>
                        </svg>
                    </div>
                </div>

                <div id='cardGrid' className='grid grid-cols-3 gap-5 w-full h-full py-10'>
                    <div>
                        <DashCards
                            cardTitle='production tracker'
                            mainSection={<DashProgress />}
                            bottomSection={<DashProgressBottom />}
                            bgColor=''
                        />
                    </div>
                    <div>
                        <DashCards
                            cardTitle='production tracker'
                            mainSection={<DashProgress />}
                            bottomSection={<DashProgressBottom />}
                            bgColor=''
                        />
                    </div>
                    <div>
                        <DashCards
                            cardTitle='production tracker'
                            mainSection={<DashProgress />}
                            bottomSection={<DashProgressBottom />}
                            bgColor=''
                        />
                    </div>
                    <div>
                        <DashCards
                            cardTitle='production tracker'
                            mainSection={<DashProgress />}
                            bottomSection={<DashProgressBottom />}
                            bgColor=''
                        />
                    </div>
                    <div>
                        <DashCards
                            cardTitle='production tracker'
                            mainSection={<DashProgress />}
                            bottomSection={<DashProgressBottom />}
                            bgColor=''
                        />
                    </div>
                    <div>
                        <DashCards
                            cardTitle='website performance'
                            mainSection={<DashSpeedTest />}
                            bottomSection={<DashSpeedTestBottom />}
                            bgColor=''
                        />
                    </div>
                </div>
            </div>

            {/** Mobile screen nav */}
            <div>
                <DashMobileNavbar />
            </div>

            <div id='greeting' className='p-5'>
                <div className=''>
                    <ShinyText text='Welcome Client Name' />
                </div>

            </div>
            <div className='flex flex-col justify-between gap-10 p-2'>
                <DashAccordion
                    title1='production tracker'
                    title2='contracts & docs'
                    title3=''
                    title4=''
                    title5='{ PixelCare }'
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
    )
}

export default DashNavbar