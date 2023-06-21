import React from 'react'
import Link from 'next/link'
import InputForms from '@/app/components/InputForms'

type Props = {}

const ForgotPasswordModal = (props: Props) => {
    return (
        <>

            <div>
                <p>Enter the email address associated with your account and we will send you a link to reset your password.</p>
                <div className='flex flex-col items-center justify-center'>
                    <InputForms
                        valueMissingMessage='Please enter your email'
                        typeMismatchMessage='Please enter a valid email'
                        buttonText=''
                        buttonDisplay='hidden'
                    />

                </div>
            </div>

        </>
    )
}

export default ForgotPasswordModal