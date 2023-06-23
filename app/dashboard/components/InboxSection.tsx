import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/app/components/ShinyText';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

type Props = {}

const InboxSection = (props: Props) => {
    const [messageFullDisplay, setMessageFullDisplay] = useState('No message selected');

    const inboxMessage = [
        { message: 'Your order has been successflyy received. we will get back to you within 2-4 business days. thank you!' },
        { message: 'Inquiry regarding your recent request, please open it within 24 hrs to ' },
        { message: 'Congratulations! You are know a PixelCare Elite member, youre loaded with benefits' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
    ]

    const handleMessageClick = (i: any) => {
        const clickedMessage = inboxMessage[i].message;
        setMessageFullDisplay(clickedMessage);
    };


    return (


        <div className=''>
            <div className='ml-2 w-screen'>
                <ShinyText text='Messages' />
            </div>
            <div>
                <Tabs.Root defaultValue="tab1" orientation="vertical">
                    <div className=''>
                        <div className='ml-1 outline outline-1 rounded-lg shadow-md lg:max-w-[1200px]'>
                            <Tabs.List className="shrink-0 flex border-b border-mauve6 w-full hover:cursor-pointer" aria-label="Manage your account">
                                <Tabs.Trigger
                                    className="w-[50%]  bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab1"
                                >
                                    Inbox
                                </Tabs.Trigger>
                                <Tabs.Trigger
                                    className="w-[50%] bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-red9 data-[state=active]:text-red9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab2"
                                >
                                    Trash
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="tab1">
                                <div className='flex p-10 w-full h-[75vh]'>
                                    <div className='w-[30%] overflow-y-scroll'>
                                        {inboxMessage.length > 1 ?
                                            inboxMessage.map((messages, i) => (
                                                <>
                                                    <div className='p-2'>
                                                        <div className='bg-slate2 border border-1 rounded-lg mb-1 flex justify-between items-center hover:cursor-pointer hover:bg-slate4 p-3'
                                                            onClick={() => handleMessageClick(i)}
                                                            key={i}
                                                        >
                                                            <p className='text-[#22c55e]'>•</p>
                                                            <p className='w-[80%] truncate'>{messages.message}</p>
                                                            <div><ExternalLinkIcon /></div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                            :
                                            <div className='flex justify-center items-center h-full'>
                                                <h1 className='font-light text-4xl text-slate8'>
                                                    Inbox is empty
                                                </h1>
                                            </div>
                                        }
                                    </div>
                                    <div className='p-5 outline outline-1 w-[70%] h-full overflow-y-hidden rounded-lg'>
                                        <div className='p-2 flex justify-center items-center outline outline-1'>
                                            {messageFullDisplay}
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                            <Tabs.Content value="tab2" className='w-full'>
                                Tab two content
                            </Tabs.Content>
                            <Tabs.Content value="tab3">Tab three content</Tabs.Content>
                        </div>
                    </div>
                </Tabs.Root>
            </div>
        </div>

    )
}

export default InboxSection