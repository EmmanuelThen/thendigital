'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';


interface AvatarContextProps {
    avatar: any;
    changeAvatar: (newAvatar: any) => void;
    clearAvatar: any
}

// Create the AvatarContext
const AvatarContext = createContext<AvatarContextProps | undefined>(undefined);

// AvatarContext provider component
export const AvatarProvider: React.FC = ({ children }: any) => {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const storedAvatar = localStorage.getItem(avatar);

        if (storedAvatar) {
            setAvatar(storedAvatar);
        }
    }, [avatar]);

    const changeAvatar = (newAvatar: any) => {
        setAvatar(newAvatar);
        localStorage.setItem('avatar', newAvatar);
    };

    const clearAvatar = () => {
        setAvatar('');
    };



    const avatarContextValue: AvatarContextProps = {
        avatar,
        changeAvatar,
        clearAvatar
    };

    return (
        <AvatarContext.Provider value={avatarContextValue}>
            {children}
        </AvatarContext.Provider>
    );
};

// Custom hook to access the avatar state
export const useAvatar = (): AvatarContextProps => {
    const context = useContext(AvatarContext);
    if (!context) {
        throw new Error('useAvatar must be used within an AvatarProvider');
    }
    return context;
};




