import React from 'react'
import DashNavbar from './DashNavbar'
import DashGridSection from './DashGridSection'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className='flex'>
            <div className='fixed h-screen overflow-hidden'>
                <DashNavbar />
            </div>
            <section className='ml-[210px] hidden md:block w-full overflow-y-scroll'>
                <DashGridSection />
            </section>
        </div>
    )
}

export default Dashboard