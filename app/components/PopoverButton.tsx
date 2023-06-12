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
                        <button onClick={() => addNewMessage('this is a long message in order to see if the truncate is working')}>
                            click here
                        </button>
                        {newMessages.length > 0 ? (
                            newMessages.map((message, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center rounded-md bg-white hover:bg-slate2 w-full p-2 shadow-md border-[1px] cursor-pointer"
                                >
                                    <p className='text-[#22c55e]'>•</p>
                                    <p className="font-light text-xs truncate ml-2">{message}</p>
                                    <div
                                        onClick={() => handleTrashClick(index)}
                                        className="rounded-full hover:bg-slate4 p-1"
                                    >
                                        <TrashIcon />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center">
                                <h1 className="font-light text-slate10">No new notifications</h1>
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

