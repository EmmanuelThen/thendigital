'use client'
import React from 'react';
import * as Switch from '@radix-ui/react-switch';

type Props = {
    label: any
    defaultChecked: boolean
    checked: boolean
    onCheckedChange: (checked: boolean) => void;
}

const Toggle = ({ label, defaultChecked, checked, onCheckedChange }: Props) => {
    

    return (
        <form>
            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                <label className="text-slate10 text-[15px] leading-none pr-[15px]" htmlFor="notification-toggle">
                    {label}
                </label>
                <Switch.Root
                    className="w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 data-[state=checked]:bg-blue9 outline-none hover:cursor-pointer"
                    id="airplane-mode"
                    defaultChecked={defaultChecked}
                    onCheckedChange={onCheckedChange}
                    checked={checked}
                    style={{ '-webkit-tap-highlight-color': 'hsl(206 100% 50.0%)' }}
                >
                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
            </div>
        </form>
    )
};

export default Toggle;
