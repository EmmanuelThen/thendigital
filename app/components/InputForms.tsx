'use client'
import React from 'react';
import * as Form from '@radix-ui/react-form';

interface InputFormInterface {
    valueMissingMessage: any
    typeMismatchMessage: any
    buttonText: any
    buttonDisplay: string
    userInput: any
    onUserInput: (value: any) => void
}

const InputForms = ({ valueMissingMessage, typeMismatchMessage, buttonText, buttonDisplay, userInput, onUserInput }: InputFormInterface) => {


    return (
        <Form.Root className="w-[75%] p-2">
            <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Email</Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border w-full bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        onChange={onUserInput}
                        value={userInput}
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <button className={`${buttonDisplay} box-border w-full text-red9 shadow-blackA7 hover:bg-slate2 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]`}>
                    {buttonText}
                </button>
            </Form.Submit>
        </Form.Root>
    )
};

export default InputForms;