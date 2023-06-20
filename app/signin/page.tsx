import React from 'react'
import LabelDemo from '../components/Label'
import GoogleButton from '../components/GoogleButton'
import SignInForm from '../components/SignInForm'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='flex justify-center items-center h-[100vh] w-full'>
            <div className='flex justify-center items-center border border-1 rounded-lg p-[200px] w-[500px] shadow-lg'>

                <div className='flex flex-col items-center gap-3 '>
                    <SignInForm />
                    <GoogleButton />
                </div>

            </div>
        </div>
    )
}

export default page