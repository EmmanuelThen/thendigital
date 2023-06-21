import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import InputForms from '@/app/components/InputForms'

type Props = {
    modalContentDisplay: any
    confirmationDisplay: any
}

const ForgotPasswordModal = ({ }: Props) => {

    const [modalContentDisplay, setModalContentDisplay] = useState('block');
    const [confirmationDisplay, setConfirmationDisplay] = useState('hidden');
    const [confirmationText, setConfirmationText] = useState('hidden')
    const [userInput, setUserInput] = useState('')

    const handleButtonClickConfirmation = () => {
        setModalContentDisplay('hidden')
        setConfirmationDisplay('block')
    };

    useEffect(() => {
        setTimeout(function () {
            setConfirmationText("fade-in block");
        }, 1000);

    })

    const handleUserInput = (e: any) => {
        setUserInput(e.target.value);
    };

    return (
        <>

            <div className={`${modalContentDisplay} flex flex-col gap-10 `}>
                <p>Enter the email address associated with your account and we will send you a link to reset your password.</p>
                <div className='flex flex-col items-center justify-center'>
                    <InputForms
                        valueMissingMessage='Please enter your email'
                        typeMismatchMessage='Please enter a valid email'
                        buttonText=''
                        buttonDisplay='hidden'
                        userInput={userInput}
                        onUserInput={handleUserInput}
                    />

                </div>
                <div className='flex justify-center w-full'>
                    <button onClick={handleButtonClickConfirmation}
                        className={` bg-red9 text-white hover:bg-red9/80 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none`}
                    >
                        Continue
                    </button>
                </div>
            </div>

            {/** Confirmation display */}
            <div className={`flex flex-col gap-10 items-center justify-center w-full ${confirmationDisplay}`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#22c55e" className="w-10 h-10">
                        <path className='slide-in-blurred-bottom' strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className={`flex flex-col gap-4 ${confirmationText}`}>
                    <p className='font-semibold text-2xl text-slate10'>Email has been sent to:</p>
                    <p className='text-center font-medium'>{userInput}</p>
                </div>
            </div>

        </>
    )
}

export default ForgotPasswordModal