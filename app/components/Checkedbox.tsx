import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const Checkedbox = ({ label, onClick, checked, onCheckedChange, id, htmlFor }: any) => {
    return (

        <div
            className="flex items-center"
            onClick={onClick}
        >
            <Checkbox.Root
                className="shadow-blackA7 hover:bg-blue3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-md outline outline-1 outline-slate6"
                checked={checked}
                onCheckedChange={onCheckedChange}
                id={id}
            >
                <Checkbox.Indicator className="text-blue9">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd">
                        </path>
                    </svg>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="font-medium text-slate10 pl-[15px] text-sm lg:text-[15px] leading-none" htmlFor={htmlFor}>
                {label}
            </label>
        </div>

    )
};

export default Checkedbox;
