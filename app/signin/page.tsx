import React from 'react'
import LabelDemo from '../components/Label'
import GoogleButton from '../components/GoogleButton'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import AccountTabs from '../components/AccountTabs'
import DiscordButton from '../components/DiscordButton'
import TwitterButton from '../components/TwitterButton'
import ConfirmationButton from '../components/ConfirmationButton'

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
                            <DiscordButton />
                            <TwitterButton />
                        </div>
                    </>
                }
                secondTabContent={
                    <>
                        <div className='flex flex-col items-center gap-3 '>
                            <SignUpForm />
                            <GoogleButton />
                            <DiscordButton />
                            <TwitterButton />
                        </div>
                    </>
                }
            />
        </div>
    )
}

export default page
