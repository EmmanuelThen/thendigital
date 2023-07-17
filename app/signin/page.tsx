'use client'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AuthForm from '../components/auth-form'




type Props = {}

const page = (props: Props) => {
    
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div  className='flex justify-center w-full items-center h-screen'>
                <AuthForm />
            </div>

        </>

    )
    
}


export default page
