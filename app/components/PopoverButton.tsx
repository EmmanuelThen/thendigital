'use client'
import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon, TrashIcon } from '@radix-ui/react-icons';
import * as HoverCard from '@radix-ui/react-hover-card'

type Props = {
    icon: any;
};

const PopoverButton = ({ icon }: Props) => {
    const [newMessages, setNewMessages] = useState<string[]>([]);

    const handleTrashClick = (index: number) => {
        setNewMessages((prevMessages) =>
            prevMessages.filter((_, i) => i !== index)
        );
    };

    //Use this function to send a new message to a clients inbox
    const addNewMessage = (message: string) => {
        setNewMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-slate2 cursor-pointer outline-none"
                    aria-label="Update dimensions"
                >
                    {icon}
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    className="rounded-md p-5 w-[300px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.red7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <div className="flex flex-col gap-2.5">
                        <p className="text-[15px] leading-[19px] font-medium mb-2.5">
                            Notifications
                        </p>
                        <button className='border border-1 border-red9 rounded-lg' onClick={() => addNewMessage('this is a long message in order to see if the truncate is working')}>
                            click here
                        </button>
                        {newMessages.length > 0 ? (
                            newMessages.map((message, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center rounded-md bg-slate2 hover:bg-slate4 w-full p-2 shadow-md border-[1px] cursor-pointer"
                                >
                                    <p className='text-[#22c55e]'>•</p>
                                    <p className="font-light text-xs truncate ml-2">{message}</p>
                                    <div
                                        onClick={() => handleTrashClick(index)}
                                        className="rounded-full hover:bg-slate6 p-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358 75% 59%)" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="hsl(205 10.7% 78.0%)" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
                                </svg>

                                <h1 className="font-light text-slate8">No new notifications</h1>

                            </div>
                        )}
                    </div>
                    <Popover.Close
                        className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] hover:bg-slate2 outline-none cursor-pointer"
                        aria-label="Close"
                    >
                        <Cross2Icon />
                    </Popover.Close>
                    <Popover.Arrow className="fill-white" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export default PopoverButton;

