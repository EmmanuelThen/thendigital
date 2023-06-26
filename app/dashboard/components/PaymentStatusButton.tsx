import React from 'react'
import DialogButton from '@/app/components/DialogButton'

type Props = {}

const PaymentStatusButton = (props: Props) => {
    return (
        < DialogButton
            onClickfunction=''
            disabled=''
            content=''
            saveButton='Save changes'
            saveButtonColor='bg-blue9'
            buttonText={

                <>
                    <button className='hover:cursor-pointer hover:bg-blue9/80 rounded-full bg-blue9 text-white inline-flex items-center justify-center gap-2 py-2 px-3 font-light leading-none focus:outline-none'>
                        <p className='text-[10px]'>Pay now</p>
                    </button>
                </>

            }
            dialogTitle='Edit Profile'
            dialogDesc={`Edit your profile below.`}
        />
    )
}

export default PaymentStatusButton;