'use client'
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { useAvatar } from '@/context/AvatarContext';
import Image from 'next/image';


type Props = {
    iconHeight: string,
    iconWidth: string,
}

const avatarFallback = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'


const DashAvatar = ({ iconHeight, iconWidth }: Props) => {
    const { avatar, changeAvatar } = useAvatar();

    return (
        <div className="flex gap-5">
            <Avatar.Root className={`bg-blackA3 border border-1 inline-flex ${iconHeight} ${iconWidth} select-none items-center justify-center overflow-hidden rounded-full align-middle`}>
                <Avatar.Image
                    className="h-full w-full rounded-[inherit] object-cover"
                    src={avatar}
                    alt="Avatar"
                />
                <Avatar.Fallback
                    className="text-red9 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                    delayMs={600}
                >
                    CT{/** Use client first-name[0] and last-name[0] initials when you add logins */}
                </Avatar.Fallback>
            </Avatar.Root>
        </div>
    )
};

export default DashAvatar;
