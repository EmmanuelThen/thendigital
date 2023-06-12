import React from 'react';
import * as Label from '@radix-ui/react-label';
import ToastButton from '../dashboard/components/ToastButton';

type Props = {
    label: string,
    defaultValue: string
}

const LabelDemo = ({ label, defaultValue }: Props) => (
  <div className="flex flex-wrap items-center gap-[15px] px-5">
    <Label.Root className="text-[15px] font-medium" htmlFor="firstName">
      {label}
    </Label.Root>
    <div className='flex'>
      <input
        className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
        type="text"
        id="firstName"
        placeholder={defaultValue}
      />
      <div className='ml-3'>
        <ToastButton />
      </div>
    </div>
  </div>
);

export default LabelDemo;

