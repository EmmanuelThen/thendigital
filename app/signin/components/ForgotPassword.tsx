import DialogButton from '@/app/components/DialogButton'
import InputForms from '@/app/components/InputForms'
import Link from 'next/link'
import React from 'react'
import ForgotPasswordModal from './ForgotPasswordModal'
import ConfirmationButton from '@/app/components/ConfirmationButton'

type Props = {}

const ForgotPassword = (props: Props) => {
    return (
        <div>
            <DialogButton
                buttonText='Forgot password?'
                dialogTitle=''
                dialogDesc=''
                content={
                    <ForgotPasswordModal modalContentDisplay='' confirmationDisplay=''/>
                }
                saveButton=''
                buttonDisplay='hidden'
                myOwnButtonDisplay='hidden'
                myOwnButton={<ConfirmationButton buttonText='Continue' toastTitle='Email sent to:' toastContent='session.user.email'/>}

            />
        </div>
    )
}

export default ForgotPassword