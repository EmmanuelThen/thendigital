import React from 'react'
import DialogButton from '@/app/components/DialogButton'

interface PaymentStatusButtonProps {
    paymentStatus: string;
}

const PaymentStatusButton = ({ paymentStatus }: PaymentStatusButtonProps) => {
    //To fix issue when 'paid' or 'pending buttons are clicked, the pay now button goes away due to me setting the state of the display css property
    if (paymentStatus === 'failed') {
        return (
            < DialogButton
                onClickfunction=''
                disabled=''
                content=''
                saveButton='Save changes'
                saveButtonColor='bg-blue9'
                buttonText={

                    <>
                        <button className='hover:cursor-pointer hover:bg-blue9/80 rounded-[4px] bg-blue9 text-white inline-flex items-center justify-center py-1 px-1 text-xs lg:text-base lg:px-3 font-light leading-none focus:outline-none'>
                            <p className='text-[10px]'>Pay now</p>
                        </button>
                    </>

                }
                dialogTitle='Edit Profile'
                dialogDesc={`Edit your profile below.`}
            />
        )
    }
    return null;
}

export default PaymentStatusButton;