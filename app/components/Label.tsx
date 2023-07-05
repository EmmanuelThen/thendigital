'use client'
import React from 'react';
import * as Label from '@radix-ui/react-label';
import ToastButton from '../dashboard/components/ToastButton';

type Props = {
    label: string,
    defaultValue: string,
    buttonDisplay: any
    onChange: any
}

const LabelDemo = ({ label, defaultValue, buttonDisplay, onChange }: Props) => (
  <div className="flex flex-col flex-wrap gap-[15px] px-5">
    <Label.Root className="text-sm lg:text-[15px] font-medium" htmlFor="firstName">
      {label}
    </Label.Root>
    <div className='flex'>
      <input
        className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[300px] appearance-none items-center justify-center rounded-lg px-[10px] text-sm lg:text-[15px] leading-none  shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
        type="text"
        id="firstName"
        placeholder={defaultValue}
        onChange={onChange}
      />
      <div className={` ${buttonDisplay} ml-3 border border-1 border-blue9 rounded-md`}>
        <ToastButton />
      </div>
    </div>
  </div>
);

export default LabelDemo;

