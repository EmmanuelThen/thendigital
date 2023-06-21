import React from 'react'
import LabelDemo from '../components/Label'
import GoogleButton from '../components/GoogleButton'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import AccountTabs from '../components/AccountTabs'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='flex justify-center items-center h-[100vh] w-full' id='signinPage'>
            <AccountTabs
                firstTab='Sign In'
                secondTab='Create Account'
                firstTabContent={
                    <>
                        <div className='flex flex-col items-center gap-3 '>
                            <SignInForm />
                            <GoogleButton />
                        </div>
                    </>
                }
                secondTabContent={
                    <>
                        <div className='flex flex-col items-center gap-3 '>
                            <SignUpForm />
                            <GoogleButton />
                        </div>
                    </>
                }
            />
        </div>
    )
}

export default page
