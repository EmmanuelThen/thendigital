import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/app/components/ShinyText';
import DialogButton from '@/app/components/DialogButton';
import PopoverButton from '@/app/components/PopoverButton';

const InboxSection = () => {
    const [selectedMessageIndex, setSelectedMessageIndex] = useState(-1);
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
    const [trashMessageFullDisplay, setTrashMessageFullDisplay] = useState('No message selected');
    const [inboxTrash, setInboxTrash] = useState([]);
    const [greenDotDisplay, setGreenDotDisplay] = useState('')

    // To view Inbox message in full display
    const handleMessageClick = (i: any) => {
        const clickedMessage = inboxMessage[i].message;
        setMessageFullDisplay(clickedMessage);
        //To make red border on messaged currently clicked
        setSelectedMessageIndex(i);

        // Mark the message as read
        const updatedInboxMessage = [...inboxMessage];
        updatedInboxMessage[i].read = true;
        setInboxMessage(updatedInboxMessage);
    };

    // To view trash message in full display
    const handleMessagInTrashClick = (i) => {
        const clickedMessageInTrash = inboxTrash[i].message;
        setTrashMessageFullDisplay(clickedMessageInTrash);
        setSelectedMessageIndex(i);
    }

    // When a trash can is clicked in Inbox
    const handleTrashCanClick = (i: any) => {
        const trashedMessage = inboxMessage[i];

        // Mark the message as read
        const updatedInboxTrashMessage = [...inboxMessage];
        updatedInboxTrashMessage[i].read = true;
        setInboxMessage(updatedInboxTrashMessage);

        // To remove from previous array (inbox)
        setInboxTrash((prevTrash) => [...prevTrash, trashedMessage]);
        setInboxMessage((prevMessages) => prevMessages.filter((_, index) => index !== i));

        // Check if the deleted message is the last one
        if (i === inboxMessage.length - 1) {
            setMessageFullDisplay('No message selected');
        } else {
            // Set the Full display message to the message right under the deleted message since it's deleted now.
            const clickedMessage = inboxMessage[i + 1].message;
            setMessageFullDisplay(clickedMessage);
        }
    };

    //When right arrow is clicked to show next message
    const handleRightArrowClick = () => {
        if (selectedMessageIndex < inboxMessage.length - 1) {
            const nextMessage = inboxMessage[selectedMessageIndex + 1].message;
            setMessageFullDisplay(nextMessage);
            setSelectedMessageIndex(selectedMessageIndex + 1);
        }
    };
    //When left arrow is clicked to show prev message but can loop around after reaching the last message
    const handleLeftArrowClick = () => {
        const nextIndex = (selectedMessageIndex - 1 + inboxMessage.length) % inboxMessage.length;
        const nextMessage = inboxMessage[nextIndex].message;
        setMessageFullDisplay(nextMessage);
        setSelectedMessageIndex(nextIndex);
    };

    // Button to permanently delete all trashed messages
    const handleEmptyTrashClick = () => {
        setInboxTrash([]);
        setTrashMessageFullDisplay('No message selected')
    }

    // Button in fullDisplay view that deletes the current message that is being seen
    const handleDeleteButtonWithMessageInView = () => {
        const currentIndex = selectedMessageIndex;
        const updatedInboxMessage = [...inboxMessage];
        const deletedMessage = updatedInboxMessage[currentIndex];

        // Add the deleted message to the inboxTrash array
        const updatedInboxTrash = [...inboxTrash, deletedMessage];

        // Remove the current message from the inboxMessage array
        updatedInboxMessage.splice(currentIndex, 1);

        setInboxMessage(updatedInboxMessage);
        setInboxTrash(updatedInboxTrash);

        // Fix this function becuase when you delete the last message left in inbox with the DeleteButtonWhileMessageIsInView the message display is blank when it should say 'No message selected
        if (updatedInboxMessage.length === 0) {
            setSelectedMessageIndex(null);
            setMessageFullDisplay('');
        } else if (currentIndex === updatedInboxMessage.length) {
            setSelectedMessageIndex(0);
            setMessageFullDisplay(updatedInboxMessage[0].message);
        } else {
            setSelectedMessageIndex(currentIndex);
            setMessageFullDisplay(updatedInboxMessage[currentIndex].message);
        }
    };

    const handleDeleteNotificationButtonClick = () => {
        setGreenDotDisplay('hidden');
    }

    const handleDeleteAllInboxButton = () => {
        setInboxMessage([]);
        setInboxTrash([...inboxMessage, ...inboxTrash])
        setMessageFullDisplay('No message selected')
    }

    // To disable delete current message in display button while there is no message in display
    const isButtonDisabled = messageFullDisplay === 'No message selected';
    // To disble clear notification button when there are no new messages
    const isNotificationButtonDisabled = inboxMessage.length < 0

    return (
        <div className="">
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Messages" />
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
            <div>
                <Tabs.Root defaultValue="tab1" orientation="vertical">
                    <div className="">
                        <div className="bg-white lg:ml-1 rounded-lg shadow-lg {lg:w-[1275px] 2xl:w-[1685px]} {4xl:w-[2209px]}">
                            <Tabs.List className="shrink-0 flex border-b border-mauve6 w-full lg:border-2 rounded-lg hover:cursor-pointer bg-white" aria-label="Manage your account">
                                <Tabs.Trigger
                                    className="uppercase tracking-[5px] w-[50%]  bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-xs lg:text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab1"
                                >
                                    Inbox
                                </Tabs.Trigger>
                                <Tabs.Trigger
                                    className="uppercase tracking-[5px] w-[50%] bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-xs lg:text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab2"
                                >
                                    Trash
                                </Tabs.Trigger>
                            </Tabs.List>
                            {/** Inbox section */}
                            <Tabs.Content value="tab1">
                                <div className="lg:flex w-full h-screen bg-slate4 lg:p-2 lg:w-full lg:h-[75vh]" id='messageFullDisplay'>
                                    <div className="lg:w-[35%] overflow-y-scroll">
                                        {inboxMessage.length > 0 ? (
                                            inboxMessage.map((message, i) => (
                                                <div className='flex items-center w-[93vw] lg:w-full' key={i}>
                                                    <div className="p-2 w-full">
                                                        <div
                                                            className={
                                                                `${selectedMessageIndex === i ? 'outline outline-1 outline-blue9' : ''
                                                                } ml-2 lg:ml-0 scale-in-center lg:max-w-[385px] shadow-md bg-slate2 rounded-lg mb-1 flex justify-between items-center hover:cursor-pointer hover:bg-slate4 p-3 max-w-[848px] lg:p-5`
                                                            }
                                                            onClick={() => handleMessageClick(i)}
                                                        >
                                                            {message.read ? (
                                                                ''
                                                            ) : (
                                                                <p className={`${greenDotDisplay} text-blue9`}>•</p>
                                                            )}
                                                            <p className="truncate text-xs lg:text-sm ml-2">{message.message}</p>
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
                                            <div className="flex flex-col justify-center items-center h-full bg-slate4 p-5 lg:p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                                </svg>
                                                <h1 className="font-light uppercase tracking-[5px] text-slate8">Inbox is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-white p-3 lg:p-5 lg:ml-3 shadow-lg border border-1 lg:w-[65%] 2xl:w-[90%] h-full overflow-y-hidden rounded-lg">
                                        <div className='lg:w-full flex justify-between items-center mb-1'>
                                            {/** Double arrows */}
                                            <div className='hidden lg:flex'>
                                                {inboxMessage.length > 0 ?
                                                    <div className='flex gap-2'>
                                                        <div onClick={handleLeftArrowClick} className='border border-1 rounded-[4px] bg-slate2 hover:bg-slate4 hover:cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                            </svg>
                                                        </div>
                                                        <div onClick={handleRightArrowClick} className='border border-1 rounded-[4px] bg-slate2 hover:bg-slate4 hover:cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                            </div>
                                            {/** clearNotifications and Delete button */}
                                            <div className='flex items-center lg:gap-5 lg:mb-2' id='threeInboxButtons'>
                                                {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                    <button onClick={handleDeleteNotificationButtonClick}
                                                        disabled={isNotificationButtonDisabled}
                                                        type='button'
                                                        className='bg-slate8 hover:bg-slate8/80 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'
                                                    >
                                                        Notifications
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="hsl(206 100% 50.0%)" className="w-4 lg:w-5 h-4 lg:h-5">
                                                            <path fill='hsl(206 100% 50.0%)' strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </button>
                                                    :
                                                    ''
                                                }

                                                <DialogButton
                                                    onClickfunction={handleDeleteButtonWithMessageInView}
                                                    disabled={isButtonDisabled}
                                                    saveButton='Continue'
                                                    saveButtonColor='bg-red9'
                                                    buttonText={
                                                        <>
                                                            {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                                <div className='hover:cursor-pointer bg-red9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                                                    Delete
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 lg:w-5 h-4 lg:h-5">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </>
                                                    }
                                                    dialogTitle='Delete message'
                                                    dialogDesc={`Are you sure you want to delete this message?`}
                                                />
                                                <DialogButton
                                                    onClickfunction={handleDeleteAllInboxButton}
                                                    disabled=''
                                                    saveButton='Continue'
                                                    saveButtonColor='bg-red9'
                                                    buttonText={
                                                        <>
                                                            {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                                                    Delete All
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                                    </svg>

                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </>
                                                    }
                                                    dialogTitle='Delete message'
                                                    dialogDesc={`Are you sure you want to delete all of your messages? This can't be reversed.`}
                                                />
                                            </div>
                                        </div>
                                        <div className="sticky h-full p-2 mt-5 lg:mt-0">
                                            <div className={
                                                messageFullDisplay === 'No message selected' ?
                                                    `font-light flex justify-center items-center text-xs lg:text-base lg:h-[500px] uppercase tracking-[5px] text-slate8` :
                                                    `font-light`}
                                            >
                                                {messageFullDisplay}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                            {/** Trash section */}
                            <Tabs.Content value="tab2" className="w-full">
                                <div className="flex lg:p-2 w-full h-screen lg:h-[75vh] bg-slate4" id='trashMessageFullDisplay'>
                                    <div className="lg:w-[35%] w-full overflow-y-scroll">
                                        {inboxTrash.length > 0 ? (
                                            inboxTrash.map((message, i) => (
                                                <div className='flex items-center w-[98vw] lg:w-full' key={i}>
                                                    <div className="p-2 w-full">
                                                        <div
                                                            className={
                                                                `${selectedMessageIndex === i ? 'outline outline-1 outline-blue9' : ''
                                                                } ml-2 scale-in-center lg:max-w-[385px] shadow-md bg-slate2 rounded-lg mb-1 flex justify-between items-center hover:cursor-pointer hover:bg-slate4 max-w-[848px] p-3 lg:p-5`
                                                            }
                                                            onClick={() => handleMessagInTrashClick(i)}
                                                        >
                                                            {message.read
                                                                ?
                                                                // Check icon
                                                                ''
                                                                :
                                                                <p className={`${greenDotDisplay} text-blue9`}>•</p>
                                                            }
                                                            <p className="truncate text-xs lg:text-sm ml-2">{message.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex flex-col justify-center items-center h-full bg-slate4 p-5 lg:p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                                </svg>
                                                <h1 className="font-light  uppercase tracking-[5px] text-slate8">Trash is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div className="bg-white p-3 lg:p-5 lg:ml-3 shadow-lg border border-1 lg:w-[65%] 2xl:w-[90%] h-full overflow-y-hidden rounded-lg">
                                        <div className='flex justify-end pb-2'>
                                            <DialogButton
                                                onClickfunction={handleEmptyTrashClick}
                                                saveButton='Continue'
                                                saveButtonColor='bg-red9'
                                                buttonText={
                                                    <>
                                                        {inboxTrash.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                            <div className='bg-red9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none' >
                                                                Empty trash
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            :
                                                            ''
                                                        }
                                                    </>
                                                }
                                                dialogTitle='Empty trash'
                                                dialogDesc={`Are you sure you want to delete all of your messages? This can't be reversed.`}
                                                content=''
                                                buttonDisplay=''
                                                myOwnButtonDisplay=''
                                                myOwnButton=''
                                                disabled=''
                                            />
                                        </div>
                                        <div className="sticky h-full p-2 mt-5 lg:mt-0">
                                            <div className={
                                                trashMessageFullDisplay === 'No message selected' ?
                                                    `font-light flex justify-center items-center text-xs lg:text-base lg:h-[500px] uppercase tracking-[5px] text-slate8` :
                                                    `font-light`}
                                            >
                                                {trashMessageFullDisplay}
                                            </div>
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
