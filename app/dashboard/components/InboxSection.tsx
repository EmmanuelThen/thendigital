import React, { use, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/app/components/ShinyText';
import DialogButton from '@/app/components/DialogButton';

const InboxSection = () => {
    const [messageFullDisplay, setMessageFullDisplay] = useState('No message selected');
    const [inboxMessage, setInboxMessage] = useState([
        { message: 'Your order has been successflyy received. we will get back to you within 2-4 business days. thank you!' },
        { message: 'Inquiry regarding your recent request, please open it within 24 hrs tofdfdfdfdfdfdfdfdffdffdfdfdfdf' },
        { message: 'Congratulations! You are know a PixelCare Elite member, youre loaded with benefitsfdfdfdfdfdfdfdf' },
        { message: 'Welcome to ThenPixels! we are honored to have you, we look forward to a long future with us!' },
        { message: 'Hello your site is now up and running and will need to be deployed to have further instructions on how to look' },
        { message: 'Change your payment info because i wnant you to change it ypu need to change it right now please tank you very much' },
        { message: 'This is random text that i am writing i order to test the messaging feture of my app called thenpixels thank you for cooperating' },
        { message: 'Try clearing your browser cache and then attempt to use the trash can functionality againTry clearing your browser cache and then attempt to use the trash can functionality again' },
        { message: 'If the issue persists, reach out to the customer support team of the application or platform you are using. They should be able to provide further assistance and troubleshoot the problem more specifically.' },
        { message: 'Refresh the page or restart the application: Sometimes, the issue can be temporary, and a simple refresh or restart can resolve it.csdhsdgsjhdhjsgdjsh' },
        { message: 'I apologize for the inconvenience. To troubleshoot the issue with the trash can functionality, here are a few steps you can take:sasaasas' },
        { message: 'Remember to provide specific details about the issue you are facing when contacting customer support. This will help them understand the problem better and provide a quicker resolution.' },
    ]);
    const [trashMessageFullDisplay, setTrashMessageFullDisplay] = useState('No message selected')
    const [inboxTrash, setInboxTrash] = useState([]);

    const handleMessageClick = (i: any) => {
        const clickedMessage = inboxMessage[i].message;
        setMessageFullDisplay(clickedMessage);

        // Mark the message as read
        const updatedInboxMessage = [...inboxMessage];
        updatedInboxMessage[i].read = true;
        setInboxMessage(updatedInboxMessage);
    };

    const handleMessagInTrashClick = (i) => {
        const clickedMessageInTrash = inboxTrash[i].message;
        setTrashMessageFullDisplay(clickedMessageInTrash);
    }

    const handleTrashCanClick = (i: any) => {
        const trashedMessage = inboxMessage[i];
        // Mark the message as read
        const updatedInboxTrashMessage = [...inboxMessage];
        updatedInboxTrashMessage[i].read = true;
        setInboxMessage(updatedInboxTrashMessage);

        setInboxTrash((prevTrash) => [...prevTrash, trashedMessage]);
        setInboxMessage((prevMessages) => prevMessages.filter((_, index) => index !== i)); //To remove from previous array (inbox)
    };

    const handleEmptyTrashClick = () => {
        setInboxTrash([]);
        setTrashMessageFullDisplay('No message selected')
    }

    return (
        <div className="">
            <div className="ml-2 w-screen">
                <ShinyText text="Messages" />
            </div>
            <div>
                <Tabs.Root defaultValue="tab1" orientation="vertical">
                    <div className="">
                        <div className="ml-1 outline outline-1 rounded-lg shadow-md lg:max-w-[1275px]">
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
                            {/** Inbox section */}
                            <Tabs.Content value="tab1">
                                <div className="flex p-2 w-full h-[75vh]">
                                    <div className="w-[35%] overflow-y-scroll">
                                        {inboxMessage.length > 0 ? (
                                            inboxMessage.map((message, i) => (
                                                <div className='flex items-center'>
                                                    <div className="p-2" key={i}>
                                                        <div
                                                            className="scale-in-center max-w-[385px] shadow-md  bg-slate2  rounded-lg mb-1 flex justify-between  items-center hover:cursor-pointer hover:bg-slate4 p-5"
                                                            onClick={() => handleMessageClick(i)}
                                                        >
                                                            {message.read
                                                                ?
                                                                // Check icon
                                                                <svg width="16" height="16" stroke='currentColor' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                                :
                                                                <p className="text-[#22c55e]">•</p>
                                                            }
                                                            <p className="truncate text-sm ml-2">{message.message}</p>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleTrashCanClick(i)} className='rounded-full hover:bg-slate4 p-1 hover:cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358 75% 59%)" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex justify-center items-center h-full">
                                                <h1 className="font-light text-4xl text-slate8">Inbox is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div className="hidden lg:block p-5 ml-3 outline outline-1 w-[65%] h-full overflow-y-hidden rounded-lg">
                                        <div className='w-full flex justify-between items-center'>
                                            {/** Double arrows */}
                                            <div className='flex gap-2'>
                                                <div className='border border-1 rounded-[4px] bg-slate2 hover:bg-slate4 hover:cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                    </svg>

                                                </div>
                                                <div className='border border-1 rounded-[4px] bg-slate2 hover:bg-slate4 hover:cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/** Reply and delete button */}
                                            <div className='flex  mb-2'>
                                                <DialogButton
                                                    onClickfunction={handleEmptyTrashClick}
                                                    saveButton='Continue'
                                                    buttonText={
                                                        <>
                                                            {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                                <div className='bg-red9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                                    Delete
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-4 h-4">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </>
                                                    }
                                                    dialogTitle='Delete message'
                                                    dialogDesc={`Are you sure you want to delete this message, this can't be undone.`}
                                                />
                                            </div>
                                        </div>
                                        <div className=" p-2 flex justify-center items-center outline outline-1">
                                            <div className=''>{messageFullDisplay}</div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                            {/** Trash section */}
                            <Tabs.Content value="tab2" className="w-full">
                                <div className="flex p-2 w-full h-[75vh]">
                                    <div className="w-[35%] overflow-y-scroll">
                                        {inboxTrash.length > 0 ? (
                                            inboxTrash.map((message, i) => (
                                                <div className='flex items-center'>
                                                    <div className="p-2" key={i}>
                                                        <div
                                                            className="scale-in-center max-w-[385px] shadow-md  bg-slate2  rounded-lg mb-1 flex justify-between  items-center hover:cursor-pointer hover:bg-slate4 p-5"
                                                            onClick={() => handleMessagInTrashClick(i)}
                                                        >
                                                            {message.read
                                                                ?
                                                                // Check icon
                                                                <svg width="16" height="16" stroke='currentColor' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                                :
                                                                <p className="text-[#22c55e]">•</p>
                                                            }
                                                            <p className="truncate text-sm ml-2">{message.message}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex justify-center items-center h-full">
                                                <h1 className="font-light text-4xl text-slate8">Trash is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div className="hidden lg:block p-5 ml-3 outline outline-1 w-[65%] h-full overflow-y-hidden rounded-lg">
                                        <div className='flex justify-end pb-2'>
                                            <DialogButton
                                                onClickfunction={handleEmptyTrashClick}
                                                saveButton='Continue'
                                                buttonText={
                                                    <>
                                                        {inboxTrash.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                            <div className='bg-red9 text-white inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[15px] font-light leading-none focus:outline-none' >
                                                                Empty trash
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            :
                                                            ''
                                                        }
                                                    </>
                                                }
                                                dialogTitle='Empty trash'
                                                dialogDesc={`Are you sure you want to delete all your messages, this can't be undone.`}
                                            />
                                        </div>
                                        <div className="p-2 flex justify-center items-center outline outline-1">
                                            <div>{trashMessageFullDisplay}</div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                        </div>
                    </div>
                </Tabs.Root>
            </div>
        </div>
    );
};

export default InboxSection;
