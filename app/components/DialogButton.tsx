'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import EditTabs from './EditTabs';


type Props = {
    buttonText: any,
    dialogTitle: any,
    dialogDesc: string,
    content: any,
    saveButton: any,
    buttonDisplay: string,
    myOwnButtonDisplay: string,
    myOwnButton: any
    onClickfunction: any
}

const DialogButton = ({ buttonText, dialogTitle, dialogDesc, content, saveButton, buttonDisplay, myOwnButton, myOwnButtonDisplay, onClickfunction }: Props) => {
    

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="text-red9 hover:opacity-80 inline-flex  items-center justify-center rounded-md bg-white py-2 px-[15px] font-medium leading-none {shadow-[0_2px_10px]} focus:outline-none">
                    {buttonText}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-[105] bg-blackA9 backdrop-blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="border border-1 z-[106] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[95vw] max-w-[950px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        {dialogTitle}
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-2xl font-semibold leading-normal">
                        {dialogDesc}
                    </Dialog.Description>
                    <div className='flex justify-center'>
                        {content}
                    </div>
                    <div className="mt-[35px] flex justify-end">
                        <Dialog.Close asChild className={`${buttonDisplay}`}>
                            <button onClick={onClickfunction} className={`bg-red9 text-white hover:bg-red9/80 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none`}>
                                {saveButton}
                            </button>
                        </Dialog.Close>
                        <Dialog.Close asChild className={`${myOwnButtonDisplay}`}>
                            <button>
                                {myOwnButton}
                            </button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="text-red9 hover:bg-slate2 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default DialogButton;
